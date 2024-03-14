import { Image, Text, View } from "react-native";

export default function Gamecard(){
    return (
       <View className="w-28 m-4 gap-1">
          <View>
          <Image className="rounded-xl w-28 h-28" source={require('../../../../public/images/deadpool.jpg')}/>
          <Image className="absolute w-2 h-4 top-1 left-1" source={require('../../../../public/images/netflix-singleletter-logo.png')}/>
          </View>
          <Text className="text-white font-bold text-md">Game Dev Title</Text>
          <Text className="text-xs text-white/50">Lorem ipsum dolor sit amet.</Text>
       </View>
    )
 }
 