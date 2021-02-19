import React from 'react';

import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

//This is just an example, you should rework based on the project needs

interface AccentButtonProps extends TouchableOpacityProps {
  label: string;
}

export const AccentButton = ({ label, style, ...touchableProps }: AccentButtonProps) => (
  <TouchableOpacity {...touchableProps} style={[styles.container, style]}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    backgroundColor: 'purple',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
