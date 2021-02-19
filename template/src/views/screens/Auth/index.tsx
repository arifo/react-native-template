import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import { AccentButton } from 'components/Buttons';
import { Container } from 'components/Container';
import { useAction } from 'hooks';
import { getCommonDataAction } from 'modules/common/actions';

const AuthScreen = () => {
  const navigation = useNavigation();
  const getData = useAction(getCommonDataAction.request);

  const navHome = () => {
    navigation.navigate('Home');
  };

  const loadData = () => {
    getData();
  };

  return (
    <Container>
      <AccentButton label="Get data" onPress={loadData} />
      <Text>Auth Screen</Text>
      <AccentButton label="Go to Home" onPress={navHome} />
    </Container>
  );
};

export default AuthScreen;
