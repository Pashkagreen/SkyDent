import React from 'react';
import {
  Appearance,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {colors} from '../utils/colors';

const DatePicker = ({
  setFocused = () => {},
  isFocused = false,
  value = '',
  minimumDate = new Date(1910, 11, 1),
  maximumDate = new Date(),
  onFocus = () => {},
  onBlur = () => {},
  onCancel = () => {},
  onChange = () => {},
  placeholderTextColor = colors.lightGrey,
  label = 'label',
  datePickerStyle = {},
  disabled = false,
}) => {
  const _onChange = text => {
    onChange(text);
  };
  return (
    <View>
      <View style={[styles.container, {...datePickerStyle}]}>
        <TextInput
          placeholder="DD. ММ. YYYY"
          placeholderTextColor={placeholderTextColor}
          style={styles.inputStyle}
          value={
            value ? moment(new Date(value)).format('DD.MM.YYYY').toString() : ''
          }
          onBlur={onBlur}
          onChangeText={_onChange}
          onFocus={onFocus}
        />
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => setFocused(true)}
        />

        {isFocused && (
          <DateTimePickerModal
            cancelTextIOS="Close"
            confirmTextIOS="Confirm"
            display="spinner"
            headerTextIOS="Choose a birthdate"
            isDarkModeEnabled={Appearance.getColorScheme() === 'dark'}
            isVisible={isFocused}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
            mode="date"
            pickerContainerStyleIOS={styles.containerPickerIos}
            onCancel={async () => {
              setFocused(false);
              onCancel();
            }}
            onConfirm={date => {
              setFocused(false);
              _onChange(new Date(date).toISOString().slice(0, 10));
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: -3,
    // paddingHorizontal: 14,
  },
  containerPickerIos: {
    justifyContent: 'center',
  },
  label: {
    width: '100%',
    marginBottom: 4,
    color: colors.lightGrey,
  },
  inputStyle: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  touchable: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default React.memo(DatePicker);
