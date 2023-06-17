import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Home from './src/screens/Home'
import React from 'react'
import About from './src/screens/About'
import Contact from './src/screens/Contact'
import Course from './src/screens/Course'
import UserData from './src/screens/UserData'
//import AppLoading from 'expo-app-loading'
import * as SplashScreen from 'expo-splash-screen';
import {
  NunitoSans_200ExtraLight,
  NunitoSans_200ExtraLight_Italic,
  NunitoSans_300Light,
  NunitoSans_300Light_Italic,
  NunitoSans_400Regular,
  NunitoSans_400Regular_Italic,
  NunitoSans_600SemiBold,
  NunitoSans_600SemiBold_Italic,
  NunitoSans_700Bold,
  NunitoSans_700Bold_Italic,
  NunitoSans_800ExtraBold,
  NunitoSans_800ExtraBold_Italic,
  NunitoSans_900Black,
  NunitoSans_900Black_Italic,
} from '@expo-google-fonts/nunito-sans';

import { useFonts } from '@expo-google-fonts/nunito-sans'


import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CourseDetails from './src/screens/CourseDetails'



export default function App() {


  const Stack = createNativeStackNavigator()

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);


  let [fontsLoaded] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold,
    NunitoSans_800ExtraBold_Italic,
    NunitoSans_900Black,
    NunitoSans_900Black_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" options={{ headerShown: false }} >
          {(props) => <Home {...props} channelName={"skillTech"} />
          }
        </Stack.Screen>
        <Stack.Screen name="Course" component={Course}
          options={{
            headerTitleStyle:
            {
              fontSize: 25,
              fontFamily: "NunitoSans_600SemiBold_Italic"
            },
            headerTitle: "Courses",
            headerTitleAlign: "center"
          }} />


        <Stack.Screen name="Student" component={UserData}
          options={{
            headerTitleStyle:
            {
              fontSize: 25,
              fontFamily: "NunitoSans_600SemiBold_Italic"
            },
            headerTitleAlign: "center"
          }} />


        <Stack.Screen name="Contact" component={Contact}
          options={{
            headerTitleStyle:
            {
              fontSize: 25,
              fontFamily: "NunitoSans_600SemiBold_Italic"
            },
            headerTitleAlign: "center"
          }} />


        <Stack.Screen name="About" component={About}
          options={{
            headerTitleStyle:
            {
              fontSize: 25,
              fontFamily: "NunitoSans_600SemiBold_Italic"
            },
            headerTitleAlign: "center"
          }} />

        <Stack.Screen name="CourseDetails" component={CourseDetails}
          options={{
            headerTitleStyle:
            {
              fontSize: 25,
              fontFamily: "NunitoSans_600SemiBold_Italic"
            },
            headerTitleAlign: "center"
          }} />
          

      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({


});
