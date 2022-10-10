import {createStackNavigator} from '@react-navigation/stack';
import screens from '../screens';
import BottomTab from './BottomTab';
import HeaderLeftButton from '../components/HeaderLeftButton';
import {colors} from '../utils/colors';

const MainStackNav = createStackNavigator();

const MainStack = () => {
  return (
    <MainStackNav.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false}}>
      <MainStackNav.Screen component={BottomTab} name="BottomTab" />
      <MainStackNav.Screen
        component={screens.Service}
        name="Service"
        options={({navigation}) => ({
          headerShown: true,
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderLeftButton
              onPress={navigation.goBack}
              size={32}
              color={colors.black}
            />
          ),
        })}
      />
    </MainStackNav.Navigator>
  );
};

export default MainStack;
