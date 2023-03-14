import React, {memo, useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors} from '../../../utils/colors';
import {screenWidth} from '../../../utils/func';

const Overview = props => {
  return <View style={styles.container} />;
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: screenWidth,
    backgroundColor: colors.red,
  },
});
