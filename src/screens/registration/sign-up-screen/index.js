import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import EncryptedStorage from 'react-native-encrypted-storage';

import {debug} from '../../../services';
import RegistrationService from '../../../services/registration';
import {setUserData} from '../../../store/reducers/user';

import SignUpView from './sign-up-view';

const SignUpContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    secureTextEntry: true,
  });
  const [userIntermediateData, setUserIntermediateData] = useState(null);

  const [isBirthInputFocused, setBirthInputFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const refs = {
    inputSecondNameRef: React.createRef(),
    inputFirstNameRef: React.createRef(),
    inputPatronymicRef: React.createRef(),
    scrollRef: React.createRef(),
  };

  const onSubmit = async resultObject => {
    try {
      setLoading(true);
      console.log('resultObject', resultObject);

      const response = await RegistrationService.registration(resultObject);

      setShowSuccessModal(true);

      await EncryptedStorage.setItem(
        'accessToken',
        response.innerEntity.accessToken,
      );
      await EncryptedStorage.setItem(
        'refreshToken',
        response.innerEntity.refreshToken,
      );

      setUserIntermediateData(response.innerEntity.userData);
    } catch (error) {
      console.log('error 21', error);
      debug.log('api-error', error);
    } finally {
      setLoading(false);
    }
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

  const handleModal = () => {
    dispatch(setUserData(userIntermediateData));
    setShowSuccessModal(false);
  };

  return (
    <SignUpView
      activeTab={activeTab}
      data={data}
      handleFirstSubmit={handleFirstSubmit}
      handleModal={handleModal}
      isBirthInputFocused={isBirthInputFocused}
      loading={loading}
      refs={refs}
      setActiveTab={setActiveTab}
      setBirthInputFocused={setBirthInputFocused}
      setShowModal={setShowSuccessModal}
      showModal={showSuccessModal}
      updateSecureTextEntry={updateSecureTextEntry}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpContainer;
