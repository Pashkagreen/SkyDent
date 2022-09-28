import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import AuthService from '../../../services/auth';
import LoginView from './login-view';
import {setFirstLaunch} from '../../../store/actions/app/index';
import {setUserData} from '../../../store/actions/user';

const LoginContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const refs = {
    inputEmailRef: React.createRef(),
    inputPasswordRef: React.createRef(),
  };

  const signIn = async userData => {
    setLoading(true);
    try {
      const response = await AuthService.signIn(userData);
      console.log('response', response);
      await AuthService.setAccessTokenToStorage(
        response.innerEntity.accessToken,
      );
      await AuthService.setRefreshTokenToStorage(
        response.innerEntity.refreshToken,
      );
      dispatch(setUserData(response.innerEntity.userData));
      setLoading(false);
      navigation.navigate('Main');
    } catch (error) {
      console.log(error);
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
      refs={refs}
      loginHandle={loginHandle}
      secureTextEntry={secureTextEntry}
      updateSecureTextEntry={setSecureTextEntry}
      loading={loading}
    />
  );
};

export default LoginContainer;
