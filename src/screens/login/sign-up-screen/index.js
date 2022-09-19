import SignUpView from './sign-up-view';
import React, {useState} from 'react';

const SignUpContainer = ({navigation}) => {

  const [data, setData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobilePhone: '',
    birthDate: '',
    email: '',
    gender: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const [isBirthInputFocused, setBirthInputFocused] = useState(false);

  const refs = {
    inputSecondNameRef: React.createRef(),
    inputFirstNameRef: React.createRef(),
    inputPatronymicRef: React.createRef(),
    scrollRef: React.createRef(),
  };

  const onSubmit = data => {
    console.log(data);
  };

  const textInputChange = val => {
    if (val.length >= 3) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <SignUpView
      data={data}
      onSubmit={onSubmit}
      refs={refs}
      isBirthInputFocused={isBirthInputFocused}
      setBirthInputFocused={setBirthInputFocused}
      textInputChange={textInputChange}
      handlePasswordChange={handlePasswordChange}
      handleConfirmPasswordChange={handleConfirmPasswordChange}
      updateSecureTextEntry={updateSecureTextEntry}
      updateConfirmSecureTextEntry={updateConfirmSecureTextEntry}
    />
  );
};

export default SignUpContainer;
