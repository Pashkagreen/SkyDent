import React, {memo} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CatalogItem from '../../components/CatalogItem';
import ScreenHeader from '../../components/ScreenHeader';

const CatalogView = props => {
  const catalog = [
    {
      id: 1,
      title: 'Specialists',
      description: 'Our talented Specialists are our pride',
      addition: 'See the whole staff',
      image: require('../../assets/images/fav-doctor.png'),
    },
    {
      id: 2,
      title: 'Services',
      description: 'List of services provided by our team',
      addition: 'See the whole list',
      image: require('../../assets/images/service.png'),
    },
    {
      id: 3,
      title: 'Clinics',
      description: 'We definitely have a clinic in your district',
      addition: 'Choose your nearest',
      image: require('../../assets/images/process.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Catalog" />
      <View style={styles.categoriesContainer}>
        {catalog.map(item => (
          <CatalogItem
            title={item.title}
            key={item.id}
            description={item.description}
            addition={item.addition}
            image={item.image}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default memo(CatalogView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('4%'),
  },
  categoriesContainer: {
    flexDirection: 'column',
  },
});
