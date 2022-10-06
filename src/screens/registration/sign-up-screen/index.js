import React, {useState} from 'react';
import {Alert} from 'react-native';
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
      if (error.status === 403) {
        Alert.alert(
          'Error!',
          `${error.message} Please try again.`,
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
