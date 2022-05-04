/* eslint-disable jsx-quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './tabs';
import Home from '../screens/Home';
import BookDetail from '../screens/BookDetail';

const Stack = createNativeStackNavigator();

export default function StackNavi(){
    return(
        <NavigationContainer>
           <Stack.Navigator initialRouteName='Home'>
               <Stack.Screen name="MyTabs" component={MyTabs}/>
               <Stack.Screen name="Home" component={Home}/>
               <Stack.Screen name="BookDetail" component={BookDetail}/>
           </Stack.Navigator> 
        </NavigationContainer>
    )
}