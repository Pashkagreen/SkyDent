import {useDispatch} from 'react-redux';
import {cleanUserData} from '../../store/actions/user';
import ProfileView from './profile-view';

const ProfileContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(cleanUserData());
    navigation.navigate('Onboarding');
  };
  return <ProfileView logOut={logOut} />;
};

export default ProfileContainer;
