import { Image, Text, View,TouchableOpacity, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import SearchScreen from "../components/SearchScreen"


function Moviecard(){
    return(
        <View className="mb-7 mr-3 w-[100px] rounded-lg overflow-hidden">
            <Image className="w-full h-[150px]" source={require('../../../../public/images/titanic.jpg')}/>
        </View>
    )
}

function Topcard(){
    return(
        <View className="overflow-hidden rounded-2xl  border-[1px] border-solid border-white/30">
            <Image className="w-full h-[500px]" source={require('../../../../public/images/titanic.jpg')}/>
            <View className="h-full w-full absolute">
                <View className="absolute bottom-0  w-full">
                <Text className=" text-[70px] font-black text-white text-center w-full">TITANIC</Text>
                <Text className="text-center">Slick * Witty * Comedy * Yaga2</Text>
                <View className="flex flex-row items-center justify-center my-4">
            <TouchableOpacity className="mr-4 items-center w-[160px] flex-row justify-center rounded-lg p-4 bg-white ">
                <Icon name="play" color="#000000" size={20} />
                <Text className="text-black text-lg font-bold">Play</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-center items-center w-[160px] border-[1px] border-solid border-white/30 rounded-lg p-4 bg-gray-800">
                <Icon name="add" color="#ffffff" size={30} />
                <Text className="text-lg text-white font-bold">List</Text>

            </TouchableOpacity>
            </View>
                </View>
            </View>
        </View>
    )
}


function Header({navigation}){
    return(
        <View className="py-2 flex-row items-center justify-between bg-black/80">
            <Image className="h-14 w-10" source={require('../../../../public/images/netflix-singleletter-logo.png')}/>
            <TouchableOpacity onPress={()=>navigation?.push('search')}>
                <Icon name="search" size={30} color="#ffffff" />
            </TouchableOpacity>
           
        </View>
    )
}


export default function HomePage({navigation})
{
    return (
        <View className="px-4 bg-black h-full">
            
           
            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
                <Header navigation={navigation}/>
                <Topcard/>
                <Text className="my-4 font-bold text-white text-lg">Romantic Asian TV Dramas</Text>
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
                <Text className="my-4 font-bold text-white text-lg">Romantic Asian TV Dramas</Text>
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