import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from 'views/screens/Auth';
import HomeScreen from 'views/screens/Home';

import { isReadyRef, navigationRef } from './service';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer
    ref={navigationRef}
    onReady={() => {
      isReadyRef.current = true;
    }}>
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
