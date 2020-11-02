import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../Screens/Home';
import RoomDetailes from '../Screens/Room Detailes';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function RoomsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RoomDetailes" component={RoomDetailes} />
    </Stack.Navigator>
  );
}
const AppNavgation = () => {
  return (
    <NavigationContainer>
      <RoomsStack />
    </NavigationContainer>
  );
};

export default AppNavgation;
