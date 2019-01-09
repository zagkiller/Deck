import { createStackNavigator } from 'react-navigation'

import LoginScreen from '../Screens/LoginScreen';

const AuthNavigator = createStackNavigator({
    LoginScreen: {screen: LoginScreen},
}, {
    header: null,
    headerMode: 'none',
    navigationOptions: {
        header: null
    }
});

export default AuthNavigator;
