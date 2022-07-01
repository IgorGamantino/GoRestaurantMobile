import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts, Poppins_600SemiBold, } from '@expo-google-fonts/poppins';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Sofia_400Regular } from '@expo-google-fonts/sofia';
import styled from 'styled-components/native'
import * as SplashScreen from 'expo-splash-screen';
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
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c2c3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Text = styled.Text`
  font-size: 70px;
  color: orange;
`;