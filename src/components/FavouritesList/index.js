import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {favourites} from '../../utils/mockData';
import {CustomText} from '../customText';
import {FavouriteItem} from '../FavouriteItem';
import * as Animatable from 'react-native-animatable';
const FavouritesList = () => {
  return (
    <View style={styles.container}>
      <CustomText text={'favourite devices'} />
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
          data={favourites.slice(0, favourites.length / 2)}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item: {active, deviceName, icon, subTitle}, index}) => {
            return (
              <Animatable.View
                animation="slideInUp"
                delay={index * 1000}
                /* style={{flex: 1, backgroundColor: 'red'}} */
              >
                <FavouriteItem
                  deviceStatus={active}
                  icon={icon}
                  title={deviceName}
                  subTitle={subTitle}
                />
              </Animatable.View>
            );
          }}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          bounces={false}
          style={{flex: 1}}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          showsHorizontalScrollIndicator={false}
          persistentScrollbar
          data={favourites.slice(favourites.length / 2, favourites.length)}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item: {active, deviceName, icon, subTitle}, index}) => {
            return (
              <Animatable.View
                animation="slideInUp"
                delay={index * 1000}
                /* style={{flex: 1, backgroundColor: 'red'}} */
              >
                <FavouriteItem
                  deviceStatus={active}
                  icon={icon}
                  title={deviceName}
                  subTitle={subTitle}
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
    justifyContent: 'space-evenly',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {FavouritesList};
