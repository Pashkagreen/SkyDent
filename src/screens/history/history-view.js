import React, {memo} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ScreenHeader from '../../components/ScreenHeader';

import {colors} from '../../utils/colors';

const HistoryView = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="History" />
      <Text style={styles.text}>History of your appointments!</Text>
    </SafeAreaView>
  );
};

export default memo(HistoryView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? hp('4%') : 0,
    marginHorizontal: wp('4%'),
  },
  text: {
    color: colors.blue,
    fontSize: 26,
  },
});
