import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import CoinsStack from "./src/screens/CoinsStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from './src/res/colors';
import { Image, Text } from 'react-native';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator
          tabBarOptions={{
            tintColor: "#fefefe",
            style: { backgroundColor: Colors.blackPearl}
          }}
        >
        <Tabs.Screen 
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({size,color}) => {
              <Image 
              style={{tintColor: color, width:size, height:size}}
              source={require('./src/assets/bank.png')} 
              />  
             }
           }}
        />
        <Tabs.Screen 
          name="Favorite"
          component={CoinsStack}
          options={{
            tabBarIcon: ({size,color}) => {
              <Image 
              style={{tintColor: color, width:size, height:size}}
              source={require('./src/assets/star.png')} 
              />  
             }
           }}
        />
        </Tabs.Navigator>
      </NavigationContainer>
      <StatusBar/>
    </SafeAreaProvider>
  );
};

export default App;