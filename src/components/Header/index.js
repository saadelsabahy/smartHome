import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {ACTIVE_ICON, MAIN_COLOR, TEXT_COLOR} from '../../constants/design';

const Header = ({onMenuPressed, onNotificationsPressed}) => {
  return (
    <Appbar.Header style={{backgroundColor: 'transparent', elevation: 0}}>
      <Appbar.Action icon="menu" onPress={onMenuPressed} color={TEXT_COLOR} />
      <Appbar.Content />
      <Appbar.Action
        icon="bell-outline"
        onPress={onNotificationsPressed}
        color={TEXT_COLOR}
      />
    </Appbar.Header>
  );
};

export {Header};
