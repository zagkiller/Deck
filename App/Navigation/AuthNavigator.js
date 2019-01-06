import { createStackNavigator } from 'react-navigation'

import LoginScreen from '../Screens/LoginScreen';
import MainScreen from '../Screens/MainScreen';


const AuthNavigator = createStackNavigator({
    LoginScreen: {screen: LoginScreen},
    MainScreen: {screen: MainScreen}
},{
    navigationOptions: {
        header: null
    }
});

export default AuthNavigator;
