import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../Screens/Home';
import {CustomDrawer, CustomText} from '../components';
import RoomDetailes from '../Screens/Room Detailes';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Camera} from '../components/Camera';
import {
  MAIN_COLOR,
  SCREEN_HEIGHT,
  TEXT_COLOR,
  SECONDARY_COLOR,
  ICON_SIZE_NORMAL,
  INACTIVE_ICON,
  ACTIVE_ICON,
} from '../constants/design';
import Icon from 'react-native-vector-icons/Ionicons';

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
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerType="back"
      drawerContentOptions={{
        activeTintColor: ACTIVE_ICON,
        inactiveTintColor: INACTIVE_ICON,
        itemStyle: {
          height: SCREEN_HEIGHT / 13,
          width: '100%',
          justifyContent: 'center',
          marginHorizontal: 15,
          marginStart: 0,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={RoomsStack}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              name={'md-home-outline'}
              color={focused ? ACTIVE_ICON : INACTIVE_ICON}
              size={ICON_SIZE_NORMAL}
            />
          ),
          drawerLabel: ({focused}) => (
            <CustomText
              text={'home'}
              textStyle={{color: focused ? ACTIVE_ICON : INACTIVE_ICON}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Camera"
        component={Camera}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              name={'camera-outline'}
              color={focused ? ACTIVE_ICON : INACTIVE_ICON}
              size={ICON_SIZE_NORMAL}
            />
          ),
          drawerLabel: ({focused}) => (
            <CustomText
              text={'camera chat'}
              textStyle={{color: focused ? ACTIVE_ICON : INACTIVE_ICON}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const AppNavgation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavgation;
