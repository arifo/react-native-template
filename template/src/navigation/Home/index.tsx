import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'views/screens/Home';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};
const HomeStack = createStackNavigator();
export const HomeScreens = (): React.ReactElement => (
  <HomeStack.Navigator screenOptions={screenOptions}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);
