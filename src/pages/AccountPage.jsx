import { Image, Text, TouchableOpacity, View } from "react-native";

function Header(){
    return (
        <View className="p-4 mb-8 flex flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-red-500">NETFLIX</Text>
            <Image  source={require('../../public/icons/edit-icon.png')}/>
        </View>
    )
}

function SmileyCard({color}){
    return (
        <View className="items-center">
        <View className={`m-4 border-solid border-2 border-blue-400 flex items-center justify-center h-[100px] w-[100px] rounded-xl bg-${color}-400`}>
            <Text>
                {color}
            </Text>
        </View>
        <Text>Mac Nino</Text>
        </View>
    )
}

export default function AccountPage({navigation}){
    
    return (
    <View>
        <Header/>
        <Text className="text-white text-xl capitalize text-center">who's watching?</Text>
        <View className="justify-center flex flex-row flex-wrap">
            <SmileyCard color="red"/>
            <TouchableOpacity onPress={()=>navigation.navigate('main')} className="p-4 bg-blue-400">
                <Text>NEXT</Text>
                
            </TouchableOpacity>
        </View>
        
      
        <Text>HEY</Text>
        <Text>HEY</Text>
        <Text>HEY</Text>
        <Text>HEY</Text>
    </View>
    )
}