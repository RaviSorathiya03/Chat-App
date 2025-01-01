import { Stack } from "expo-router";
import './global.css'
import { View } from "react-native";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="sign-in" options={{
      headerShown: false,
      title: '',
      headerTintColor: '#000', 
      headerBackButtonDisplayMode: 'minimal',
    }}></Stack.Screen>
    <Stack.Screen name="signup" options={{
      headerShown: false,
      headerBackButtonDisplayMode: 'minimal',
      title: '',
      headerTintColor: '#000', 
    }}></Stack.Screen>
  </Stack>;
}
