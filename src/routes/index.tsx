import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Bag from '../assets/bag.svg'
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export function Routes() {
  const signin = false;
  return (
    <NavigationContainer>
      {!signin && <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn" component={SignIn} />
      </Stack.Navigator>}

      {signin && (
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