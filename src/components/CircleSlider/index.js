import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CircularSlider from './src/CircularSlider';
import {IconButton} from 'react-native-paper';
import {
  ACTIVE_CARD,
  ACTIVE_ICON,
  ICON_SIZE_NORMAL,
  INACTIVE_ICON,
  MAIN_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SECONDARY_COLOR,
} from '../../constants/design';
import Slider from './Circle/Slider';
const CircularRemote = () => {
  const [startAngle, setstartAngle] = useState(0);
  const [angleLength, setangleLength] = useState(0);
  const [currentValue, setcurrentValue] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.circularContainer}>
        <Slider currentValue={currentValue} />
      </View>
      <View style={styles.ControllersContainer}>
        <IconButton
          icon={'power'}
          color={ACTIVE_ICON}
          size={ICON_SIZE_NORMAL}
          style={{marginStart: 0}}
          onPress={() => {
            console.log('powerPressed');
          }}
        />
        <IconButton
          icon={'fan'}
          color={ACTIVE_ICON}
          size={ICON_SIZE_NORMAL}
          style={{marginStart: 0}}
          onPress={() => {
            console.log('fanPressed');
          }}
        />
      </View>
    </View>
  );
};

export default CircularRemote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
  },
  ControllersContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT / 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  circularContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
