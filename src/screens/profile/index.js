import {useDispatch} from 'react-redux';

import {debug} from '../../services';
import AuthService from '../../services/auth';
import {clearUserData} from '../../store/reducers/user';

import ProfileView from './profile-view';

const ProfileContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      await AuthService.logOut();

      dispatch(clearUserData());
      navigation.navigate('Onboarding');
    } catch (error) {
      debug.log('logout error', error);
    }
  };
  return <ProfileView logOut={logOut} />;
};

export default ProfileContainer;
