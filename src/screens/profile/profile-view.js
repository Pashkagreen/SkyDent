import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';

const ProfileView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello User!</Text>
    </View>
  );
};

export default memo(ProfileView);

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
