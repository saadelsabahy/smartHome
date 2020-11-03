import React, {useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton, Switch} from 'react-native-paper';
import {CustomText, RoomDeviceItem} from '../../components';
import {
  ICON_SIZE_MEDIUM,
  ICON_SIZE_NORMAL,
  MAIN_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SWITCH_ACTIVE,
  SWITCH_INACTIVE,
  TEXT_COLOR,
} from '../../constants/design';
import {favourites} from '../../utils/mockData';
import * as Animatable from 'react-native-animatable';
const RoomDetailes = ({navigation, route}) => {
  const [renderList, setrenderList] = useState(false);
  const {photo, roomName, devicesNumbers} = route.params;
  const onToggleSwitch = (index) => {
    favourites[index]['active'] = !favourites[index]['active'];
    setrenderList(!renderList);
  };
  const onToggleFavourite = (index) => {
    favourites[index]['favourite'] = !favourites[index]['favourite'];
    setrenderList(!renderList);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: photo}}
        style={styles.imageContainer}
        resizeMode="cover">
        <View style={styles.backContainer}>
          <IconButton
            icon={'arrow-left'}
            color={TEXT_COLOR}
            size={ICON_SIZE_NORMAL}
            onPress={() => navigation.goBack()}
            style={{backgroundColor: MAIN_COLOR, zIndex: 1000}}
          />
        </View>
        <LinearGradient
          colors={['#ffffff00', MAIN_COLOR]}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          locations={[0, 0.999]}
        />
      </ImageBackground>
      <LinearGradient
        colors={['#ffffff00', MAIN_COLOR]}
        style={styles.dataContainer}
        locations={[0, 0.999]}>
        <View style={styles.headerData}>
          <View>
            <CustomText text={roomName} textStyle={styles.roomName} />
            <CustomText
              text={`${devicesNumbers} devices`}
              textStyle={styles.roomNumber}
            />
          </View>
          <Switch
            value={true}
            // onValueChange={onToggleSwitch}
            color={SWITCH_ACTIVE}
            trackColor={{true: SWITCH_ACTIVE, false: SWITCH_INACTIVE}}
          />
        </View>
        <FlatList
          data={favourites}
          style={{flex: 1}}
          extraData={renderList}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          numColumns={2}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({
            item: {icon, deviceName, active, favourite},
            index,
          }) => {
            return (
              <Animatable.View delay={800 * index} animation="zoomIn">
                <RoomDeviceItem
                  deviceIcon={icon}
                  deviceName={deviceName}
                  deviceStatus={active}
                  onToggleSwitch={() => onToggleSwitch(index)}
                  favourite={favourite}
                  onToggleFavourite={() => onToggleFavourite(index)}
                />
              </Animatable.View>
            );
          }}
        />
      </LinearGradient>
    </View>
  );
};

export default RoomDetailes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    opacity: 0.9,
  },
  imageContainer: {
    height: SCREEN_HEIGHT / 3,
    width: SCREEN_WIDTH,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dataContainer: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
  },
  headerData: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  roomName: {
    fontWeight: '700',
  },
  roomNumber: {
    textTransform: 'lowercase',
    opacity: 0.9,
  },
  backContainer: {
    position: 'absolute',
    top: 10,
    start: 10,
  },
});
