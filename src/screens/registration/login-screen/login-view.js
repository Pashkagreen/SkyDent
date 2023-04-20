import React, {memo} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Controller, FormProvider} from 'react-hook-form';
import * as Animatable from 'react-native-animatable';

import ActivityButton from '../../../components/ActivityButton';
import Input from '../../../components/Input';

import {colors} from '../../../utils/colors';
import {EMAIL_REGEX} from '../../../utils/func';

const LoginView = ({
  goToSignUp,
  loading,
  loginHandle,
  refs,
  secureTextEntry,
  updateSecureTextEntry,
  control,
  errors,
  handleSubmit,
  formState,
}) => {
  const isBtnDisabled = !formState.isValid;
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.dentalGreen}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <KeyboardAvoidingView>
          <FormProvider
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}>
            <Controller
              control={control}
              defaultValue=""
              name="email"
              render={({onChange, value}) => (
                <Input
                  errorMessage={errors.email && errors.email.message}
                  iconMode="MaterialCommunityIcons"
                  iconName="email-outline"
                  inputRef={refs.inputEmailRef}
                  isValid={!formState.errors.email && value.length > 4}
                  keyboardType="email-address"
                  placeholder="Your Email"
                  placeholderTextColor={colors.placeholderTextColor}
                  title="Email"
                  value={value}
                  onChangeText={onChange}
                  onSubmitEditing={() => {
                    refs.inputPasswordRef.current?.focus();
                  }}
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
                  inputRef={refs.inputPasswordRef}
                  isPassword={true}
                  isValid={value.length > 5}
                  placeholder="Your Password"
                  placeholderTextColor={colors.placeholderTextColor}
                  secureTextEntry={secureTextEntry}
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
            <TouchableOpacity>
              <Text style={{color: colors.dentalGreen, marginTop: 15}}>
                Forgot password?
              </Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <ActivityButton
                disabled={isBtnDisabled}
                loading={loading}
                main={true}
                text="Sign In"
                type="primary"
                onPress={() => handleSubmit(loginHandle)()}
              />

              <TouchableOpacity
                style={[
                  styles.signIn,
                  {
                    borderColor: colors.dentalGreen,
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}
                onPress={goToSignUp}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: colors.dentalGreen,
                    },
                  ]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </FormProvider>
        </KeyboardAvoidingView>
      </Animatable.View>
    </View>
  );
};

export default memo(LoginView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dentalGreen,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: colors.white,
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
    fontSize: 30,
  },
  text_footer: {
    color: colors.darkBlue,
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
    fontSize: 16,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.errorRed,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: colors.darkBlue,
    fontSize: 14,
  },
  errorMsg: {
    color: colors.errorRed,
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'column',
    gap: 35,
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
    fontFamily: Platform.OS === 'ios' ? 'ProductSans-Bold' : 'ProductSansBold',
  },
});
