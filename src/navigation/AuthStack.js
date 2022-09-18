import {createStackNavigator} from '@react-navigation/stack';
import screens from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

const AuthStack = createStackNavigator();

const HeaderLeftButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name="chevron-left" size={32} color="white" />
    </TouchableOpacity>
  );
};

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={screens.Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignUp"
        component={screens.SignUp}
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
