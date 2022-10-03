import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import AuthService from '../../../services/auth';
import RegistrationService from '../../../services/registration';

import SignUpView from './sign-up-view';

import {setUserData} from '../../../store/actions/user/index';

const SignUpContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    secureTextEntry: true,
  });

  const [isBirthInputFocused, setBirthInputFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const refs = {
    inputSecondNameRef: React.createRef(),
    inputFirstNameRef: React.createRef(),
    inputPatronymicRef: React.createRef(),
    scrollRef: React.createRef(),
  };

  const onSubmit = async resultObject => {
    setLoading(true);
    const response = await RegistrationService.registration(resultObject);
    console.log(response);
    await AuthService.setAccessTokenToStorage(response.innerEntity.accessToken);
    await AuthService.setRefreshTokenToStorage(
      response.innerEntity.refreshToken,
    );
    dispatch(setUserData(response.innerEntity.userData));
    setLoading(false);
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleFirstSubmit = () => {
    setActiveTab(2);
  };

  return (
    <SignUpView
      data={data}
      isBirthInputFocused={isBirthInputFocused}
      refs={refs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      setBirthInputFocused={setBirthInputFocused}
      updateSecureTextEntry={updateSecureTextEntry}
      handleFirstSubmit={handleFirstSubmit}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default SignUpContainer;
