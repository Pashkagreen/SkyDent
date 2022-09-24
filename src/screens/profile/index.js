import {useDispatch} from 'react-redux';

import ProfileView from './profile-view';

import {cleanUserData} from '../../store/actions/user';

const ProfileContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(cleanUserData());
    navigation.navigate('Onboarding');
  };
  return <ProfileView logOut={logOut} />;
};

export default ProfileContainer;
