import SignUpView from './sign-up-view';
import {useState} from 'react';

const SignUpContainer = ({navigation}) => {

  const [data, setData] = useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
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
      textInputChange={textInputChange}
      handlePasswordChange={handlePasswordChange}
      handleConfirmPasswordChange={handleConfirmPasswordChange}
      updateSecureTextEntry={updateSecureTextEntry}
      updateConfirmSecureTextEntry={updateConfirmSecureTextEntry}
    />
  );
};

export default SignUpContainer;
