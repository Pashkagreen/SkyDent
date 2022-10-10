import React, {memo} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {colors} from '../../utils/colors';

const ServiceView = ({
  service,
  serviceLoading,
  specialists,
  specialistsLoading,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} />
      <Text>Service!</Text>
    </View>
  );
};

export default memo(ServiceView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
