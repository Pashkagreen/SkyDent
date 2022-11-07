import React, {memo} from 'react';
import {Button, StyleSheet, Text, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ScreenHeader from '../../components/ScreenHeader';
import {colors} from '../../utils/colors';

const ProfileView = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Profile" />
      <Text style={styles.text}>Hello User!</Text>
      <Button title="Log Out!" onPress={props.logOut} />
    </SafeAreaView>
  );
};

export default memo(ProfileView);

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
