import React, {memo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

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
  },
  text: {
    color: Colors.blue,
    fontSize: 26,
  },
});
