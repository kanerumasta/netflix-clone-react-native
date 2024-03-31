import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GamesPage from "../screens/mainScreen/tabPages/GamesPage";
import HomePage from "../screens/mainScreen/tabPages/HomePage";
import NewHotPage from "../screens/mainScreen/tabPages/NewHotPage";
import ProfilePage from "../screens/mainScreen/tabPages/ProfilePage";

import { Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator()
export default function MainPage(){
    return(
      
            <Tab.Navigator
           
                initialRouteName="New"
                screenOptions={{tabBarActiveTintColor:"#ffffff",tabBarInactiveTintColor:"gray", headerShown:false,tabBarLabelStyle:{fontSize:0, fontWeight:"bold"}, tabBarStyle:{borderColor:"black",paddingBottom:10, height:80, backgroundColor:"#171616"}}}
                
                
            >
                <Tab.Screen options={{tabBarIcon:({focused})=>(focused?<Icon color="white" name="clipboard-play-multiple" size={30}/>:<Icon color="gray" name="clipboard-play-multiple-outline" size={30}/>)}} name="New" component={NewHotPage}/>
                <Tab.Screen options={{tabBarIcon:({focused})=>(focused?<Icon color="white" name="home-variant" size={30}/>:<Icon color="gray" name="home-variant-outline" size={30}/>)}} name="Home" component={HomePage}/>
                <Tab.Screen options={{tabBarIcon:({focused})=>(focused?<Icon color="white" name="gamepad-variant" size={30}/>:<Icon color="gray" name="gamepad-variant-outline" size={30}/>)}} name="Games" component={GamesPage}/>
                <Tab.Screen options={{tabBarIcon:()=>(<Image source={require("../../public/icons/profile-icons/blue.jpg")} className="w-8 h-8 rounded-md"/>)}} name="Profile" component={ProfilePage}/>
            </Tab.Navigator>
           
      
    )
}