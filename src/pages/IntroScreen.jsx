import { View } from "react-native";
import Video from 'react-native-video'
export default function IntroScreen({navigation}){
return(
     <View className="h-screen w-screen">
        <Video onEnd={()=>navigation.navigate("account")} resizeMode="cover" className="h-full w-full" source={require('../../public/videos/netflix.mp4')}/>
     </View>
)
}