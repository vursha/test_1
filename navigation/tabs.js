/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
//import {MaterialCommunityIcons} from '@expo/vector-icons';

// const search_icon = require('../assets/icons/search_icon.png');
const search_icon = require('../assets/icons/search_icon.png');
const dashboard_icon = require('../assets/icons/dashboard_icon.png');
const notification_icon = require('../assets/icons/notification_icon.png');
const menu_icon = require('../assets/icons/menu_icon.png');


function Search() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Notification() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Setting() {
  return (
    <View 
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    source={search_icon}
    >
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
      height: "10%",
      backgroundColor: "black"
  }
}

function MyTabs() {
  console.log("search_icon",search_icon)
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
              const tintColor = focused ? "black" : "gray";

              switch (route.name) {
                  case "Home":
                      return (
                          <Image
                              source={dashboard_icon}
                              resizeMode="contain"
                              style={{
                                  tintColor: tintColor,
                                  width: 25,
                                  height: 25
                              }}
                          />
                      )

                  case "Search":
                      return (
                          <Image
                              source={search_icon}
                              resizeMode="contain"
                              style={{
                                  tintColor: tintColor,
                                  width: 25,
                                  height: 25
                              }}
                          />
                      )

                  case "Notification":
                      return (
                          <Image
                              source={notification_icon}
                              resizeMode="contain"
                              style={{
                                  tintColor: tintColor,
                                  width: 25,
                                  height: 25
                              }}
                          />
                      )

                  case "Setting":
                      return (
                          <Image
                              source={menu_icon}
                              resizeMode="contain"
                              style={{
                                  tintColor: tintColor,
                                  width: 25,
                                  height: 25
                              }}
                          />
                      )
              }
          }
      })}
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',

        }}
        
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          //tabBarIcon:{search_icon}
        }}
                                                                                                                               con={search_icon}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
}


export default MyTabs;