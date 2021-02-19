import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import { AccentButton } from '@components/Buttons';
import { Container } from '@components/Container';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Home Screen</Text>
      <AccentButton label="Go to Auth" onPress={() => navigation.navigate('Auth')} />
    </Container>
  );
};

export default HomeScreen;
