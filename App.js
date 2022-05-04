/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AxiosTest from './components/AxiosTest';
//import AxiosPost from "./components/AxiosPost";
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import AxiosPost from './components/AxiosPost';
import AnimationView from './components/AnimationView';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimationView">
      <Stack.Screen name="AnimationView" component={AnimationView} /> 
        <Stack.Screen name="AxiosTest" component={AxiosTest} /> 
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({})


