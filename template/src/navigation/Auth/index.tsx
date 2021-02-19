import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from 'views/screens/Auth';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};
const AuthStack = createStackNavigator();
export const AuthScreens = (): React.ReactElement => (
  <AuthStack.Navigator screenOptions={screenOptions}>
    <AuthStack.Screen name="AuthScreen" component={AuthScreen} />
  </AuthStack.Navigator>
);
