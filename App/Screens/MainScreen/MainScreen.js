import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';

import RoomActions, {clearRoomStateRequest} from "../../Redux/RoomRedux";
import { connect } from 'react-redux';

import styles from './MainScreenStyle';
import Button from "../../Shared/Button";
import Label from "../../Shared/Label";
import DialogBlock from "../../Shared/DialogBlock/DialogBlock";

class MainScreen extends Component {

    constructor ( props ) {
        super(props);

        this.state = {
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
        console.log('CLOSE');
        this.props.clearRoom();
    }

    _createRoom = () => {
        this.props.createRoom(this.state.name);
        this.setState({
            showCreateRoom: false,
            showFindRoom: false,
            isFoundRoom: false,
        });
    }

    _findRoom = () => {
        this.props.findRoom(this.state.name);
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
                    onPress={this._createRoom}
                    onChange={this._onChangeText}

                />
            );
        }
        if(this.state.showFindRoom && !this.props.id_room) {
            return(
                <DialogBlock
                    title={'Посик комнаты'}
                    error={this.props.error}
                    buttonOkText={'Найти'}
                    onClose={this._close}
                    onPress={this._findRoom}
                    onChange={this._onChangeText}

                />
            );
        }
        if(this.state.showFindRoom && this.props.id_room) {
            return(
                <DialogBlock
                    title={'Комната найдена!'}
                    error={'Автор: '+this.props.owner_name}
                    buttonOkText={'Присоединится'}
                    onClose={this._close}
                    onPress={this._enterRoom}
                    withoutInput={true}
                />
            );
        }

    }

    _gotoLogin = () => {
        this.props.navigation.navigate('LoginScreen');
    }

    _enterRoom = () => {
        this.props.navigation.navigate('GameScreen');
        this.setState({
            showCreateRoom: false,
            showFindRoom: false,
            isFoundRoom: false,
        });
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
                    <Button onPress={() => this.setState({showFindRoom: true})} cloudGrey radius10>
                        <Label>Найти игру</Label>
                    </Button>
                    <Button onPress={this._gotoProfile} cloudGrey radius10>
                        <Label>Личный кабинет</Label>
                    </Button>
                    <Button onPress={this._gotoLogin} cloudGrey radius10>
                        <Label>Назад</Label>
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
        clearRoom: () => dispatch(RoomActions.clearRequest({})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
// export default MainScreen