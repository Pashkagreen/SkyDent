import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors} from '../utils/colors';

import MenuItem from './MenuItem';

const Menu = ({navigation}) => {
  return (
    <View style={styles.menuContainer}>
      <MenuItem
        title="My Doctor"
        type="doctor"
        onPress={() => navigation.navigate('Catalog')}
      />
      <MenuItem
        title="My Clinic"
        type="clinic"
        onPress={() => navigation.navigate('Catalog')}
      />
      <MenuItem
        title="My Discount"
        type="discount"
        onPress={() => navigation.navigate('Catalog')}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: hp('13%'),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    elevation: 5,
    shadowColor: colors.darkGrey,
    shadowRadius: 5,
    marginTop: -24,
    marginBottom: 4,
  },
});
