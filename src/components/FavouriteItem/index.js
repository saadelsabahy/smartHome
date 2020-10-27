import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  ACTIVE_CARD,
  ACTIVE_ICON,
  ICON_SIZE_NORMAL,
  INACTIVE_CARD,
  INACTIVE_ICON,
  MAIN_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SWITCH_INACTIVE,
} from '../../constants/design';
import {IconButton} from 'react-native-paper';
import {CustomText} from '../customText';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const FavouriteItem = ({deviceStatus}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.contentContainer}>
        <IconButton
          icon={'heart-outline'}
          color={deviceStatus ? ACTIVE_ICON : INACTIVE_ICON}
          size={ICON_SIZE_NORMAL}
          style={{marginStart: 0}}
        />
        <View style={styles.centerComponent}>
          <CustomText text={'fav'} />
          <CustomText text={'fav'} textStyle={styles.subTitle} />
        </View>
        {deviceStatus && <View style={styles.indicator} />}
      </View>
    </View>
  );
};

export {FavouriteItem};
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 2 - 20,
    height: SCREEN_HEIGHT / 10,
    backgroundColor: ACTIVE_CARD,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    height: '90%',
  },
  centerComponent: {
    flex: 1,
  },
  indicator: {
    width: 3,
    height: '90%',
    backgroundColor: ACTIVE_ICON,
    borderRadius: 15,
  },
  subTitle: {
    fontSize: responsiveFontSize(1.3),
  },
});
