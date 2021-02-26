import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View } from 'react-native'
import Home from '../../src/screen/Home';
import Login from '../../src/screen/Login'
const Stack =createStackNavigator();
export default function Navigation(){
    return(
        <NavigationContainer
        >
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="LoginScreen">
               
                <Stack.Screen name="LoginScreen" component={Login} />
                 <Stack.Screen name="HomeScreen" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}