import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
function Header(){
    return (
        <View className="p-4 mb-8 flex flex-row items-center justify-between">
            <Image className="h-10 w-20" source={require("../../public/images/netflix-word.png")}/>
            <Image  source={require('../../public/icons/edit-icon.png')}/>
        </View>
    )
}

function SmileyCard({text,name,navigation}){
    var src = require("../../public/icons/profile-icons/blue.jpg")
    switch(name){
        case "red":
            src = require("../../public/icons/profile-icons/red.jpg")
            break;
        case "purple":
            src = require("../../public/icons/profile-icons/purple.jpg")
            break
        default:
            src = require("../../public/icons/profile-icons/blue.jpg")



    }
    
    return (
        
        <TouchableOpacity onPress={()=>navigation.navigate('main')} className="m-4  items-center">
        
        <View className="overflow-hidden mb-4 rounded-lg">
            <Image className="w-24 h-24" source={src} />
        </View>

        <Text className="text-white font-bold">Karen Gonzales</Text>
        </TouchableOpacity>
    )
}

export default function AccountPage({navigation}){
    
    return (
    <View className="bg-black/80 h-screen">
        <Header/>
        <Text className="text-white font-bold mb-4 text-xl capitalize text-center">who's watching?</Text>
        <View className=" flex flex-row justify-center flex-wrap">
            <SmileyCard navigation={navigation} name={"red"}/>
            <SmileyCard navigation={navigation} name={"blue"}/>
            <SmileyCard navigation={navigation} name={"purple"}/>
            <SmileyCard text="kids" navigation={navigation} colors={["blue","red","orange","pink"]}/>
            <View className="w-24 items-center justify-center h-24 bg-black/40 border-2 border-white/50 border-solid m-4 rounded-lg">
                <Icon name="plus" size={50}/>
            </View>
        </View>
        
      
    </View>
    )
}