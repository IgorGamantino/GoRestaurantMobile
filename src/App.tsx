import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useFonts, Poppins_600SemiBold, } from '@expo-google-fonts/poppins';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Sofia_400Regular } from '@expo-google-fonts/sofia';
import styled from 'styled-components/native'
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/global';
import { Home } from './screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Sofia_400Regular,
    Roboto_400Regular
  });

  useEffect(() => {
    async function loadfonts() {
      if (!fontsLoaded) await SplashScreen.preventAutoHideAsync()


      SplashScreen.hideAsync()

    }


    loadfonts()
  }, [fontsLoaded])


  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  /* align-items: center; */
  /* justify-content: center; */


`;