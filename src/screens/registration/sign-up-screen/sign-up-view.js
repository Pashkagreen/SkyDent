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

import {Controller, FormProvider, useForm} from 'react-hook-form';
import * as Animatable from 'react-native-animatable';
import TextInputMask from 'react-native-text-input-mask';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ActivityButton from '../../../components/ActivityButton';
import DatePicker from '../../../components/DatePicker';
import Input from '../../../components/Input';
import UniversalModal from '../../../components/modals/UniversalModal';
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
  handleModal,
  showModal,
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
    <>
      <UniversalModal
        buttonSuccessText="Continue"
        description="An email has been sent to your email address containing an activation link. Please click on the link to activate your account."
        image={require('../../../assets/images/success.png')}
        showModal={showModal}
        successOnPress={handleModal}
        title="You was successfully registered!"
      />
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
              hitSlop={styles.hitSlop}
              style={styles.swiperFirstItem}
              onPress={() => setActiveTab(1)}
            />
            <TouchableOpacity
              style={styles.swiperSecondItem}
              // onPress={() => setActiveTab(2)}
              hitSlop={styles.hitSlop}
            />
          </View>
          <ScrollView ref={refs.scrollRef} showsVerticalScrollIndicator={false}>
            <View style={styles.tabContainerStyle}>
              <FormProvider
                control={control}
                errors={errors}
                handleSubmit={handleSubmit}>
                <View style={activeTab === 2 && {height: 0, opacity: 0}}>
                  <Controller
                    control={control}
                    defaultValue=""
                    name="firstname"
                    render={({onChange, value}) => (
                      <Input
                        iconMode="FontAwesome"
                        iconName="user-o"
                        isValid={
                          !formState.errors.firstname && value.length > 2
                        }
                        placeholder="Your first name"
                        placeholderTextColor={colors.placeholderTextColor}
                        title="First name"
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                    rules={{
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z ]{2,30}$/,
                      },
                    }}
                  />
                  <Controller
                    control={control}
                    defaultValue=""
                    name="patronymic"
                    render={({onChange, value}) => (
                      <Input
                        iconMode="FontAwesome"
                        iconName="user-o"
                        isValid={
                          !formState.errors.patronymic && value.length > 2
                        }
                        placeholder="Your middle name"
                        placeholderTextColor={colors.placeholderTextColor}
                        textStyle={styles.tabItemStyle}
                        title="Middle name"
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                    rules={{
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z ]{2,30}$/,
                      },
                    }}
                  />
                  <Controller
                    control={control}
                    defaultValue=""
                    name="lastname"
                    render={({onChange, value}) => (
                      <Input
                        iconMode="FontAwesome"
                        iconName="user-o"
                        isValid={!formState.errors.lastname && value.length > 2}
                        placeholder="Your last name"
                        placeholderTextColor={colors.placeholderTextColor}
                        textStyle={styles.tabItemStyle}
                        title="Last name"
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                    rules={{
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z ]{2,30}$/,
                      },
                    }}
                  />
                  <Controller
                    control={control}
                    defaultValue=""
                    name="gender"
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
                  />
                  <ActivityButton
                    containerStyle={styles.tabItemStyle}
                    disabled={!isContinueEnabled}
                    text="Continue"
                    type="primary"
                    onPress={() => handleFirstSubmit()}
                  />
                </View>

                <View style={activeTab === 1 && {height: 0, opacity: 0}}>
                  <Controller
                    control={control}
                    defaultValue=""
                    name="email"
                    render={({onChange, value}) => (
                      <Input
                        errorMessage={errors.email && errors.email.message}
                        iconMode="MaterialCommunityIcons"
                        iconName="email-outline"
                        isValid={!formState.errors.email && value.length > 4}
                        placeholder="Your Email"
                        placeholderTextColor={colors.placeholderTextColor}
                        title="Email"
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                    rules={{
                      required: true,
                      pattern: {
                        value: EMAIL_REGEX,
                        message: 'Email must be valid',
                      },
                    }}
                  />
                  <Controller
                    control={control}
                    defaultValue=""
                    name="phoneNumber"
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
                            value={value}
                            onChangeText={(formatted, extracted) =>
                              onChange('+' + extracted)
                            }
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
                  />
                  <Controller
                    control={control}
                    defaultValue=""
                    name="birthDate"
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
                  />
                  <Controller
                    control={control}
                    defaultValue=""
                    name="password"
                    render={({onChange, value}) => (
                      <Input
                        errorMessage={
                          value !== '' &&
                          value.length < 6 &&
                          'Password must be at least 6 characters long'
                        }
                        iconMode="Feather"
                        iconName="lock"
                        isPassword={true}
                        isValid={value.length > 5}
                        placeholder="Your Password"
                        placeholderTextColor={colors.placeholderTextColor}
                        secureTextEntry={data.secureTextEntry}
                        textStyle={{marginTop: 20}}
                        title="Password"
                        updateSecureTextEntry={updateSecureTextEntry}
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                    rules={{
                      required: true,
                      pattern: /[0-9a-zA-Z]{6,}/i,
                    }}
                  />
                  <ActivityButton
                    containerStyle={styles.tabItemStyle}
                    disabled={isBtnDisabled}
                    loading={loading}
                    text="Sign Up"
                    type="primary"
                    onPress={() => handleSubmit(onSubmit)()}
                  />
                </View>
              </FormProvider>
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    </>
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
      backgroundColor: colors.dentalGreen,
      borderRadius: 30,
      height: 5,
    },
    swiperSecondItem: {
      width: '48%',
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
