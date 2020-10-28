import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  ACTIVE_CARD,
  INACTIVE_CARD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design';
import {CustomText} from '../customText';

const RoomsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              'https://www.thespruce.com/thmb/X_uj4i4TdVrORb3ec1yrbHoq83k=/2032x1475/filters:fill(auto,1)/GettyImages-1187200939-74336d2a866d4c99853f700cb4ad7d5f.jpg',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailesContainer}>
        <CustomText text={'living room'} />
        <CustomText text={'8 devices'} textStyle={styles.subTitle} />
      </View>
    </View>
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
