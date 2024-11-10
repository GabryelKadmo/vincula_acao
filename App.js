import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home/index';
import Login from './src/pages/Login/index';
import Register from './src/pages/Register/index';
import Contact from "./src/pages/Contact/index";
import Instituition from "./src/pages/Instituition/index";
import InstituitionDetails from "./src/pages/Instituition/components/instituitionDetails";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Instituition"
          component={Instituition}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="InstituitionDetails"
          component={InstituitionDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
