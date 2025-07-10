
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'TerangaID' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Inscription' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Connexion' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
