import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native';

const UserData = () => {

    const [myUserData, setMyUserData] = useState()
    const [isLoaded, setIsLoaded] = useState(true)
    const getUserData = async () => {
        try {
            const response = await fetch("https://thapatechnical.github.io/userapi/users.json")
            const mydata = await response.json();
            console.log(mydata)
            setMyUserData(mydata)
            setIsLoaded(false)
        }
        catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        getUserData()
    }, [])


    return <View style={styles.mainContainer}>

       { isLoaded? (<View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff"/>
              </View>):
        ( <View> 
      {/* <Text style={styles.mainHeader}>List of Students</Text> */}
        <FlatList
            data={myUserData}
            renderItem={({ item }) => {
                return (
                    <View style={styles.card}>
                        <View style={styles.imgContainer}>
                            <Image style={styles.imgStyle}
                                resizeMode='cover'
                                source={{ uri: item.image }}

                            />
                        </View>
                        <View>
                            <View style={styles.bioDataContainer}>
                                <Text style={styles.bioData}> Bio-Data</Text>
                                <Text style={styles.idNumber}>{item.id}</Text>

                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.myName}>Name:{item.name}</Text>
                                <Text style={styles.myName}>email:{item.email}</Text>
                                <Text style={styles.myName}>phNO:{item.mobile}</Text>

                            </View>
                        </View>

                    </View>
                )
            }}
        />
        </View>)
}
        </View>

        
    
}

const styles = StyleSheet.create({
    loader:
    {
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainContainer:
    {
        width: "100%",
        paddingTop: 20,
        //backgroundColor: "#b696d7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    card:
    {
        width:250,
        backgroundColor:"#fff",
        borderRadius:5,
        marginVertical:20,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"



    },
    bioDataContainer:
    {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#353535",
        paddingVertical: 10
        //fontFamily: "JosefinSans_400Regular"


    },
    idNumber:
    {
        fontSize: 20,
        color: "rgba(255,255,255,0.5)"
        //fontFamily: "JosefinSans_400Regular",
    },
    bioData:
    {
        fontSize: 30,
        color: "#fff",
        //fontFamily: "JosefinSans_400Regular"
    },

    mainHeader:
    {
        fontSize: 20,
        color: "#fff",
       // fontFamily: "JosefinSans_400Regular"
    },
    imgContainer:
    {
        padding: 10,
    },
    imgStyle:
    {
        width: "100%",
        height: 180

    },
    infoContainer:
    {
        width: "100%",
        
        backgroundColor: "#353535",
        
        //fontFamily: "JosefinSans_400Regular"


    },
    myName:
    {
        marginLeft:10,
        fontSize: 15,
        color: "#fff",
        
       // fontFamily: "JosefinSans_400Regular",
    }



})



export default UserData