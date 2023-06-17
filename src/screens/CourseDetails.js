import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from "../API/CourseAPI"
const CourseDetails = () => {
  const courseCard = ({ item }) => {
    return (<View style={styles.mainContainer}>
      <View style={styles.CourseContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={item.image}
            resizeMode='contain'
          />
        </View>
        <Text style={styles.mainHeader}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.list}>{item.course1}</Text>
        <Text style={styles.list}>{item.course2}</Text>
        <Text style={styles.list}>{item.course3}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn1Style} >
            <Text style={styles.btnText}>{item.price}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2Style} >
            <Text style={styles.btnText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Courses}
        renderItem={courseCard} >

      </FlatList>
    </View>
  )
}

export default CourseDetails

const styles = StyleSheet.create({

  cardImage:
  {
    width: "100%",
    height: 250,
    aspectRatio: 1
  },
  mainContainer:
  {
    paddingHorizontal: 20,

  },
  CourseContainer:
  {
    padding: 30,
    backgroundColor: "rgba(255,255,255,0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30
  },
  mainHeader:
  {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    paddingBottom: 15,
    fontWeight: 500,
    textAlign: "center",
    fontFamily: "NunitoSans_600SemiBold"
  },
  description:
  {
    textAlign: "left",
    fontFamily: "NunitoSans_400Regular",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d"
  },
  btnContainer:
  {
    paddingTop:10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"

  },
  btn1Style:
  {
    backgroundColor:"#458FC6",
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    paddingVertical:10,
    paddingHorizontal:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  },
  btn2Style:
  {
    
    backgroundColor:"#19647E",
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
    paddingVertical:10,
    paddingHorizontal:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  },
  btnText:
  {
    fontSize:20,
    color:"#eee",
    fontFamily:"NunitoSans_400Regular"
  },
  list:
  {
    textAlign:"center",
    fontSize:20,
    padding:5,
    fontFamily: "NunitoSans_400Regular_Italic"

  }

})