import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';

import RoomActions from "../../Redux/RoomRedux";
import { connect } from 'react-redux';

import styles from './MainScreenStyle';
import Button from "../../Shared/Button";
import Label from "../../Shared/Label";
import DialogBlock from "../../Shared/DialogBlock/DialogBlock";

class MainScreen extends Component {

    constructor ( props ) {
        super(props);

        this.state = {
            error: props.error,
            name: props.name,
            showCreateRoom: false,
            showFindRoom: false,
            isFoundRoom: false,
        }
    }

    _close = () => {
        this.setState({
            showCreateRoom: false,
            showFindRoom: false,
            isFoundRoom: false,
        });
    }

    _createRoom = () => {
        this.props.createRoom(this.state.name);
    }

    _findRoom = () => {
        this.props.findRoom(this.state.name);
        this.setState({
            isFoundRoom: true,
            showFindRoom: false,
        });
    }

    _gotoRoom = () => {
        this.props.createRoom(this.state.name);
    }

    _onChangeText = (name) => {
        this.setState({name});
    }

    _renderDialog = () => {
        if(this.state.showCreateRoom) {
            return(
                <DialogBlock
                    title={'Создание комнаты'}
                    error={this.props.error}
                    buttonOkText={'Создать'}
                    onClose={this._close}
                    onPress={this._gotoRoom}
                    onChange={this._onChangeText}

                />
            );
        }
    }


    _renderCreateGame = () => {
        if(this.state.showCreateRoom) {
            if(this.props.error === 'your_room_exists'){
                return (
                    <View style={styles.backLayer}>
                        <View style={styles.layer}>
                        </View>
                        <View style={styles.inputBlock}>
                            <Label error style={{height: 50, marginTop: 8}}>{'Такая игра уже вами создана, хотите присоединится?'}</Label>
                            <View style={styles.buttonBlock}>
                                <Button onPress={this._gotoRoom} cloudGrey radius10>
                                    <Label>Присоединится</Label>
                                </Button>
                                <Button onPress={this._close} cloudGrey radius10>
                                    <Label>Отмена</Label>
                                </Button>
                            </View>
                        </View>
                    </View>
                );
            }
            return (
                <View style={styles.backLayer}>
                    <View style={styles.layer}>
                    </View>
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
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                        />
                        <Label error style={{height: 50, marginTop: 8}}>{this.props.error}</Label>
                        <View style={styles.buttonBlock}>
                            <Button onPress={this._createRoom} cloudGrey radius10>
                                <Label>Cоздать</Label>
                            </Button>
                            <Button onPress={this._close} cloudGrey radius10>
                                <Label>Отмена</Label>
                            </Button>
                        </View>
                    </View>
                </View>
            );
        }
        return null;
    }

    _renderFindGame = () => {
        if(this.state.showFindRoom) {
            return (
                <View style={styles.backLayer}>
                    <View style={styles.layer}>
                    </View>
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
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                        />
                        <Label error style={{height: 50, marginTop: 8}}>{'?'}</Label>
                        <View style={styles.buttonBlock}>
                            <Button onPress={this._findRoom} cloudGrey radius10>
                                <Label>Найти</Label>
                            </Button>
                            <Button onPress={this._close} cloudGrey radius10>
                                <Label>Отмена</Label>
                            </Button>
                        </View>
                    </View>
                </View>
            );
        }
        return null;
    }

    _renderFound = () => {
        if(this.state.isFoundRoom) {
            return (
                <View style={styles.backLayer}>
                    <View style={styles.layer}>
                    </View>
                    <View style={styles.inputBlock}>
                        <Label style={{marginTop: 8}}>{'Игра найдена'}</Label>
                        <Label style={{marginTop: 8}}>{'Автор: ' + this.props.name + ' Название: ' + this.props.owner_name}</Label>
                        <View style={styles.buttonBlock}>
                            <Button onPress={this._findRoom} cloudGrey radius10>
                                <Label>Найти</Label>
                            </Button>
                            <Button onPress={this._close} cloudGrey radius10>
                                <Label>Отмена</Label>
                            </Button>
                        </View>
                    </View>
                </View>
            );
        }
        return null;
    }

    _gotoLogin = () => {
        this.props.navigation.navigate('LoginScreen');
    }

    _gotoProfile = () => {
        this.props.navigation.navigate('ProfileScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                { this._renderDialog() }
                <View style={styles.buttons}>
                    <Button onPress={() => this.setState({showCreateRoom: true})} cloudGrey radius10>
                        <Label>Cоздать игру</Label>
                    </Button>

                    {/*{ this._renderFindGame() }*/}
                    {/*{ this._renderFound() }*/}
                    <Button onPress={() => this.setState({showFindRoom: true})} cloudGrey radius10>
                        <Label>Присоединится</Label>
                    </Button>
                    <Button onPress={this._gotoLogin} cloudGrey radius10>
                        <Label>Найти игру</Label>
                    </Button>
                    <Button onPress={this._gotoProfile} cloudGrey radius10>
                        <Label>Личный кабинет</Label>
                    </Button>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.user.token,
        name: state.room.name,
        owner_name: state.room.owner_name,
        error: state.room.error,
        id_room: state.room.id_room,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRoom: (name) => dispatch(RoomActions.createRequest({ name: name })),
        findRoom: (name) => dispatch(RoomActions.findRequest({ name: name })),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
// export default MainScreen