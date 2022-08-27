import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../utils/colors';

const SignUpView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please Sign Up!</Text>
    </View>
  );
};

export default memo(SignUpView);

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
