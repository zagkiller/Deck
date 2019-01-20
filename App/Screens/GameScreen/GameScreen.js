import React, { Component } from 'react';
import {View, Text, TextInput, Image} from 'react-native';

import UserActions from "../../Redux/UserRedux";
import { connect } from 'react-redux';

import styles from './GameScreenStyle';
import Button from "../../Shared/Button";
import Label from "../../Shared/Label";

class GameScreen extends Component {

    constructor ( props ) {
        super(props);

        this.state = {
            name: this.props.name,
            avatar: this.props.avatar,
        }
    }

    _saveProfile = () => {
        this.props.updateProfile(this.state.name, this.state.avatar);
    }

    _clearProfile = () => {
        this.props.navigation.navigate('MainScreen');
    }

    _renderAvatar = () => {
        if(this.state.avatar) {
            return (<Image
                style={styles.avatar}
                source={{uri: this.state.avatar}}
            />);
        }

    }
    _renderImageStatus = (field) => {
        if(this.state[field] == this.props[field]) {
            return <Label H2 style={[styles.galka, {color: '#0f0'}]}> ✓ </Label>
        } else {
            return <Label H2 style={[styles.galka, {color: '#ccc'}]}> ✓ </Label>
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Label H2 >Личный кабинет1111: </Label>
                    <View style={{margin: 16}}>
                        {this._renderAvatar()}
                        <Label>Имя: </Label>
                        <View style={styles.inputView}>
                            <TextInput
                                style={{height: 40, paddingLeft: 16, borderRadius: 10, borderColor: 'gray', borderWidth: 1, width: '75%'}}
                                onChangeText={(name) => this.setState({name})}
                                value={this.state.name}
                            />
                            {this._renderImageStatus('name')}
                        </View>
                        <Label>Аватарка: </Label>
                        <View style={styles.inputView}>
                            <TextInput
                                style={{height: 40, paddingLeft: 16, borderRadius: 10, borderColor: 'gray', borderWidth: 1, width: '75%'}}
                                onChangeText={(avatar) => this.setState({avatar})}
                                value={this.state.avatar}
                            />
                            {this._renderImageStatus('avatar')}
                        </View>
                        <Button onPress={this._saveProfile} radius10 style={{margin: 32}}>
                            <Label style={{color: '#e4002b'}}>Сохранить</Label>
                        </Button>
                    </View>
                    <Button onPress={this._clearProfile} radius10 style={{marginBottom: 32}}>
                        <Label style={{color: '#e4002b'}}>Назад</Label>
                    </Button>
                </View>

            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        avatar: state.user.avatar,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (name, avatar) => dispatch(UserActions.updateRequest( { name: name, avatar: avatar } )),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
 // export default ProfileScreen