import React, {memo} from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import CatalogItem from '../../components/CatalogItem';
import ScreenHeader from '../../components/ScreenHeader';

const CatalogView = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Catalog" />
      <Animatable.View
        animation="fadeInUpBig"
        style={styles.categoriesContainer}>
        {props.catalog.map(item => (
          <CatalogItem
            key={item.id}
            addition={item.addition}
            description={item.description}
            gradient={item.gradient}
            image={item.image}
            title={item.title}
            onPress={item.onPress}
          />
        ))}
      </Animatable.View>
    </SafeAreaView>
  );
};

export default memo(CatalogView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('4%'),
    marginTop: Platform.OS === 'android' ? hp('4%') : 0,
  },
  categoriesContainer: {
    flexDirection: 'column',
  },
});
