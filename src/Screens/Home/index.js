import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FavouriteItem, Header, RoomDeviceItem} from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <RoomDeviceItem />
      <FavouriteItem />
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
