import { createStackNavigator } from 'react-navigation'

import MainScreen from '../Screens/MainScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const MainNavigator = createStackNavigator({
    MainScreen: {screen: MainScreen},
    ProfileScreen: {screen: ProfileScreen},
}, {
    header: null,
    headerMode: 'none',
    navigationOptions: {
        header: null
    }
});

export default MainNavigator;
