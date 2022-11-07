import React, {memo} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../../utils/colors';

const SubcatalogView = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title={props.type} />
    </SafeAreaView>
  );
};

export default memo(SubcatalogView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('4%'),
    marginTop: Platform.OS === 'android' ? hp('4%') : 0,
  },
});
