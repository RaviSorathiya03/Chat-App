import { Ionicons } from "@expo/vector-icons";
import { Slot, Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function Layout(){
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'lightblue'
        }}>
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Followers',
                    tabBarIcon: () => <FontAwesome name="users" size={20} color={'lightblue'}/>
                }}
            />
            <Tabs.Screen 
                name="chat"
                options={{
                    title: 'Chats',
                    tabBarIcon: () => <Ionicons name="chatbubble-ellipses-outline" size={20} color={'lightblue'}/>
                }}
            />
            <Tabs.Screen 
                name="setting"
                options={{
                    title: 'Settings',
                    tabBarIcon: () => <Ionicons name="settings-outline" size={20} color={'lightblue'}/>
                }}
            />
        </Tabs>
    );
}
