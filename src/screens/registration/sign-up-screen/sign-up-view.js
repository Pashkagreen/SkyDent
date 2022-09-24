import React, {memo, useState} from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import TextInputMask from 'react-native-text-input-mask';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DatePicker from '../../../components/DatePicker';
import Picker from '../../../components/Picker';

import {Colors} from '../../../utils/colors';

const SignUpView = ({
  data,
  refs,
  handlePasswordChange,
  updateSecureTextEntry,
  isBirthInputFocused,
  setBirthInputFocused,
  handleValidEmail,
  firstNameInputChange,
  middleNameInputChange,
  lastNameInputChange,
  genderValueChange,
  mobilePhoneChange,
  birthDateChange,
  onSubmit,
}) => {
  const pickerItems = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView ref={refs.scrollRef} showsVerticalScrollIndicator={false}>
          <Text style={styles.textFooter}>First name</Text>
          <View style={styles.action}>
            <FontAwesome color="#05375a" name="user-o" size={20} />
            <TextInput
              autoCapitalize="none"
              placeholder="Your first name"
              style={styles.textInput}
              onChangeText={val => firstNameInputChange(val)}
            />
            {data.isFirstNameValid ? (
              <Animatable.View animation="bounceIn">
                <Feather color="green" name="check-circle" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.textFooter,
              {
                marginTop: 20,
              },
            ]}>
            Middle name
          </Text>
          <View style={styles.action}>
            <FontAwesome color="#05375a" name="user-o" size={20} />
            <TextInput
              autoCapitalize="none"
              placeholder="Your patronymic"
              style={styles.textInput}
              onChangeText={val => middleNameInputChange(val)}
            />
            {data.isMiddleNameValid ? (
              <Animatable.View animation="bounceIn">
                <Feather color="green" name="check-circle" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.textFooter,
              {
                marginTop: 20,
              },
            ]}>
            Last name
          </Text>
          <View style={styles.action}>
            <FontAwesome color="#05375a" name="user-o" size={20} />
            <TextInput
              autoCapitalize="none"
              placeholder="Your last name"
              style={styles.textInput}
              onChangeText={val => lastNameInputChange(val)}
            />
            {data.isLastNameValid ? (
              <Animatable.View animation="bounceIn">
                <Feather color="green" name="check-circle" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.textFooter,
              {
                marginTop: 20,
              },
            ]}>
            Gender
          </Text>
          <View style={styles.action}>
            <FontAwesome color="#05375a" name="venus-mars" size={20} />
            <Picker
              items={pickerItems}
              label="Gender"
              pickerStyle={styles.textInput}
              placeholder={{
                label: 'Choose a gender',
              }}
              value={data.gender}
              onChange={sex => genderValueChange(sex)}
            />
          </View>

          <Text
            style={[
              styles.textFooter,
              {
                marginTop: 20,
              },
            ]}>
            Mobile phone
          </Text>
          <View style={styles.action}>
            <AntDesign color="#05375a" name="phone" size={20} />
            <TextInputMask
              autoComplete="off"
              autoCorrect={false}
              keyboardType="phone-pad"
              mask={'+[000] ([00]) [000] - [00] - [00]'}
              placeholder={'+375  ( __ )  ___  -  __  -  __'}
              placeholderTextColor="#666666"
              style={[styles.textInput, styles.phoneInput]}
              onChangeText={(formatted, extracted) => {
                mobilePhoneChange(extracted);
              }}
            />
            {data.isMobilePhoneValid ? (
              <Animatable.View animation="bounceIn">
                <Feather color="green" name="check-circle" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.textFooter,
              {
                marginTop: 20,
              },
            ]}>
            Email
          </Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              color="#05375a"
              name="email-outline"
              size={20}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Your E-mail"
              placeholderTextColor={Colors.textInput}
              style={styles.textInput}
              onEndEditing={e => handleValidEmail(e.nativeEvent.text)}
            />
            {data.isEmailValid ? (
              <Animatable.View animation="bounceIn">
                <Feather color="green" name="check-circle" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text
            style={[
              styles.textFooter,
              {
                marginTop: 20,
              },
            ]}>
            Birth Date
          </Text>
          <View style={styles.action}>
            <MaterialCommunityIcons color="#05375a" name="calendar" size={20} />
            <DatePicker
              isFocused={isBirthInputFocused}
              label="Дата рождения"
              placeholderTextColor={Colors.textInput}
              setFocused={setBirthInputFocused}
              value={data.birthDate}
              onChange={dateOfBirth => {
                birthDateChange(dateOfBirth);
              }}
            />
          </View>

          <Text
            style={[
              styles.textFooter,
              {
                marginTop: 20,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather color="#05375a" name="lock" size={20} />
            <TextInput
              autoCapitalize="none"
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather color="grey" name="eye-off" size={20} />
              ) : (
                <Feather color="grey" name="eye" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.colorTextPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.colorTextPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.colorTextPrivate}> and</Text>
            <Text style={[styles.colorTextPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={onSubmit}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default memo(SignUpView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dentalGreen,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 30,
  },
  textFooter: {
    color: Colors.darkBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneInput: {
    fontSize: 14,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  colorTextPrivate: {
    color: 'grey',
  },
});
