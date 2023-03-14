import {createStackNavigator} from '@react-navigation/stack';

import HeaderLeftButton from '../components/HeaderLeftButton';

import {colors} from '../utils/colors';

import screens from '../screens';

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
              color={colors.white}
              size={32}
              onPress={navigation.goBack}
            />
          ),
        })}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
