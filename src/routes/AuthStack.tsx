import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="LoginScreen" component={Login} />
    </Stack.Navigator>
  );
};
