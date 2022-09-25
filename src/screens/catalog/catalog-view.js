import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '../../utils/colors';

const CatalogView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Disease Catalog!</Text>
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
  text: {
    color: colors.blue,
    fontSize: 26,
  },
});
