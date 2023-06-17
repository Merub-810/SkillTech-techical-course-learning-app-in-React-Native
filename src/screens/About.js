import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Developer Info</Text>
      <Text style={styles.paraStyle}>React Native Developer 😎😃</Text>

      <View>
       

        <Image style={styles.imgStyle} source={require("../../assets/developer.png")}/>
      </View>


      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubheader}>About me</Text>
        <Text style={styles.paraStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores earum, consequuntur voluptate blanditiis aspernatur suscipit at dolor aut voluptas</Text>
      </View>


      <Text style={styles.mainHeader}>Follow me on Social Network </Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => Linking.openURL("http://github.com/Merub-810")} >

          <Image style={styles.iconStyle} source={require("../../assets/github-sign.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnStyle} onPress={() => Linking.openURL("https://www.linkedin.com/in/merub-rafique-230035262")} >
          <Image style={styles.iconStyle} source={require("../../assets/linkedin.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnStyle}  >
          <Image style={styles.iconStyle} source={require("../../assets/instagram.png")} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  aboutContainer:
  {
    display: "flex",
    alignItems: "center",
  },
  imgStyle:
  {
    width: 100,
    height: 100,
    borderRadius: 150
  },
  mainHeader:
  {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
    fontFamily: "NunitoSans_700Bold_Italic",
    lineHeight: 30

  },
  paraStyle:
  {
    fontSize: 18,
    color: "#3D3D3D",
    paddingBottom: 30,
    fontFamily:"NunitoSans_600SemiBold_Italic",
    

  },
  aboutLayout:
  {
    backgroundColor: "#B2D3EF",
    paddingHorizontal: 30,
    marginVertical: 30,

  },
  aboutSubheader:
  {
    fontSize: 18,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "NunitoSans_700Bold_Italic",
    lineHeight: 30,
    alignSelf: "center"
  },
  menuContainer:
  {
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around"

  },
  iconStyle:
  {
    width:"100%",
    height:50,
    aspectRatio:1,

  }


})