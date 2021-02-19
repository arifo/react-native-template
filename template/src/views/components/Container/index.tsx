import React, { FC } from 'react';

import { View, StyleSheet, ViewStyle } from 'react-native';

//This is just an example, you should rework based on the project needs

interface ContainerProps {
  style?: ViewStyle;
}

export const Container: FC<ContainerProps> = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
