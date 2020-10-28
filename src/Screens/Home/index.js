import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Chart,
  FavouriteItem,
  Header,
  RoomDeviceItem,
  RoomsItem,
} from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
      {/*  <Header />
      <RoomDeviceItem />
      <FavouriteItem />
      <RoomsItem /> */}
      <Chart />
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
