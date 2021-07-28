import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import CoinsStack from "./src/screens/CoinsStack";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <CoinsStack/>
      </NavigationContainer>
      <StatusBar/>
    </SafeAreaProvider>
  );
};

export default App;