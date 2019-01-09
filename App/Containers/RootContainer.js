import React, { Component } from 'react';
import { View, Text } from 'react-native';

import NavigationService from '../Navigation/NavigationService';
import AppNavigation from '../Navigation/AppNavigation'
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {

    render () {
        return (
            <View style={styles.container}>
                <AppNavigation
                    ref={(navigatorRef) => { NavigationService.setTopLevelNavigator(navigatorRef); }}
                    persistenceKey={"navigation"}
                />
            </View>
        )
    }
}

export default RootContainer
