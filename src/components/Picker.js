import React from 'react';
import {StyleSheet, View} from 'react-native';

import md5 from 'md5';
import RNPickerSelect from 'react-native-picker-select';

import {colors} from '../utils/colors';

const Picker = ({
  placeholder = {label: '', value: ''},
  items = [],
  value = '',
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
  onDonePress = () => {},
  pickerStyle = {},
}) => {
  const pickerStyles = pickerSelectStyles();

  return (
    <View>
      <View style={[pickerStyles.container, {...pickerStyle}]}>
        <RNPickerSelect
          itemKey={md5(new Date().getTime())}
          items={items}
          placeholder={placeholder}
          style={pickerStyles}
          value={value}
          useNativeAndroidPickerStyle={false}
          // Icon={() => {
          //   return (
          //     <MaterialCommunityIcons
          //       name="chevron-down"
          //       size={20}
          //       color={colors.lightGrey}
          //     />
          //   );
          // }}
          onClose={onBlur}
          onDonePress={onDonePress}
          onOpen={onFocus}
          onValueChange={onChange}
        />
      </View>
    </View>
  );
};

const pickerSelectStyles = () =>
  StyleSheet.create({
    container: {},
    inputIOS: {
      width: '100%',
      fontSize: 14,
      color: '#05375a',
      borderRadius: 4,
      overflow: 'hidden',
      // left: -1,
    },
    label: {
      width: '100%',
      marginBottom: 4,
    },
    inputAndroid: {
      height: 48,
      padding: 12,
      borderWidth: 0,
      borderRadius: 4,
      fontSize: 14,
      color: '#05375a',
      // left: -1,
    },
    placeholder: {
      fontSize: 14,
      color: colors.lightGrey,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      paddingRight: 10,
      right: -30,
    },
  });

export default React.memo(Picker);
