import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client'

import { useFonts } from '@expo-google-fonts/roboto';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Sofia_400Regular } from '@expo-google-fonts/sofia';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import styled from 'styled-components/native'
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/global';
import { client } from './services';
import { Text } from 'react-native';
import { Routes } from './routes';
import { AuthContextProvider } from './Context/authContext';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Sofia_400Regular,
    Roboto_400Regular
  });



  if (!Poppins_600SemiBold) return <Text>Carregando...</Text>

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

