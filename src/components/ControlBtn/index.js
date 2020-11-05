import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {ACTIVE_ICON} from '../../constants/design';
const ControlButton = ({title}) => {
  return (
    <Button
      mode="outlined"
      onPress={() => console.log('Pressed')}
      color={ACTIVE_ICON}
      labelStyle={{marginHorizontal: 0}}
      style={{borderColor: ACTIVE_ICON, paddingHorizontal: 0}}>
      {title}
    </Button>
  );
};

export {ControlButton};

const styles = StyleSheet.create({});
