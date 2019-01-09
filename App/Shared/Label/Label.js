import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import styles from './LabelStyle';
class Label extends PureComponent {

    render() {
        let stylesLabel = [];
        for (keyStyle in this.props)
        {
            if(this.props[keyStyle] && styles[keyStyle])
                stylesLabel.push(styles[keyStyle]);
        }
        if(stylesLabel.length == 0) {
            stylesLabel.push(styles.normal);
        }
        const {style = {}, noWrap } = this.props;
        if (noWrap) {
            return (
                <Text style={[...stylesLabel, style, {flexWrap: 'nowrap'}]} numberOfLines = { 1 }>{this.props.children}</Text>
            )
        } else {
            return (
                <Text style={[...stylesLabel, style]}>{this.props.children}</Text>
            )
        }

    }
}

export default Label;