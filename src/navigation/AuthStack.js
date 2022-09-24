import {TouchableOpacity} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import screens from '../screens';

const HeaderLeftButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons color="white" name="chevron-left" size={32} />
    </TouchableOpacity>
  );
};

const AuthStackScreen = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        component={screens.Login}
        name="Login"
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        component={screens.SignUp}
        name="SignUp"
        options={({navigation}) => ({
          headerShown: true,
          title: '',
          headerTransparent: true,
          headerLeft: () => <HeaderLeftButton onPress={navigation.goBack} />,
        })}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
