import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from "../API/CourseAPI"
const Course = ({navigation}) => {
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
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate("CourseDetails")}>
            <Text style={styles.btnText}>Course Details</Text>
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

export default Course

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
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"

  },
  btnStyle:
  {
    backgroundColor:"#19647E",
    borderRadius:5,
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
  }

})