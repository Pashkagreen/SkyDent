import React, {memo, useRef, useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {screenWidth} from '../../../utils/func';
import CustomCalendar from '../../../components/CustomCalendar';

import {colors} from '../../../utils/colors';

const SelectTime = props => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <CustomCalendar minDate={new Date().getDate()} />
    </ScrollView>
  );
};

export default SelectTime;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: screenWidth,
    paddingHorizontal: wp('4%'),
  },
});
