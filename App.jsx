import React, { createContext, useEffect, useRef, useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import AccountPage from "./src/pages/AccountPage"
import MainPage from "./src/pages/MainPage"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SearchScreen from "./src/screens/mainScreen/components/SearchScreen"
import IntroScreen from "./src/pages/IntroScreen"
import BottomScreen from "./src/screens/mainScreen/components/BottomScreen"
import RBSheet from "react-native-raw-bottom-sheet"

const Stack = createNativeStackNavigator()
export const BottomSheetContext = createContext()


export default function App(){
  const [isOpen, setIsOpen] = useState(false)
  const RBSheetRef = useRef()
  useEffect(()=>{
    if(isOpen)
      RBSheetRef.current.open()
  },[isOpen])
  return(
    <BottomSheetContext.Provider value={{isOpen,setIsOpen}}>  
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="intro">
          <Stack.Screen name="intro" component={IntroScreen}/>
          <Stack.Screen name="account" component={AccountPage}/>
          <Stack.Screen name="main" component={MainPage}/>
          <Stack.Screen name="search" component={SearchScreen}/>
        </Stack.Navigator>
          <RBSheet 
          
          onClose={()=>setIsOpen(false)}
          ref={RBSheetRef}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.4)",
              
            },
            container:{
              backgroundColor:"#202124",
              borderTopLeftRadius:15,
              borderTopRightRadius:15,
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}>

          </RBSheet>
        </NavigationContainer>
      </BottomSheetContext.Provider>
  
  )
}