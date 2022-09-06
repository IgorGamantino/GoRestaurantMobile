import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Bag from '../assets/bag.svg'
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SignIn } from '../screens/SignIn';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/authContext';
import { SignUp } from '../screens/SignUp';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export function Routes() {
  const { isLoggedIn } = useContext(AuthContext);


  return (
    <NavigationContainer>
      {!isLoggedIn && <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen

          options={{ headerShown: false }}
          name="SignIn" component={SignIn} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp" component={SignUp} />
      </Stack.Navigator>}

      {isLoggedIn && (
        <Tab.Navigator initialRouteName='Home'
          screenOptions={{
            header: () => null,
            tabBarActiveTintColor: '#C72828',
            tabBarStyle: {
              display: 'flex',
              flexDirection: 'row',
            }
          }}
        >
          <Tab.Screen

            options={{
              tabBarLabelStyle: {
                fontSize: 13,
                display: 'flex',
                flexDirection: 'row',
                fontFamily: 'Poppins_600SemiBold'
              },
              tabBarIcon: ({ focused, color, size }) => <Bag color={color} width={24} height={24} />
            }}

            name="Home" component={Home} />
          <Tab.Screen name="Listing" component={Home} />
          <Tab.Screen name="Favorites" component={Home} />
        </Tab.Navigator>)}
    </NavigationContainer>
  );
}