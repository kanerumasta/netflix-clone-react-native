import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/Ionicons'
import Gamecard from "../components/Gamecard";
import LinearGradient from "react-native-linear-gradient";

function Header(){
    return(
        <View className="flex-row bg-black items-center justify-between p-4">
            <Text className="text-xl text-white font-black">Games</Text>
            <Icon name="search" size={30} color="#ffffff" />
        </View>
    )
}

export default function GamesPage({navigation}){
    return(
        <View className="bg-black h-full w-screen">
            <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
           <Header/>
            <View className="w-screen h-[400px]">
            <Video 
            className="w-full border-2 border-solid h-full"
            source={require('../../../../public/videos/valo.mp4')}                 
            paused={false}               
            repeat={true}   
            resizeMode = "cover"
            muted={true}
            
            />
            <LinearGradient className="absolute top-0 left-0 w-full h-full" start={{x:0,y:0}} end={{x:0,y:1}} colors={["rgba(0,0,0,0.2)","rgba(0,0,0,1)"]}>         
                 <View className="absolute bottom-4 items-center left-0 w-full">
                    <Image className="h-32 w-32 rounded-xl " source={require('../../../../public/images/deadpool.jpg')}/>
                    <Text className="text-white font-black text-lg">Ghost Detective</Text>
                    <Text className="capitalize">jamo adam huwa kalami ana</Text>
                </View>
            </LinearGradient>
  
            </View>
            <Text className="text-white text-xl font-black p-4">Recently Released</Text>
            <ScrollView className="px-4" horizontal showsHorizontalScrollIndicator={false}>
                <Gamecard />
                <Gamecard />
                <Gamecard />
                <Gamecard />
                <Gamecard />
                <Gamecard />
                <Gamecard />
                <Gamecard />
                <Gamecard />
                <Gamecard />
            </ScrollView>
            <Text className="text-white text-xl font-black p-4">Looster Games</Text>
            <ScrollView className="px-4" horizontal showsHorizontalScrollIndicator={false}>
                <Gamecard />
                <Gamecard />
                <Gamecard />
                <Gamecard />
                <Gamecard />
                <Gamecard />
            </ScrollView>
            </ScrollView>
        </View>
    )
}

