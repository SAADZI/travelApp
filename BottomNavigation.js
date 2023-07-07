import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from "./Icon";


import {  HomeScreen,UserScreen,SingleProductPage,Notification,BookMark} from "./constant";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const tabBarIconStyle = (focused) => {
    return {
      color: focused ? "#16a085" : "gray",
    };
  };

  return (
  
      <Tab.Navigator
      initialRouteName="Home"
        screenOptions={{ tabBarShowLabel: false, headerShown: false }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home-outline"
                size={30}
                style={tabBarIconStyle(focused)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="notifications-outline"
                size={30}
                style={tabBarIconStyle(focused)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SingleProduct"
          component={SingleProductPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="compass"
                size={30}
                style={tabBarIconStyle(focused)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="BookMark"
          component={BookMark}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="bookmark-outline"
                size={30}
                style={tabBarIconStyle(focused)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person-outline"
                size={30}
                style={tabBarIconStyle(focused)}
              />
            ),
          }}
        />
        
      </Tab.Navigator>
    
  );
};

export default BottomNavigator;
