import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { createContext, useEffect, useRef, useState } from "react"
import { Image, Text, View } from "react-native"
import RBSheet from "react-native-raw-bottom-sheet"
import AccountPage from "./src/pages/AccountPage"
import IntroScreen from "./src/pages/IntroScreen"
import MainPage from "./src/pages/MainPage"
import SearchScreen from "./src/screens/mainScreen/components/SearchScreen"
import Icon from 'react-native-vector-icons/FontAwesome'
import Notifications from "./src/screens/mainScreen/components/Notifications"

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
          <Stack.Screen name="notifications" component={Notifications}/>
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
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}>
            <View className="p-3 flex gap-4">
              <View className="flex-row items-center gap-2">
              <Image  source={require('./public/icons/edit-icon.png')}/>
              <Text>Manage Profiles</Text>
              </View>
              <View className="flex-row items-center gap-2">
              <Icon color="#ffffff" name="gear" size={30} />
              <Text>App Settings</Text>
              </View>
              <View className="flex-row items-center gap-2">
              <Icon color="#ffffff" name="user-o" size={30} />
              <Text>Account</Text>
              </View>
              <View className="flex-row items-center gap-2">
              <Icon color="#ffffff" name="question-circle-o" size={30} />
              <Text>Help</Text>
              </View>
              <View className="flex-row items-center gap-2">
              <Icon color="#ffffff" name="sign-out" size={30} />
              <Text>Sign Out</Text>
              </View>
              
            
            </View>

          </RBSheet>
        </NavigationContainer>
      </BottomSheetContext.Provider>
  
  )
}