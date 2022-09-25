import React, {memo} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../../utils/colors';

const LoginView = props => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <Text style={[styles.text_footer]}>E-mail</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            color={colors.darkBlue}
            name="email-outline"
            size={20}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Your E-mail"
            placeholderTextColor="#666666"
            style={[styles.textInput]}
            onChangeText={val => props.textInputChange(val)}
            onEndEditing={e => props.handleValidEmail(e.nativeEvent.text)}
          />
          {props.data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather color="green" name="check-circle" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {props.data.isValidEmail ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Email must be valid.</Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather color={colors.darkBlue} name="lock" size={20} />
          <TextInput
            autoCapitalize="none"
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={props.data.secureTextEntry ? true : false}
            style={styles.textInput}
            onChangeText={val => props.handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={props.updateSecureTextEntry}>
            {props.data.secureTextEntry ? (
              <Feather color="grey" name="eye-off" size={20} />
            ) : (
              <Feather color="grey" name="eye" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {props.data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be at least 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{color: colors.dentalGreen, marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() =>
              props.loginHandle(props.data.email, props.data.password)
            }>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: colors.white,
                  },
                ]}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: colors.dentalGreen,
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
            onPress={props.goToSignUp}>
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
