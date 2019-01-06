import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../Screens/LoginScreen';
import MainScreen from '../Screens/MainScreen';


const AppStack = createStackNavigator(
    {
        Main: MainScreen
    } ,{
        navigationOptions: {
            header: null
        }
    });
const AuthStack = createStackNavigator(
    {
        SignIn: LoginScreen
    } ,{
        navigationOptions: {
            header: null
        }
    });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: LoginScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));


