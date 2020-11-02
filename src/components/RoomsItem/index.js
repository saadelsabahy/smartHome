import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  ACTIVE_CARD,
  INACTIVE_CARD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design';
import {CustomText} from '../customText';

const RoomsItem = ({roomPhoto, roomName, devicesNumber, onRoomPressed}) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      activeOpacity={0.9}
      onPress={onRoomPressed}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: roomPhoto,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailesContainer}>
        <CustomText text={roomName} />
        <CustomText
          text={`${devicesNumber} device`}
          textStyle={styles.subTitle}
        />
      </View>
    </TouchableOpacity>
  );
};

export {RoomsItem};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 4.5,
    backgroundColor: ACTIVE_CARD,
    borderRadius: 15,
    overflow: 'hidden',
    marginEnd: 10,
    // transform: [{translateY: SCREEN_HEIGHT / 4}],
  },
  imageContainer: {
    width: '100%',
    height: '65%',
    backgroundColor: INACTIVE_CARD,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailesContainer: {
    flex: 1,
    padding: 10,
  },
  subTitle: {
    fontSize: responsiveFontSize(1.4),
    opacity: 0.7,
  },
});
