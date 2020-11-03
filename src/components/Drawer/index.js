import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {MAIN_COLOR, SCREEN_HEIGHT} from '../../constants/design';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
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
        <Image source={require('../../assets/images/ev_side_logo.png')} />
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
    position: 'absolute',
    bottom: 0,
  },
});

export {CustomDrawer};
