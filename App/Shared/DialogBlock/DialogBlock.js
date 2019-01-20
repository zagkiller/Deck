import React, { PureComponent } from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

import styles from './DialogBlockStyle';
import Label from "../Label";
import Button from "../Button";

class DialogBlock extends PureComponent {


    _renderTextInput = () => {
        return(
            <View style={styles.inputBlock}>
                <TextInput
                    style={{
                        height: 40,
                        paddingLeft: 16,
                        borderRadius: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: '75%'
                    }}
                    onChangeText={(name) => this.props.onChange(name)}
                    value={this.props.name}
                />
            </View>
        );
    }

    _renderError = () => {
        return(
            <View style={styles.errorBlock}>
                <Label error>{this.props.error}</Label>
            </View>
        );
    }

    _renderButtons = () => {
        return(
            <View style={styles.buttonBlock}>
                <Button onPress={this.props.onPress} cloudGrey radius10>
                    <Label>{this.props.buttonOkText}</Label>
                </Button>
                <Button onPress={this.props.onClose} cloudGrey radius10>
                    <Label>Отмена</Label>
                </Button>
            </View>
        );
    }

    _renderBlocks = () => {
        return(
            <View>
                {this._renderTextInput()}
                {this._renderError()}
                {this._renderButtons()}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.backLayer}>
            <View style={styles.backgroundLayer} />
                <View style={styles.topLevel}>
                    <View style={styles.titleBlock}>
                        <Label H3>{this.props.title}</Label>
                    </View>
                    {this._renderBlocks()}
                </View>
            </View>
        )
    }
}

export default DialogBlock;