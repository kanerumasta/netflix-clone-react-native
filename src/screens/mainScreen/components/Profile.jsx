import { Text, View } from "react-native";


export default function Profile({size, color, radius}){

    return(
        <View style={{borderRadius:radius ?? 15,width:size, height:size, backgroundColor:color}}>
            
        </View>
    )
}