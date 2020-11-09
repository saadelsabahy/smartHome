/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {Header} from './src/components';
import {MAIN_COLOR} from './src/constants/design';
import AppNavgation from './src/navigation';
import {Home} from './src/Screens';
import RNBootSplash from 'react-native-bootsplash';
const App: () => React$Node = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({duration: 250});
    }, 1000);
    return () => {};
  }, []);
  return (
    <PaperProvider>
      <>
        <StatusBar backgroundColor={MAIN_COLOR} />
        <SafeAreaView style={styles.container}>
          <AppNavgation />
        </SafeAreaView>
      </>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
  },
});

export default App;
