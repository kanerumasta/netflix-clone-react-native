import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from "../components/Profile";
import { useContext } from "react";
import { BottomSheetContext } from "../../../../App";



function Moviecard(){
    return(
        <View className="mb-7 mr-3 w-[100px] rounded-lg overflow-hidden">
            <Image className="w-full h-[150px]" source={require('../../../../public/images/collateral.jpg')}/>
        </View>
    )
}
function Header({navigation}){
    const {isOpen,setIsOpen} = useContext(BottomSheetContext)
    return(
    <View className="bg-black p-3 flex-row items-center justify-between">
        <Text className="text-white text-xl font-black">My Netflix</Text>
        <View className="flex-row items-center gap-4">
            <TouchableOpacity onPress={()=>navigation.navigate('search')}>
            <Icon name="search" color="#ffffff" size={30}/>
            </TouchableOpacity>
        <TouchableOpacity onPress={()=>setIsOpen(!isOpen)}>
        <Icon name="menu" color="#ffffff" size={30}/>
        </TouchableOpacity>
      
        </View>
    </View>
    )
}

function Menu({icon, title, color, pressed}){
    return(
        
        <TouchableOpacity onPress={pressed} className="flex flex-row p-4 items-center justify-between">
           <View className="flex-row items-center">
                <View style={{backgroundColor:color}} className={`rounded-full p-4`}>
                    {icon}
                </View>
                 <Text className="ml-3 text-xl text-white">{title}</Text>
            </View>
            <Icon name="chevron-forward" size={30}/>
            
        </TouchableOpacity>


    )
}



export default function ProfilePage({navigation}){
    
    
    return(
        <View className="bg-black h-full">
            <Header navigation={navigation}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex items-center">
            <Profile color={"orange"} size={100}/>
            <Text className="text-white mt-4 text-2xl font-black">Mac Nino Ibale</Text>
            </View>
            <Menu pressed={()=>navigation.navigate('notifications')} color={"red"} title="Nofitications" icon={<Icon color="#ffffff" name="notifications" size={20}/>}/>
            <Menu color="blue" title="Downloads" icon={<Icon color="#ffffff" name="download" size={20}/>}/>
            <Text className="my-4 font-bold text-white text-lg">My List</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                </ScrollView>
                <Text className="my-4 font-bold text-white text-lg">Trailers You've Watched</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                    <Moviecard/>
                </ScrollView>
                </ScrollView>
        </View>
    )
}