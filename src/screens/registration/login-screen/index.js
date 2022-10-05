import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import EncryptedStorage from 'react-native-encrypted-storage';

import AuthService from '../../../services/auth';
import {setFirstLaunch} from '../../../store/reducers/app';
import {setUserData} from '../../../store/reducers/user';

import LoginView from './login-view';

const LoginContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const refs = {
    inputEmailRef: React.createRef(),
    inputPasswordRef: React.createRef(),
  };

  const signIn = async userData => {
    try {
      setLoading(true);
      console.log('test');
      const response = await AuthService.signIn(userData);
      console.log('response', response);

      await EncryptedStorage.setItem(
        'accessToken',
        response.innerEntity.accessToken,
      );
      await EncryptedStorage.setItem(
        'refreshToken',
        response.innerEntity.refreshToken,
      );

      dispatch(setUserData(response.innerEntity.userData));

      navigation.navigate('Main');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loginHandle = data => {
    signIn(data);
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  useEffect(() => {
    dispatch(setFirstLaunch());
  }, []);

  return (
    <LoginView
      goToSignUp={goToSignUp}
      loading={loading}
      loginHandle={loginHandle}
      refs={refs}
      secureTextEntry={secureTextEntry}
      updateSecureTextEntry={setSecureTextEntry}
    />
  );
};

export default LoginContainer;
