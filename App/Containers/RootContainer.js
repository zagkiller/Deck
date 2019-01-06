import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AppNavigation from '../Navigation/AppNavigation'
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {

    render () {
        return (
            <View style={styles.container}>
                <AppNavigation />
            </View>
        )
    }
}

export default RootContainer
