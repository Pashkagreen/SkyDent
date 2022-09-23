import SignUpView from './sign-up-view';
import React, {useState} from 'react';
import {EMAIL_REGEX} from '../../../utils/func';
import RegistrationService from '../../../services/registration';
import {HTTP_STATUS} from '../../../services/config';
import AuthService from '../../../services/auth';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../../store/actions/user/index';

const SignUpContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobilePhone: '',
    birthDate: '',
    email: '',
    gender: '',
    password: '',
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isFirstNameValid: false,
    isMiddleNameValid: false,
    isLastNameValid: false,
    isEmailValid: false,
    isMobilePhoneValid: false,
    isPasswordValid: false,
  });

  const [isBirthInputFocused, setBirthInputFocused] = useState(false);

  let areAllValuesValid = false;

  const refs = {
    inputSecondNameRef: React.createRef(),
    inputFirstNameRef: React.createRef(),
    inputPatronymicRef: React.createRef(),
    scrollRef: React.createRef(),
  };

  const onSubmit = async () => {
    const resultObject = {};
    resultObject.firstname = data.firstName;
    resultObject.patronymic = data.middleName;
    resultObject.lastname = data.lastName;
    resultObject.phoneNumber = data.mobilePhone;
    resultObject.birthDate = data.birthDate.slice(0, 10);
    resultObject.email = data.email;
    resultObject.gender = data.gender;
    resultObject.password = data.password;

    const response = await RegistrationService.registration(resultObject);
    console.log(response);
    await AuthService.setAccessTokenToStorage(response.innerEntity.accessToken);
    await AuthService.setRefreshTokenToStorage(
      response.innerEntity.refreshToken,
    );
    dispatch(setUserData(response.innerEntity.userData));
  };

  const firstNameInputChange = val => {
    if (val.match(/^[a-zA-Z ]{2,30}$/)) {
      setData({
        ...data,
        firstName: val,
        isFirstNameValid: true,
      });
    } else {
      setData({
        ...data,
        firstName: val,
        isFirstNameValid: false,
      });
    }
  };

  const middleNameInputChange = val => {
    if (val.match(/^[a-zA-Z ]{2,30}$/)) {
      setData({
        ...data,
        middleName: val,
        isMiddleNameValid: true,
      });
    } else {
      setData({
        ...data,
        middleName: val,
        isMiddleNameValid: false,
      });
    }
  };

  const lastNameInputChange = val => {
    if (val.match(/^[a-zA-Z ]{2,30}$/)) {
      setData({
        ...data,
        lastName: val,
        isLastNameValid: true,
      });
    } else {
      setData({
        ...data,
        lastName: val,
        isLastNameValid: false,
      });
    }
  };

  const genderValueChange = gender => {
    setData({
      ...data,
      gender: gender,
    });
  };

  const mobilePhoneChange = phone => {
    if (phone.length === 12) {
      setData({
        ...data,
        mobilePhone: '+' + phone,
        isMobilePhoneValid: true,
      });
    }
  };

  const handleEmailValid = val => {
    if (val.match(EMAIL_REGEX)) {
      setData({
        ...data,
        email: val,
        isEmailValid: true,
      });
    } else {
      setData({
        ...data,
        isEmailValid: false,
      });
    }
  };

  const birthDateChange = birthDate => {
    setData({
      ...data,
      birthDate: birthDate,
    });
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <SignUpView
      data={data}
      onSubmit={onSubmit}
      refs={refs}
      isBirthInputFocused={isBirthInputFocused}
      setBirthInputFocused={setBirthInputFocused}
      firstNameInputChange={firstNameInputChange}
      middleNameInputChange={middleNameInputChange}
      lastNameInputChange={lastNameInputChange}
      genderValueChange={genderValueChange}
      mobilePhoneChange={mobilePhoneChange}
      birthDateChange={birthDateChange}
      handlePasswordChange={handlePasswordChange}
      updateSecureTextEntry={updateSecureTextEntry}
      handleValidEmail={handleEmailValid}
    />
  );
};

export default SignUpContainer;
