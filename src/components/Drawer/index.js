import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  MAIN_COLOR,
  SCREEN_HEIGHT,
  SECONDARY_COLOR,
} from '../../constants/design';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {CustomText} from '../customText';
const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.drawerHeader}>
        <Avatar.Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbHjQTB8ilX7-loOeg1NMKN41FCDc-8RKeDw&usqp=CAU',
          }}
          size={50}
          theme={{colors: {primary: SECONDARY_COLOR}}}
        />
        <View style={{marginLeft: 15, flexDirection: 'column'}}>
          <CustomText text={'wade walson'} />
          <CustomText text={'@w_walse'} />
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        style={{
          marginTop: 0,
          marginVertical: 0,
          paddingVertical: 0,
          paddingTop: 0,
        }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/ev_side_logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
  },
  imageContainer: {
    width: '100%',
    height: SCREEN_HEIGHT / 9,
  },
  image: {
    width: '50%',
    height: '100%',
  },
  drawerHeader: {
    flexDirection: 'row',
    width: '100%',
    height: SCREEN_HEIGHT / 7,
    alignItems: 'center',
    marginStart: 10,
    borderBottomWidth: 0.5,
    borderColor: SECONDARY_COLOR,
  },
});

export {CustomDrawer};
