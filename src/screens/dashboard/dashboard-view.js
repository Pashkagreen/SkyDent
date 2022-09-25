import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {colors} from '../../utils/colors';

const DashboardView = props => {
  return (
    <View style={styles.container} onPress={() => console.log('fdsaf')}>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  );
};

export default memo(DashboardView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // zIndex: 1,
  },
  text: {
    color: colors.blue,
    fontSize: 26,
  },
});
