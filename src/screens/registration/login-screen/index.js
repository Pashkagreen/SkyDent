import React, {useEffect, useState} from 'react';
import {Alert, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';

import {Controller, FormProvider, useForm} from 'react-hook-form';
import EncryptedStorage from 'react-native-encrypted-storage';

import AuthService from '../../../services/auth';
import {setFirstLaunch} from '../../../store/reducers/app';
import {setUserData} from '../../../store/reducers/user';

import LoginView from './login-view';

const LoginContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const {control, errors, handleSubmit, formState} = useForm({
    mode: 'onChange',
  });

  const refs = {
    inputEmailRef: React.createRef(),
    inputPasswordRef: React.createRef(),
  };

  useEffect(() => {
    dispatch(setFirstLaunch());
  }, []);

  const signIn = async userData => {
    try {
      setLoading(true);
      Keyboard.dismiss();
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
      if (error.status === 400) {
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

  return (
    <LoginView
      control={control}
      errors={errors}
      formState={formState}
      goToSignUp={goToSignUp}
      handleSubmit={handleSubmit}
      loading={loading}
      loginHandle={loginHandle}
      refs={refs}
      secureTextEntry={secureTextEntry}
      updateSecureTextEntry={setSecureTextEntry}
    />
  );
};

export default LoginContainer;
