import React, { PureComponent } from 'react';
import {TouchableOpacity} from 'react-native';

import styles from './ButtonStyle';
class Button extends PureComponent {

    render() {
        let stylesLabel = [styles.coreBotton];
        for (keyStyle in this.props)
        {
            if(this.props[keyStyle] && styles[keyStyle])
                stylesLabel.push(styles[keyStyle]);
        }
        const {style = {}, onPress } = this.props;
        return (
            <TouchableOpacity style={[...stylesLabel, style]} onPress={onPress}>
                {this.props.children}
            </TouchableOpacity>
        )
    }
}

export default Button;