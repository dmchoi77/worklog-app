import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AppTab from './AppTab';
import { AuthStack } from './AuthStack';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export const Router = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}>
        {!isLoggedIn ? (
          <RootStack.Screen
            name="Auth"
            component={AuthStack}
            options={{
              animationEnabled: false,
            }}
          />
        ) : (
          <RootStack.Screen
            name="App"
            component={AppTab}
            options={{
              animationEnabled: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
