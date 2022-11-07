import React, {memo, useRef, useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {screenWidth} from '../../../utils/func';

import {colors} from '../../../utils/colors';

const Overview = props => {
  return <View style={styles.container}></View>;
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: screenWidth,
    backgroundColor: colors.red,
  },
});
