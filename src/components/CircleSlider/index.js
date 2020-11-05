import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
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
import {ControlButton} from '../ControlBtn';
import {CustomText} from '../customText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CircularRemote = () => {
  const [startAngle, setstartAngle] = useState(0);
  const [angleLength, setangleLength] = useState(0);
  const [currentValue, setcurrentValue] = useState(0);

  const iconssColor = (status) => (status ? ACTIVE_ICON : INACTIVE_ICON);
  return (
    <View style={styles.container}>
      <View style={styles.circularContainer}>
        <View
          style={{...styles.rowContainer, flex: 0, justifyContent: 'center'}}>
          <TextInput
            value={`${currentValue}`}
            editable={false}
            style={styles.input}
          />
          <Icon name="temperature-celsius" color={ACTIVE_ICON} size={20} />
        </View>
        <View
          style={{...styles.rowContainer, flex: 0, justifyContent: 'center'}}>
          <Icon
            name="timer"
            color={ACTIVE_ICON}
            size={20}
            style={{marginEnd: 10}}
          />
          <CustomText
            text={`${new Date().getHours()} : ${new Date().getMinutes()} `}
          />
        </View>
      </View>
      <View style={styles.ControllersContainer}>
        <View style={styles.rowContainer}>
          <IconButton
            icon={'power'}
            color={iconssColor(null)}
            size={ICON_SIZE_NORMAL}
            style={styles.icon}
            onPress={() => {
              console.log('powerPressed');
            }}
          />
          <IconButton
            icon={'menu-up'}
            color={iconssColor(null)}
            size={ICON_SIZE_NORMAL}
            style={styles.icon}
            onPress={() => {
              setcurrentValue((prev) => (prev == 28 ? 28 : +prev + 1));
            }}
            disabled={currentValue == 28}
          />
          <IconButton
            icon={'fan'}
            color={iconssColor(null)}
            size={ICON_SIZE_NORMAL}
            style={styles.icon}
            onPress={() => {
              console.log('fanPressed');
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <IconButton
            icon={'timer'}
            color={iconssColor(null)}
            size={ICON_SIZE_NORMAL}
            style={styles.icon}
            onPress={() => {
              console.log('fanPressed');
            }}
          />
          <IconButton
            icon={'menu-down'}
            color={iconssColor(null)}
            size={ICON_SIZE_NORMAL}
            style={styles.icon}
            onPress={() => {
              setcurrentValue((prev) => (prev == 0 ? 18 : +prev - 1));
            }}
            disabled={currentValue == 18}
          />
          <IconButton
            icon={'timer-off'}
            color={iconssColor(null)}
            size={ICON_SIZE_NORMAL}
            style={styles.icon}
            onPress={() => {
              console.log('fanPressed');
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <IconButton
            icon={'sleep'}
            color={iconssColor(null)}
            size={ICON_SIZE_NORMAL}
            style={styles.icon}
            onPress={() => {
              console.log('fanPressed');
            }}
          />
          {/* <ControlButton title={'mode'} />

          <ControlButton title={'mode'} /> */}
        </View>
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
    width: SCREEN_WIDTH * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  circularContainer: {
    paddingVertical: 10,

    height: SCREEN_HEIGHT / 3,
    opacity: 0.3,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 20,
    padding: 20,
  },
  icon: {marginStart: 0, borderColor: ACTIVE_ICON, borderWidth: 0.5},
  input: {
    color: ACTIVE_ICON,
    opacity: 1,

    alignItems: 'center',
    textAlign: 'center',
    fontSize: 100,
  },
});
