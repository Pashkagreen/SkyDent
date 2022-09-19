import React from 'react';
import {
  View,
  TextInput,
  Appearance,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Colors} from '../utils/colors';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
  placeholderTextColor = Colors.lightGrey,
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
          value={
            value ? moment(new Date(value)).format('DD.MM.YYYY').toString() : ''
          }
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={_onChange}
          style={styles.inputStyle}
          placeholder="DD. ММ. YYYY"
          placeholderTextColor={placeholderTextColor}
        />
        <View style={styles.calendarIcon}>
          <MaterialCommunityIcons
            name="calendar"
            width={24}
            height={24}
            color={Colors.lightGrey}
          />
        </View>
        <TouchableOpacity
          onPress={() => setFocused(true)}
          style={styles.touchable}
        />

        {isFocused && (
          <DateTimePickerModal
            isVisible={isFocused}
            headerTextIOS="Choose a birthdate"
            confirmTextIOS="Confirm"
            cancelTextIOS="Close"
            display="spinner"
            mode="date"
            pickerContainerStyleIOS={{
              justifyContent: 'center',
            }}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            isDarkModeEnabled={Appearance.getColorScheme() === 'dark'}
            onConfirm={date => {
              setFocused(false);
              _onChange(new Date(date).toISOString());
            }}
            onCancel={async () => {
              setFocused(false);
              onCancel();
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
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 48,
    // paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.backgroundGrey,
    borderColor: Colors.darkGrey,
    color: Colors.darkGrey,
  },
  label: {
    width: '100%',
    marginBottom: 4,
    color: Colors.lightGrey,
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    color: Colors.lightGrey,
    paddingHorizontal: 12,
  },
  calendarIcon: {
    position: 'absolute',
    right: 14,
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