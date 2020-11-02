import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomText} from '../customText';
import * as Animatable from 'react-native-animatable';
import {FlatList} from 'react-native-gesture-handler';
import {Rooms} from '../../utils/mockData';
import {RoomsItem} from '../RoomsItem';
const RoomsList = ({onRoomPressed}) => {
  return (
    <View style={styles.container}>
      <CustomText text={'rooms'} />
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          style={{flex: 1}}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={Rooms}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item: {devicesNumbers, photo, roomName}, index}) => {
            return (
              <Animatable.View animation="fadeInRight" delay={index * 1000}>
                <RoomsItem
                  roomPhoto={photo}
                  roomName={roomName}
                  devicesNumber={devicesNumbers}
                  onRoomPressed={() =>
                    onRoomPressed({devicesNumbers, photo, roomName})
                  }
                />
              </Animatable.View>
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});

export {RoomsList};
