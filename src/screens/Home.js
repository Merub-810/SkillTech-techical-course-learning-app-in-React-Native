import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../Component/Menu'
const Home = (props) => {
    const description = "Gain the competitive edge in the digital world with SkillTech's expert-led courses designed to enhance your technical expertise and unlock limitless opportunities in the technology industry."
    return (
        <View style={styles.mainContainer}>

            
            <View style={styles.HomeTop}>
                <Image
                    resizeMode="contain"
                    style={styles.logoImage}
                    source={require("../../assets/studylogo.jpg")}
                />
                <Text style={styles.mainHeader}>Welcome to</Text>
                <Text style={[styles.mainHeader,
                {
                    fontSize: 33,
                    color: "#4c5dab"


                }]}>{props.channelName} </Text>
                <Text style={styles.paraStyle}>{description}</Text>
                <View style={styles.menuStyle}>
                    <View style={[styles.lineStyle, { marginVertical: 20 }]}></View>
                    <Menu />
                    <View style={[styles.lineStyle, { marginVertical: 20 }]}></View>
                </View>

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center",

    },
    mainHeader:
    {
        fontSize: 30,
        color: "#344055",
        textTransform: "uppercase"
    },
    HomeTop:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    logoImage:
    {
        height: 300,
        width: "100%",
        aspectRatio: 1,
        // display:"flex",
        // alignItems:"stretch",
        marginTop: 100,
        borderRadius: 20
    },
    paraStyle:
    {
        textAlign: "left",
        fontSize: 15,
        color: "#7d7d7d",
        marginTop: 5,
        paddingTop: 20,
        lineHeight: 26

    },
    lineStyle:
    {
        width: 300,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey"
    },
    menuStyle:
    {
        marginTop: 50
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'

    }

})