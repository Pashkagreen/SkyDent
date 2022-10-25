import React, {memo} from 'react';
import {StyleSheet, SafeAreaView, View, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
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
            title={item.title}
            key={item.id}
            description={item.description}
            addition={item.addition}
            image={item.image}
            gradient={item.gradient}
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
