import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { images } from '@/assets/index';
import { useNavigation } from '@/hooks/useNavigation';

export default function Index() {
  const { navigateTo } = useNavigation();

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1 items-center justify-between py-8">
        <Animated.View 
          className="items-center"
          entering={FadeInDown.duration(1000).springify()}
        >
          <Image 
            source={images.frontImage} 
            className="w-80 h-80 rounded-3xl"
            resizeMode="contain"
          />
        </Animated.View>

        <Animated.View 
          className="items-center px-8"
          entering={FadeIn.duration(1000).delay(300)}
        >
          <Text className="font-bold text-4xl text-center text-white mb-4">
            Connect easily with your family and friends
          </Text>
          <Text className="text-lg text-center text-white/80">
            Over countries and beyond borders
          </Text>
        </Animated.View>

        <Animated.View 
          className="items-center w-full px-8"
          entering={FadeInUp.duration(1000).springify()}
        >
          <TouchableOpacity 
            onPress={() => navigateTo('/sign-in')}
            className="bg-white w-full py-4 rounded-full items-center justify-center mb-4"
          >
            <Text className="text-blue-900 text-xl font-semibold">
              Start Messaging
            </Text>
          </TouchableOpacity>

          <Text className="text-white/80 text-sm">
            Terms & Privacy Policy
          </Text>
        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
}

