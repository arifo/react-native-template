import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreens } from '../Auth';
import { HomeScreens } from '../Home';

import { isReadyRef, navigationRef } from '../service';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer
    ref={navigationRef}
    onReady={() => {
      isReadyRef.current = true;
    }}>
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreens} />
      <Stack.Screen name="Home" component={HomeScreens} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
