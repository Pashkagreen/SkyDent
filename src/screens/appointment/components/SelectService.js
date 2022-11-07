import React, {memo, useRef, useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../../../utils/colors';
import {screenWidth} from '../../../utils/func';

const SelectService = props => {
  return <View style={styles.container}></View>;
};

export default SelectService;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: screenWidth,
    backgroundColor: colors.blue,
  },
});
