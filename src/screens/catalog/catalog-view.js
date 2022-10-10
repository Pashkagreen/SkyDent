import React, {memo} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {colors} from '../../utils/colors';

const CatalogView = props => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} />
      <Text>Disease Catalog!</Text>
    </View>
  );
};

export default memo(CatalogView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
