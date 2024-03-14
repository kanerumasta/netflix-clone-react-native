import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Profile from "../components/Profile";


function Header({navigation}){
    return(
    <View className="bg-black p-3 flex-row items-center justify-between">
        <Text className="text-white text-xl font-black">My Netflix</Text>
        <View className="flex-row items-center gap-4">
            <TouchableOpacity onPress={()=>navigation.navigate('search')}>
            <Icon name="search" color="#ffffff" size={30}/>
            </TouchableOpacity>
        
        <Icon name="menu" color="#ffffff" size={30}/>
        </View>
    </View>
    )
}

function Menu({icon, title, color}){
    return(
        <View className="flex flex-row p-4 items-center justify-between">
            <View className="flex-row items-center">
                <View style={{backgroundColor:color}} className={`rounded-full p-4`}>
                    {icon}
                </View>
                 <Text className="ml-3 text-xl text-white">{title}</Text>
            </View>
            <Icon name="chevron-forward" size={30}/>
            
        </View>
    )
}



export default function ProfilePage({navigation}){
    return(
        <View className="bg-black h-full">
            <Header navigation={navigation}/>
            <View className="flex items-center">
            <Profile color={"orange"} size={100}/>
            <Text className="text-white mt-4 text-2xl font-black">Mac Nino Ibale  v</Text>
            </View>
            <Menu color={"red"} title="Nofitications" icon={<Icon color="#ffffff" name="notifications" size={20}/>}/>
            <Menu color="blue" title="Downloads" icon={<Icon color="#ffffff" name="download" size={20}/>}/>
            
        </View>
    )
}