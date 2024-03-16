import {Text, View} from 'react-native'
export default function BottomScreen({visible}){
    return(
        <View className={`absolute top-0 left-0 h-screen bg-red-400/20 w-screen`}>
            <View className="absolute bottom-0 left-0 h-20 bg-blue-400 w-full">
                <Text></Text>
            </View>
        </View>
    )
}