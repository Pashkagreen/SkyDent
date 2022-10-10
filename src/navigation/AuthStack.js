import {createStackNavigator} from '@react-navigation/stack';
import HeaderLeftButton from '../components/HeaderLeftButton';
import screens from '../screens';
import {colors} from '../utils/colors';

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
          headerLeft: () => (
            <HeaderLeftButton
              onPress={navigation.goBack}
              size={32}
              color={colors.white}
            />
          ),
        })}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
