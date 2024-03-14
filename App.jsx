import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import AccountPage from "./src/pages/AccountPage"
import MainPage from "./src/pages/MainPage"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SearchScreen from "./src/screens/mainScreen/components/SearchScreen"
import IntroScreen from "./src/pages/IntroScreen"


const Stack = createNativeStackNavigator()


export default function App(){
  return(
    
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="intro">
        <Stack.Screen name="intro" component={IntroScreen}/>
        <Stack.Screen name="account" component={AccountPage}/>
        <Stack.Screen name="main" component={MainPage}/>
        <Stack.Screen name="search" component={SearchScreen}/>
      </Stack.Navigator>
     </NavigationContainer>
 
  )
}