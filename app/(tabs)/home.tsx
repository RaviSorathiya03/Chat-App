import { Image, SafeAreaView, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from "react-native";

export default function Home(){
    return(
        <SafeAreaView>
            <View className="mt-1 flex flex-row justify-between items-center p-3">
                <Text className="text-2xl font-medium">Contacts</Text>
                <FontAwesome name="plus" size={20}/>
            </View>
            <View className="flex flex-row justify-center items-center mt-5">
                <FontAwesome name="search" size={20} style={{position: "absolute", zIndex: 10, left: 55, top:15}}/>
                <TextInput className="w-[80%] bg-gray-200 h-[100%] mt-5 pl-14 rounded-lg" placeholder="Search" />
            </View>
            {/* List of contacts */}
            <View className="mt-10">
                <View className="">
                    <Image source={{uri: "https://images.pexels.com/photos/4133338/pexels-photo-4133338.jpeg?auto=compress&cs=tinysrgb&w=800"}}/>
                    <Text>Ravi Sorathiya</Text>
                    <Text>Last seen today</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}