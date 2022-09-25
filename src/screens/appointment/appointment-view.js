import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '../../utils/colors';

const AppointmentView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Make a new appointment!</Text>
    </View>
  );
};

export default memo(AppointmentView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  text: {
    color: colors.blue,
    fontSize: 26,
  },
});
