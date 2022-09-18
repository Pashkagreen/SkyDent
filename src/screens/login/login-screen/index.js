import LoginView from './login-view';
import React, {useEffect, useState} from 'react';
import {useTheme} from 'react-native-paper';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFirstLaunch} from '../../../store/reducers/app/appReducer';

const LoginContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const {colors} = useTheme();

  const textInputChange = val => {
    if (val.trim().length >= 8 && val.trim().includes('@')) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        username: val,
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

  const loginHandle = (userName, password) => {
    const foundUser = [].filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [
        {text: 'Okay'},
      ]);
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid Email!', 'Email or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    // signIn(foundUser);
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
      colors={colors}
      textInputChange={textInputChange}
      handlePasswordChange={handlePasswordChange}
      updateSecureTextEntry={updateSecureTextEntry}
      handleValidEmail={handleValidEmail}
      loginHandle={loginHandle}
      goToSignUp={goToSignUp}
    />
  );
};

export default LoginContainer;
