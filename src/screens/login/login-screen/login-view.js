import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../utils/colors';

const LoginView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please Log In!</Text>
    </View>
  );
};

export default memo(LoginView);

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
