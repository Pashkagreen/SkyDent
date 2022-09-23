import React, {memo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../../utils/colors';
import DatePicker from '../../../components/DatePicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextInputMask from 'react-native-text-input-mask';
import Picker from '../../../components/Picker';

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
        <ScrollView showsVerticalScrollIndicator={false} ref={refs.scrollRef}>
          <Text style={styles.text_footer}>First name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your first name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => firstNameInputChange(val)}
            />
            {data.isFirstNameValid ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 20,
              },
            ]}>
            Middle name
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your patronymic"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => middleNameInputChange(val)}
            />
            {data.isMiddleNameValid ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 20,
              },
            ]}>
            Last name
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your last name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => lastNameInputChange(val)}
            />
            {data.isLastNameValid ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 20,
              },
            ]}>
            Gender
          </Text>
          <View style={styles.action}>
            <FontAwesome name="venus-mars" color="#05375a" size={20} />
            <Picker
              placeholder={{
                label: 'Choose a gender',
              }}
              label="Gender"
              items={pickerItems}
              value={data.gender}
              onChange={sex => genderValueChange(sex)}
              pickerStyle={styles.textInput}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 20,
              },
            ]}>
            Mobile phone
          </Text>
          <View style={styles.action}>
            <AntDesign name="phone" color="#05375a" size={20} />
            <TextInputMask
              style={[styles.textInput, styles.phoneInput]}
              keyboardType="phone-pad"
              onChangeText={(formatted, extracted) => {
                mobilePhoneChange(extracted);
              }}
              placeholder={'+375  ( __ )  ___  -  __  -  __'}
              placeholderTextColor="#666666"
              mask={'+[000] ([00]) [000] - [00] - [00]'}
              autoCorrect={false}
              autoComplete="off"
            />
            {data.isMobilePhoneValid ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 20,
              },
            ]}>
            Email
          </Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="email-outline"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Your E-mail"
              placeholderTextColor={Colors.textInput}
              style={styles.textInput}
              autoCapitalize="none"
              onEndEditing={e => handleValidEmail(e.nativeEvent.text)}
            />
            {data.isEmailValid ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 20,
              },
            ]}>
            Birth Date
          </Text>
          <View style={styles.action}>
            <MaterialCommunityIcons name="calendar" size={20} color="#05375a" />
            <DatePicker
              setFocused={setBirthInputFocused}
              isFocused={isBirthInputFocused}
              value={data.birthDate}
              onChange={dateOfBirth => {
                birthDateChange(dateOfBirth);
              }}
              label="Дата рождения"
              placeholderTextColor={Colors.textInput}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 20,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
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
  text_footer: {
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
  color_textPrivate: {
    color: 'grey',
  },
});
