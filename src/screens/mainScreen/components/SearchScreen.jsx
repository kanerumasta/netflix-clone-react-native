import { Image, Text, TextInput, ScrollView,TouchableOpacity, View } from "react-native"
import Animated, { useSharedValue } from "react-native-reanimated"

import Icon from 'react-native-vector-icons/Ionicons'
import Gamecard  from "./Gamecard"

function Moviecard(){
   return(
      <View className="flex-row px-4 mb-2 items-center justify-between">
         <View className="flex-row items-center">
            <View className="relative">
         <Image className="rounded-md w-32 h-20" source={require('../../../../public/images/movie1.jpg')} />
        <Image className="absolute w-2 h-4 top-1 left-1" source={require('../../../../public/images/netflix-singleletter-logo.png')}/>
         </View>
         <Text className="ml-2 capitalize text-white text-md font-black">Lorem, ipsum dolor.</Text>
         </View>
         <Icon name="play-circle-outline" size={30} color="#ffffff"/>
      </View>
   )
}


export default function SearchScreen({navigation}){
    const xValue = useSharedValue(0)
    return (
      <View className="bg-black h-screen">
      
       
         <TouchableOpacity className="p-4" onPress={()=>navigation.goBack()}>
            <Icon name="arrow-back" size={30} />
         </TouchableOpacity>
        <View className="bg-white/20 flex-row items-center justify-evenly px-4">
         
         <Icon size={25} name="search" />
  
         <TextInput placeholder="Search games, shows and movies..." className=" text-md text-white"/>
         <Icon size={25} name="mic-outline" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="p-4 text-white font-black text-lg">Recommended Mobile Games</Text>
         <ScrollView showsHorizontalScrollIndicator={false} className="px-4" horizontal>
            <Gamecard />
            <Gamecard />
            <Gamecard />
            <Gamecard />
            <Gamecard />
            <Gamecard />    
         </ScrollView>
         <Text className="p-4 text-white font-black text-lg">Recommended TV Shows & Movies</Text>
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        </ScrollView>
        
       </View>
    )
}