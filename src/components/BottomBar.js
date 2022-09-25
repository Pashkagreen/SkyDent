import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import bottomBarConfig from '../navigation/config';
import {colors} from '../utils/colors.js';

/**
 * @component BottomBar
 * @prop {Object} props
 */
const BottomBar = ({state, navigation}) => {
  const insets = useSafeAreaInsets();

  const styles = getStyles(insets, state.index);

  const onPressTab = tabName => {
    navigation.navigate(tabName);
  };

  const BottomTab = ({
    inFocus = false,
    onPress = () => {},
    image = '',
    size = 0,
    absolute = false,
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.tabWrapper}
        onPress={onPress}>
        <View style={absolute ? styles.absoluteIcon : styles.iconWrapper}>
          <MaterialCommunityIcons
            color={inFocus ? colors.blue : colors.paleGreen}
            name={image}
            size={size}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderTab = ({name: tabName}, index) => {
    return (
      bottomBarConfig[tabName] && (
        <BottomTab
          key={index}
          absolute={bottomBarConfig[tabName].absolute}
          image={bottomBarConfig[tabName].image}
          inFocus={state.index === index}
          name={tabName}
          size={bottomBarConfig[tabName].size}
          onPress={() => onPressTab(tabName)}
        />
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>{state.routes.map(renderTab)}</View>
    </View>
  );
};

const getStyles = (insets, index) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingHorizontal: 16,
      marginHorizontal: 6,
      height: 60,
      backgroundColor: colors.white,
      borderColor: 'transparent',
      shadowColor: colors.black,
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowRadius: 3.84,
      shadowOpacity: 0.25,
      borderRadius: 10,
    },

    bottomBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      minHeight: 92,
      backgroundColor: 'transparent',

      shadowColor: colors.black,
      shadowOffset: {
        width: 10,
        height: 10,
      },
    },
    tabWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: insets.bottom || 20,
    },
    absoluteIcon: {
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 60,
      backgroundColor: colors.backgroundGrey,
    },
    iconWrapper: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex: 1,
    },
  });

export default BottomBar;
