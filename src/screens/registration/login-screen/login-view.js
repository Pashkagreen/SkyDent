import React, {memo} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Input from '../../../components/Input';

import * as Animatable from 'react-native-animatable';
import {useForm, Controller, FormProvider} from 'react-hook-form';
import {EMAIL_REGEX} from '../../../utils/func';

import {colors} from '../../../utils/colors';
import ActivityButton from '../../../components/ActivityButton';

const LoginView = props => {
  const {control, errors, handleSubmit, formState} = useForm({
    mode: 'onChange',
  });

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
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}>
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
                  secureTextEntry={props.secureTextEntry}
                  updateSecureTextEntry={props.updateSecureTextEntry}
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
            <TouchableOpacity>
              <Text style={{color: colors.dentalGreen, marginTop: 15}}>
                Forgot password?
              </Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <ActivityButton
                onPress={() => handleSubmit(props.loginHandle)()}
                text="Sign In"
                type="primary"
                disabled={isBtnDisabled}
                loading={props.loading}
              />

              <TouchableOpacity
                onPress={props.goToSignUp}
                style={[
                  styles.signIn,
                  {
                    borderColor: colors.dentalGreen,
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}>
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
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: colors.darkBlue,
    fontSize: 16,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
});
