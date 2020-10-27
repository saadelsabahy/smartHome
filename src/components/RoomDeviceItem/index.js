import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  INACTIVE_CARD,
  INACTIVE_ICON,
  ICON_SIZE_NORMAL,
  ICON_SIZE_MEDIUM,
  SECONDARY_COLOR,
  MAIN_COLOR,
  SWITCH_ACTIVE,
  SWITCH_INACTIVE,
  FAVOURITE_ICON,
  ACTIVE_ICON,
} from '../../constants/design';
import {IconButton} from 'react-native-paper';
import {CustomText} from '../customText';
import {Switch} from 'react-native-paper';
const RoomDeviceItem = ({deviceName, deviceIcon, deviceStatus}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={[styles.container]}>
      <View style={styles.topRow}>
        <IconButton
          icon="lightbulb-on"
          color={deviceStatus ? ACTIVE_ICON : INACTIVE_ICON}
          size={ICON_SIZE_NORMAL}
          onPress={() => console.log('Pressed')}
        />
        <CustomText text={deviceName} />
      </View>
      <View style={styles.bottomRow}>
        <IconButton
          icon={deviceStatus ? 'heart' : 'heart-outline'}
          color={deviceStatus ? FAVOURITE_ICON : SWITCH_INACTIVE}
          size={ICON_SIZE_MEDIUM}
          onPress={() => console.log('Pressed')}
          style={{backgroundColor: MAIN_COLOR}}
        />
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          color={SWITCH_ACTIVE}
          trackColor={{true: SWITCH_ACTIVE, false: SWITCH_INACTIVE}}
        />
      </View>
    </View>
  );
};

export {RoomDeviceItem};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 2 - 10,
    height: SCREEN_HEIGHT / 6,
    backgroundColor: INACTIVE_CARD,
    borderRadius: 15,
    justifyContent: 'space-between',
    padding: 5,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
