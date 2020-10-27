import React from 'react';
import {View, Text, StyleSheet, I18nManager} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {TEXT_COLOR} from '../../constants/design';

const CustomText = ({text, textStyle, ...props}) => {
  return (
    <Text style={[styles.text, textStyle]} {...props}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: 'DroidArabicKufi',
    textTransform: 'capitalize',
    fontSize: responsiveFontSize(1.8),
    color: TEXT_COLOR,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    letterSpacing: 1,
  },
});

export {CustomText};
