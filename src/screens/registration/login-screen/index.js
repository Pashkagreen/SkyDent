import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import AuthService from '../../../services/auth';

import LoginView from './login-view';

import {setFirstLaunch} from '../../../store/actions/app/index';
import {setUserData} from '../../../store/actions/user';

const LoginContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const signIn = async userData => {
    if (userData) {
      const response = await AuthService.signIn(userData);
      console.log(response);
      await AuthService.setAccessTokenToStorage(
        response.innerEntity.accessToken,
      );
      await AuthService.setRefreshTokenToStorage(
        response.innerEntity.refreshToken,
      );
      dispatch(setUserData(response.innerEntity.userData));
      navigation.navigate('Main');
    }
  };

  const textInputChange = val => {
    if (val.trim().length >= 8 && val.trim().includes('@')) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidEmail: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidEmail = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };

  const loginHandle = (email, password) => {
    if (data.email.length === 0 || data.password.length === 0) {
      Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [
        {text: 'Okay'},
      ]);
      return;
    }
    const userData = {
      email: data.email,
      password: data.password,
    };
    signIn(userData);
  };
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  useEffect(() => {
    dispatch(setFirstLaunch());
  }, []);

  return (
    <LoginView
      data={data}
      goToSignUp={goToSignUp}
      handlePasswordChange={handlePasswordChange}
      handleValidEmail={handleValidEmail}
      loginHandle={loginHandle}
      textInputChange={textInputChange}
      updateSecureTextEntry={updateSecureTextEntry}
    />
  );
};

export default LoginContainer;
