import { Image, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

function Header(){
    return (
        <View className="p-4 mb-8 flex flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-red-500">NETFLIX</Text>
            <Image  source={require('../../public/icons/edit-icon.png')}/>
        </View>
    )
}

function SmileyCard({text,colors,navigation}){
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('main')} className="items-center">
        <LinearGradient colors={colors} start={{x:0,y:0}} end={{x:0,y:1}} className={`m-4 flex items-center justify-center h-[100px] w-[100px] rounded-xl`}>
            {text ? <Text className="text-red-700">
                {text}
                </Text>:
                <View>                
                    <View className="flex-row gap-6">
                        <View className="h-4 w-4 rounded-full bg-white"></View>
                        <View className="h-4 w-4 rounded-full bg-white"></View>
                    </View>
                    <View 
                    style={{
                        width: "20%",
                        height: 10,
                       
                        borderRadius: 35,
                        backgroundColor: "black",
                        transform: [{ scaleX: 5 }, { scaleY: 1 }],
                      }}
                    ></View>
                </View>

                }
        </LinearGradient>
        <Text>Mac Nino</Text>
        </TouchableOpacity>
    )
}

export default function AccountPage({navigation}){
    
    return (
    <View className="bg-black/80 h-screen">
        <Header/>
        <Text className="text-white text-xl capitalize text-center">who's watching?</Text>
        <View className="justify-center flex flex-row flex-wrap">
            <SmileyCard navigation={navigation} colors={["red","#f76464"]}/>
            <SmileyCard navigation={navigation} colors={["orange","#f6d1ab"]}/>
            <SmileyCard navigation={navigation} colors={["blue","#4c8cf5"]}/>
            <SmileyCard text="kids" navigation={navigation} colors={["blue","red","orange","pink"]}/>
            
        </View>
        
      
    </View>
    )
}