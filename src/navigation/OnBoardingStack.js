import {createStackNavigator} from '@react-navigation/stack';
import screens from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

const OnBoardingStack = createStackNavigator();

const HeaderLeftButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name="chevron-left" size={32} color="white" />
    </TouchableOpacity>
  );
};

const OnBoardingStackScreen = () => (
  <OnBoardingStack.Navigator
    screenOptions={{
      tabBarShowLabel: false,
    }}>
    <OnBoardingStack.Screen
      name="Boarding"
      component={screens.Boarding}
      options={{headerShown: false}}
    />
    <OnBoardingStack.Screen
      name="Login"
      component={screens.Login}
      options={{headerShown: false}}
    />
    <OnBoardingStack.Screen
      name="SignUp"
      component={screens.SignUp}
      options={({navigation}) => ({
        headerShown: true,
        title: '',
        headerTransparent: true,
        headerLeft: () => <HeaderLeftButton onPress={navigation.goBack} />,
      })}
    />
  </OnBoardingStack.Navigator>
);

export default OnBoardingStackScreen;
