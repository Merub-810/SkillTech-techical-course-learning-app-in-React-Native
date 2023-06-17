import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.btnStyle} onPress={()=> navigation.navigate("Course")} >
        <Image style={styles.iconStyle} source={require("../../assets/Course.png")}/>
        <Text style={styles.txtStyle}>Course</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnStyle} onPress={()=> navigation.navigate("About")} >
      <Image style={styles.iconStyle} source={require("../../assets/About.png")}/>
        <Text style={styles.txtStyle}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnStyle} onPress={()=> navigation.navigate("Contact")} >
      <Image style={styles.iconStyle} source={require("../../assets/phone-call.png")}/>
        <Text style={styles.txtStyle}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnStyle} onPress={()=> navigation.navigate("Student")} >
        <Image style={styles.iconStyle} source={require("../../assets/personal-information.png")}/>
        <Text style={styles.txtStyle}>Students</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({


    menuContainer:
    {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    txtStyle:
    {
       textTransform:"capitalize"
    },
    iconStyle:
    {
      width:"100%",
      height:35,
      aspectRatio:1
    }

})