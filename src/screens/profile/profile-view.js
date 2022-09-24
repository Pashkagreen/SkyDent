import React, {memo} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../utils/colors';

const ProfileView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello User!</Text>
      <Button title="Log Out!" onPress={props.logOut} />
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
