import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import EncryptedStorage from 'react-native-encrypted-storage';

import AuthService from '../../../services/auth';
import {setFirstLaunch} from '../../../store/reducers/app';
import {setUserData} from '../../../store/reducers/user';

import LoginView from './login-view';
import {Alert} from 'react-native';

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
      const response = await AuthService.signIn(userData);

      await EncryptedStorage.setItem(
        'accessToken',
        response.innerEntity.accessToken,
      );

      await EncryptedStorage.setItem(
        'refreshToken',
        response.innerEntity.refreshToken,
      );

      dispatch(setUserData(response.innerEntity.userData));
    } catch (error) {
      if (error.status === 401) {
        Alert.alert(
          'Error!',
          `${error.message}, please try again.`,
          [
            {
              text: 'OK',
              style: 'default',
            },
          ],
          {
            cancelable: true,
          },
        );
      }
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
