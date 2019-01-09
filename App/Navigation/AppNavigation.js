import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';


export default createAppContainer( createSwitchNavigator(
{
    Auth: AuthNavigator,
    Main: MainNavigator,
}, {
    initialRouteName: 'Auth',
}));

