import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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


export default function Notifications({navigation}){
    return(
        <View>
            <Header navigation ={navigation}/>
        </View>
    )
}