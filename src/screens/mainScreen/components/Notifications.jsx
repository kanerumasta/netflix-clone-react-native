import { useContext } from "react";
import { Image, Text, TouchableOpacity, View,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomSheetContext } from "../../../../App";


function Header({navigation}){
    const {isOpen,setIsOpen} = useContext(BottomSheetContext)
    return(
    <View className="bg-black p-3 flex-row items-center justify-between">
        <View className="flex-row items-center ">
            <TouchableOpacity className="p-2" onPress={()=>navigation.goBack()}>
        <Icon name="arrow-back" color="gray" size={30}/>
        </TouchableOpacity>
        <Text className="text-white text-xl font-black">Notifications</Text>
        </View>
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

function Card(){
    return(
        <View className="mb-4 flex flex-row items-center px-3">
            <Image className="w-[150px] h-[100px] mr-3 rounded-lg" source={require('../../../../public/images/movie1.jpg')} />
            <View>
                <Text className="capitalize text-xl font-black  text-white">new arrival</Text>
                <Text className="capitalize">orion and the dark</Text>
                <Text className="capitalize">feb 7</Text>
            </View>
        </View>
    )
}

export default function Notifications({navigation}){
    return(
        <View className="h-screen bg-black">
            <Header navigation ={navigation}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </ScrollView>
            
        </View>
    )
}