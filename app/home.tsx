import React from 'react'
import { View, ScrollView, ImageBackground} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoHead from '@/components/TodoHead';
import TodoInput from '@/components/TodoInput';
import TodoLists from '@/components/TodoLists';
import { Stack } from 'expo-router';



const Home = () => {
    const image = {uri: '../assets/images/bg-mobile-dark.jpg'};

  return (
    <SafeAreaView style={{backgroundColor:'hsl(235, 21%, 11%)'}} edges={['bottom', 'left', 'right']}>
        <Stack.Screen
            options={{
            headerStyle: {backgroundColor:'#000'},
            headerShadowVisible: false,
            headerRight: () => (
                <Feather name="sun" size={24} color="#fff" />
            ),
            headerTitle: "TodoApp",
            }}
        />
        <ScrollView style={{backgroundColor:'hsl(235, 21%, 11%)', height:"100%", }} showsVerticalScrollIndicator={false}>
            <ImageBackground source={image} resizeMode="cover" style={{backgroundColor:'#741e7b', paddingVertical:25, paddingHorizontal:20, }}>
                {/* <TodoHead/> */}
                <TodoInput/>
            </ImageBackground>
            <TodoLists/>
        </ScrollView>
    </SafeAreaView>
)}

export default Home
