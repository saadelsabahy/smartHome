import React, {useRef, useEffect} from 'react';
import {View, Text, PermissionsAndroid, StyleSheet} from 'react-native';
import {
  CameraKitCamera,
  CameraKitCameraScreen,
  CameraKitGalleryView,
} from 'react-native-camera-kit';
import {IconButton} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SECONDARY_COLOR,
  MAIN_COLOR,
  ICON_SIZE_NORMAL,
  INACTIVE_ICON,
  RECORD_BG,
} from '../../constants/design';
import {CustomText} from '../customText';
const Camera = () => {
  const cameraRef = useRef();
  const checkPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'CameraExample App Camera Permission',
          message: 'CameraExample App needs access to your camera ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //If CAMERA Permission is granted
        //Calling the WRITE_EXTERNAL_STORAGE permission function
        console.log('Garanted');
      } else {
        alert('CAMERA permission denied');
      }
    } catch (err) {
      alert('Camera permission err', err);
      console.warn(err);
    }
  };
  useEffect(() => {
    checkPermission();

    return () => {};
  }, []);

  const onBottomButtonPressed = (event) => {
    const captureImages = JSON.stringify(event.captureImages);
    alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };
  const onBarcodeScan = () => {
    console.log('bar code');
  };
  return (
    <View style={{flex: 1}}>
      <CameraKitCameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
        onBottomButtonPressed={(event) => onBottomButtonPressed(event)}
        style={{flex: 1}}
        hideControls={true}
      />
      <IconButton
        icon={'arrow-left'}
        color={'#fff'}
        size={ICON_SIZE_NORMAL}
        onPress={() => console.log('Pressed')}
        style={{position: 'absolute', top: 10, start: 5}}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.iconContainer}>
          <IconButton
            icon={'camera-outline'}
            color={SECONDARY_COLOR}
            size={ICON_SIZE_NORMAL}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon={'lock-open'}
            color={SECONDARY_COLOR}
            size={ICON_SIZE_NORMAL}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon={'microphone-outline'}
            color={'#fff'}
            size={ICON_SIZE_NORMAL}
            onPress={() => console.log('Pressed')}
            style={{
              backgroundColor: RECORD_BG,
              top: -20,
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
          <IconButton
            icon={'chat-outline'}
            color={SECONDARY_COLOR}
            size={ICON_SIZE_NORMAL}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon={'phone-outline'}
            color={SECONDARY_COLOR}
            size={ICON_SIZE_NORMAL}
            onPress={() => console.log('Pressed')}
          />
        </View>

        <View style={[styles.iconNamesContainer]}>
          <CustomText textStyle={styles.iconName} text={'capture'} />
          <CustomText textStyle={styles.iconName} text={'un-lock'} />
          <CustomText textStyle={styles.iconName} text={'record'} />
          <CustomText textStyle={styles.iconName} text={'response'} />
          <CustomText textStyle={styles.iconName} text={'help'} />
        </View>
      </View>

      {/* <CameraKitGalleryView
        ref={(gallery) => (cameraRef.current = gallery)}
        style={{flex: 1, marginTop: 20}}
        minimumInteritemSpacing={10}
        minimumLineSpacing={10}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  bottomContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 11,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconNamesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconName: {
    color: MAIN_COLOR,
    fontSize: responsiveFontSize(1.3),
    opacity: 0.5,
  },
});

export {Camera};
