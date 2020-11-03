import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  Chart,
  CustomText,
  FavouriteItem,
  FavouritesList,
  Header,
  RoomDeviceItem,
  RoomsItem,
  RoomsList,
} from '../../components';
import {Camera} from '../../components/Camera';
import {
  MAIN_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TEXT_COLOR,
} from '../../constants/design';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const Home = ({navigation}) => {
  const OnRoomPressed = ({devicesNumbers, photo, roomName}) => {
    navigation.navigate('RoomDetailes', {devicesNumbers, photo, roomName});
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[TEXT_COLOR, MAIN_COLOR, MAIN_COLOR, MAIN_COLOR]}
        style={{...styles.container, position: 'absolute', zIndex: 1000}}
        locations={[0, 0.5, 0.6, 0.85]}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/bg.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.greetingContainer}>
          <CustomText text={'good evening,'} textStyle={styles.greeting} />
          <CustomText text={'wade wilson'} textStyle={styles.userName} />
        </View>
      </View>

      <View style={styles.headerContainer}>
        <Header onMenuPressed={() => navigation.openDrawer()} />
      </View>

      <View style={styles.favouriteListContainer}>
        <FavouritesList />
      </View>
      <View style={styles.roomsListContainer}>
        <RoomsList onRoomPressed={OnRoomPressed} />
      </View>
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
  },
  headerContainer: {
    position: 'absolute',
    top: 10,
    width: SCREEN_WIDTH,
  },
  imageContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  greetingContainer: {
    width: '90%',
    height: SCREEN_HEIGHT / 14,
    position: 'absolute',
    bottom: 10,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  greeting: {
    fontSize: responsiveFontSize(2.1),
  },
  userName: {
    fontSize: responsiveFontSize(2.5),
    letterSpacing: 2,
  },
  favouriteListContainer: {
    flex: 1,
    paddingTop: 10,
    paddingStart: 10,
  },
  roomsListContainer: {
    flex: 1,
    paddingTop: 10,
    paddingStart: 10,
  },
});
