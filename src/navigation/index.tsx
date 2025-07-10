import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { ThemeContext } from '../context/ThemeContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { theme } = useContext(ThemeContext);
  const headerTintColor = theme === 'light' ? '#1e3a5f' : '#f0f4f8';
  const headerBackgroundColor = theme === 'light' ? '#f0f4f8' : '#1e3a5f';

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerRight: () => <ThemeToggleButton />,
          headerStyle: {
            backgroundColor: headerBackgroundColor,
          },
          headerTintColor: headerTintColor,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'TerangaID' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Inscription' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Connexion' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;