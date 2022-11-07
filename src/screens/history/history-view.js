import React, {memo} from 'react';
import {StyleSheet, Text, SafeAreaView, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
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
