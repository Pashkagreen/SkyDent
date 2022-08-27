import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';

const HistoryView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History of your appointments!</Text>
    </View>
  );
};

export default memo(HistoryView);

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
