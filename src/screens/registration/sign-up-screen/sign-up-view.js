import React, {memo} from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import TextInputMask from 'react-native-text-input-mask';
import Input from '../../../components/Input';
import ActivityButton from '../../../components/ActivityButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useForm, Controller, FormProvider} from 'react-hook-form';

import DatePicker from '../../../components/DatePicker';
import Picker from '../../../components/Picker';

import {colors} from '../../../utils/colors';
import {EMAIL_REGEX} from '../../../utils/func';

const SignUpView = ({
  data,
  refs,
  loading,
  updateSecureTextEntry,
  isBirthInputFocused,
  setBirthInputFocused,
  onSubmit,
  activeTab,
  setActiveTab,
  handleFirstSubmit,
}) => {
  const {control, errors, handleSubmit, formState} = useForm({
    mode: 'onChange',
  });

  const isContinueEnabled =
    !!formState.dirtyFields.firstname &&
    !!formState.dirtyFields.lastname &&
    !!formState.dirtyFields.patronymic &&
    !!formState.dirtyFields.gender;
  const isBtnDisabled = !formState.isValid;
  const styles = getStyles(activeTab);

  const pickerItems = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.dentalGreen}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.swiperContainer}>
          <TouchableOpacity
            style={styles.swiperFirstItem}
            onPress={() => setActiveTab(1)}
            hitSlop={styles.hitSlop}></TouchableOpacity>
          <TouchableOpacity
            style={styles.swiperSecondItem}
            // onPress={() => setActiveTab(2)}
            hitSlop={styles.hitSlop}></TouchableOpacity>
        </View>
        <ScrollView ref={refs.scrollRef} showsVerticalScrollIndicator={false}>
          <View style={styles.tabContainerStyle}>
            <FormProvider
              handleSubmit={handleSubmit}
              control={control}
              errors={errors}>
              <View style={activeTab === 2 && {height: 0, opacity: 0}}>
                <Controller
                  control={control}
                  render={({onChange, value}) => (
                    <Input
                      title="First name"
                      iconName="user-o"
                      iconMode="FontAwesome"
                      placeholder="Your first name"
                      placeholderTextColor={colors.placeholderTextColor}
                      onChangeText={onChange}
                      value={value}
                      isValid={!formState.errors.firstname && value.length > 2}
                    />
                  )}
                  rules={{
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z ]{2,30}$/,
                    },
                  }}
                  name="firstname"
                  defaultValue=""
                />
                <Controller
                  control={control}
                  render={({onChange, value}) => (
                    <Input
                      title="Middle name"
                      iconName="user-o"
                      iconMode="FontAwesome"
                      placeholder="Your middle name"
                      textStyle={styles.tabItemStyle}
                      placeholderTextColor={colors.placeholderTextColor}
                      onChangeText={onChange}
                      value={value}
                      isValid={!formState.errors.patronymic && value.length > 2}
                    />
                  )}
                  rules={{
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z ]{2,30}$/,
                    },
                  }}
                  name="patronymic"
                  defaultValue=""
                />
                <Controller
                  control={control}
                  render={({onChange, value}) => (
                    <Input
                      title="Last name"
                      iconName="user-o"
                      iconMode="FontAwesome"
                      placeholder="Your last name"
                      textStyle={styles.tabItemStyle}
                      placeholderTextColor={colors.placeholderTextColor}
                      onChangeText={onChange}
                      value={value}
                      isValid={!formState.errors.lastname && value.length > 2}
                    />
                  )}
                  rules={{
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z ]{2,30}$/,
                    },
                  }}
                  name="lastname"
                  defaultValue=""
                />
                <Controller
                  control={control}
                  render={({onChange, value}) => (
                    <>
                      <Text style={[styles.textFooter, styles.tabItemStyle]}>
                        Gender
                      </Text>
                      <View style={styles.action}>
                        <FontAwesome
                          color="#05375a"
                          name="venus-mars"
                          size={20}
                        />
                        <Picker
                          items={pickerItems}
                          label="Gender"
                          pickerStyle={styles.textInput}
                          placeholder={{
                            label: 'Choose a gender',
                          }}
                          value={value}
                          onChange={onChange}
                        />
                      </View>
                    </>
                  )}
                  rules={{
                    required: true,
                  }}
                  name="gender"
                  defaultValue=""
                />
                <ActivityButton
                  text="Continue"
                  type="primary"
                  containerStyle={styles.tabItemStyle}
                  disabled={!isContinueEnabled}
                  onPress={() => handleFirstSubmit()}
                />
              </View>

              <View style={activeTab === 1 && {height: 0, opacity: 0}}>
                <Controller
                  control={control}
                  render={({onChange, value}) => (
                    <Input
                      title="Email"
                      iconName="email-outline"
                      iconMode="MaterialCommunityIcons"
                      placeholder="Your Email"
                      placeholderTextColor={colors.placeholderTextColor}
                      onChangeText={onChange}
                      value={value}
                      errorMessage={errors.email && errors.email.message}
                      isValid={!formState.errors.email && value.length > 4}
                    />
                  )}
                  rules={{
                    required: true,
                    pattern: {
                      value: EMAIL_REGEX,
                      message: 'Email must be valid',
                    },
                  }}
                  name="email"
                  defaultValue=""
                />
                <Controller
                  control={control}
                  render={({onChange, value}) => (
                    <>
                      <Text style={[styles.textFooter, styles.tabItemStyle]}>
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
                          onChangeText={(formatted, extracted) =>
                            onChange('+' + extracted)
                          }
                          value={value}
                        />
                        {!formState.errors.phoneNumber &&
                        value.length === 13 ? (
                          <Animatable.View animation="bounceIn">
                            <Feather
                              color="green"
                              name="check-circle"
                              size={20}
                            />
                          </Animatable.View>
                        ) : null}
                      </View>
                    </>
                  )}
                  rules={{
                    required: true,
                  }}
                  name="phoneNumber"
                  defaultValue=""
                />
                <Controller
                  control={control}
                  render={({onChange, value}) => (
                    <>
                      <Text style={[styles.textFooter, styles.tabItemStyle]}>
                        Birth date
                      </Text>
                      <View style={styles.action}>
                        <MaterialCommunityIcons
                          color="#05375a"
                          name="calendar"
                          size={20}
                        />
                        <DatePicker
                          isFocused={isBirthInputFocused}
                          label="Дата рождения"
                          placeholderTextColor={colors.textInput}
                          setFocused={setBirthInputFocused}
                          value={value}
                          onChange={onChange}
                        />
                      </View>
                    </>
                  )}
                  rules={{
                    required: true,
                  }}
                  name="birthDate"
                  defaultValue=""
                />
                <Controller
                  control={control}
                  render={({onChange, value}) => (
                    <Input
                      title="Password"
                      textStyle={{marginTop: 20}}
                      iconName="lock"
                      iconMode="Feather"
                      placeholder="Your Password"
                      placeholderTextColor={colors.placeholderTextColor}
                      onChangeText={onChange}
                      value={value}
                      errorMessage={
                        value !== '' &&
                        value.length < 6 &&
                        'Password must be at least 6 characters long'
                      }
                      isPassword={true}
                      secureTextEntry={data.secureTextEntry}
                      updateSecureTextEntry={updateSecureTextEntry}
                      isValid={value.length > 5}
                    />
                  )}
                  rules={{
                    required: true,
                    pattern: /[0-9a-zA-Z]{6,}/i,
                  }}
                  name="password"
                  defaultValue=""
                />
                <ActivityButton
                  text="Sign Up"
                  type="primary"
                  containerStyle={styles.tabItemStyle}
                  disabled={isBtnDisabled}
                  loading={loading}
                  onPress={() => handleSubmit(onSubmit)()}
                />
              </View>
            </FormProvider>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default memo(SignUpView);

const getStyles = activeTab =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.dentalGreen,
    },
    tabContainerStyle: {
      flexDirection: 'column',
    },
    tabItemStyle: {
      marginTop: 20,
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
    },
    footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: colors.white,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    text_header: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 30,
    },
    textFooter: {
      color: colors.darkBlue,
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
    swiperContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 12,
      borderRadius: 30,
      marginBottom: 10,
    },
    swiperFirstItem: {
      width: '48%',
      height: '100%',
      backgroundColor: colors.dentalGreen,
      borderRadius: 30,
      height: 5,
    },
    swiperSecondItem: {
      width: '48%',
      height: '100%',
      backgroundColor:
        activeTab === 2 ? colors.dentalGreen : colors.backgroundGrey,
      borderRadius: 30,
      height: 5,
    },
    hitSlop: {
      top: 10,
      bottom: 10,
    },
  });
