import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'


function Card({image, title, description}){
    return(
        <View className="border-[1px]  border-solid border-white/20 mb-4 overflow-hidden bg-black rounded-2xl">
            <Image className="w-full h-[200px]" source={require('../../../../public/images/toy.jpg')}/>
            <View className="p-3 gap-2">
            <Text className="capitalize text-white text-xl font-black">Toy story 19</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptatibus obcaecati debitis nostrum,</Text>
            <View className="flex flex-row">
            <TouchableOpacity className="mr-4 flex-row items-center justify-center w-[100px] rounded-lg p-4 bg-white ">
            <Icon name="play" color="#000000" size={20} />
                <Text className="text-black font-bold">Play</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-center w-[100px] border-[1px] border-solid border-white/30 rounded-lg p-4 bg-white/20">
            <Icon name="add" color="#ffffff" size={20} />
                <Text className="text-white font-bold">List</Text>
            </TouchableOpacity>
            </View>
            </View>
            
            
        </View>
    )
}

function Header({navigation}){
    return(
        <View className="py-2 flex-row items-center justify-between">
            <Image className="h-14 w-10" source={require('../../../../public/images/netflix-singleletter-logo.png')}/>
            <TouchableOpacity onPress={()=>navigation.push('search')}>

            <Icon name="search" size={30} color="#ffffff" />
            </TouchableOpacity>
            
        </View>
    )
}


export default function NewHotPage({navigation}){
    return(
        <View className="px-4 bg-[#000000] h-full">
            <Header navigation={navigation}/>
           
            <ScrollView showsVerticalScrollIndicator={false}>
            <Card />
            <Card />
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