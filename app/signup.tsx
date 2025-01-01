import React from 'react';
import { ScrollView, TextInput, TouchableOpacity, Image, Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { Link } from "expo-router";
import { Controller } from 'react-hook-form';
import { useSignupForm } from '@/hooks/useSignupForm';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function Signup() {
  const { control, handleSubmit, onSubmit, errors, isPending, error } = useSignupForm();

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 items-center justify-center px-8 py-12">
            <Animated.View entering={FadeInDown.duration(1000).springify()}>
              <Image source={require('@/assets/images/logo.png')} className="w-32 h-32 rounded-3xl mb-8"/>
            </Animated.View>
            
            <Animated.Text 
              className="text-4xl font-bold text-white mb-12"
              entering={FadeInDown.duration(1000).springify().delay(300)}
            >
              Create Your Account
            </Animated.Text>

            {['username', 'password', 'firstname', 'lastname', 'mobile'].map((field, index) => (
              <Animated.View 
                key={field} 
                className="w-full mb-6"
                entering={FadeInUp.duration(1000).springify().delay(index * 200)}
              >
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="w-full h-14 bg-white/20 rounded-xl px-4 text-white text-lg"
                      placeholder={`Enter your ${field}`}
                      placeholderTextColor="rgba(255,255,255,0.7)"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={field === 'password'}
                      keyboardType={field === 'mobile' ? 'numeric' : 'default'}
                    />
                  )}
                  name={field}
                />
                {errors[field] && (
                  <Text className="text-red-300 mt-1">{errors[field]?.message}</Text>
                )}
              </Animated.View>
            ))}

            <Animated.View 
              className="w-full mt-4"
              entering={FadeInUp.duration(1000).springify().delay(1200)}
            >
              <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                disabled={isPending}
                className="w-full h-14 bg-white rounded-full flex items-center justify-center"
              >
                <Text className="text-2xl font-semibold text-blue-900">
                  {isPending ? 'Signing up...' : 'Sign Up'}
                </Text>
              </TouchableOpacity>
            </Animated.View>

            {error && (
              <Text className="text-red-300 mt-4">{error}</Text>
            )}

            <Animated.View 
              className="mt-8 flex-row items-center"
              entering={FadeInUp.duration(1000).springify().delay(1400)}
            >
              <Text className="text-lg text-white">Already have an account? </Text>
              <Link href="/sign-in" className="text-lg font-bold text-white">
                Sign In
              </Link>
            </Animated.View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

