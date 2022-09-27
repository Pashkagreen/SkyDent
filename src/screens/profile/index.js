import {useDispatch} from 'react-redux';

import ProfileView from './profile-view';

import {cleanUserData} from '../../store/actions/user';
import AuthService from '../../services/auth';

const ProfileContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const logOut = async () => {
    dispatch(cleanUserData());
    await AuthService.removeAccessTokenFromStorage();
    await AuthService.removeRefreshTokenFromStorage();
    navigation.navigate('Onboarding');
  };
  return <ProfileView logOut={logOut} />;
};

export default ProfileContainer;
