import React, {memo} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import CustomCalendar from '../../components/CustomCalendar';
import * as Animatable from 'react-native-animatable';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../../utils/colors';

const AppointmentView = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeInUpBig" style={styles.appointment}>
        <Text style={styles.title}>New appointment</Text>
        <CustomCalendar minDate={new Date().getDate()} />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default memo(AppointmentView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  appointment: {
    width: wp('100%'),
    height: hp('80%'),
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: wp('2%'),
    marginBottom: 12,
    color: colors.black,
  },
});
