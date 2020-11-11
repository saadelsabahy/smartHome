import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {favourites} from '../../utils/mockData';
import {CustomText} from '../customText';
import {FavouriteItem} from '../FavouriteItem';
import * as Animatable from 'react-native-animatable';
const FavouritesList = () => {
  return (
    <View style={styles.container}>
      <CustomText text={'favourite devices'} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        overScrollMode="never">
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-evenly',
          }}
          numColumns={favourites.length / 2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={favourites}
          overScrollMode="never"
          renderItem={({item: {active, deviceName, icon, subTitle}, index}) => {
            return (
              <Animatable.View
                key={`${index}`}
                animation="slideInUp"
                delay={index * 800}
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
      </ScrollView>
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
