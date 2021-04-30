import React, { useEffect, useState } from 'react';
import { Body, Container, Content, Header, Title, Text } from 'native-base';

import Model from './Model';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
    }
    loadFonts();

    setIsReady(true);
  });

  if (!isReady) {
    return <></>
  }

  return (
    <Container>
      <Header>
        <Body>
          <Title>RiskyTicketV2</Title>
        </Body>
      </Header>
      <Content>
        <Model />
      </Content>
    </Container>
  );
}
