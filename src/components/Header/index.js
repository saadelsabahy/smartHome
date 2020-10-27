import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {ACTIVE_ICON} from '../../constants/design';

const Header = ({onMenuPressed, onNotificationsPressed}) => {
  return (
    <Appbar.Header style={{backgroundColor: 'transparent', elevation: 0}}>
      <Appbar.Action icon="menu" onPress={onMenuPressed} color={ACTIVE_ICON} />
      <Appbar.Content />
      <Appbar.Action
        icon="bell-outline"
        onPress={onNotificationsPressed}
        color={ACTIVE_ICON}
      />
    </Appbar.Header>
  );
};

export {Header};
