import React from 'react';
import {View, StyleSheet} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import md5 from 'md5';
import {Colors} from '../utils/colors';

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
          value={value}
          style={pickerStyles}
          onValueChange={onChange}
          items={items}
          placeholder={placeholder}
          useNativeAndroidPickerStyle={false}
          // Icon={() => {
          //   return (
          //     <MaterialCommunityIcons
          //       name="chevron-down"
          //       size={20}
          //       color={Colors.lightGrey}
          //     />
          //   );
          // }}
          onDonePress={onDonePress}
          onOpen={onFocus}
          onClose={onBlur}
          itemKey={md5(new Date().getTime())}
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
      padding: 12,
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
      color: Colors.lightGrey,
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
