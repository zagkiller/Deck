import { createStackNavigator } from 'react-navigation'

import MainScreen from '../Screens/MainScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import GameScreen from '../Screens/GameScreen';

const MainNavigator = createStackNavigator({
    MainScreen: {screen: MainScreen},
    ProfileScreen: {screen: ProfileScreen},
    GameScreen: {screen: GameScreen},
}, {
    header: null,
    headerMode: 'none',
    navigationOptions: {
        header: null
    }
});

export default MainNavigator;
