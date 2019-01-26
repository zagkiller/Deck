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

    _renderImageStatus = (field) => {
        if(this.state[field] == this.props[field]) {
            return <Label H2 style={[styles.galka, {color: '#0f0'}]}> ✓ </Label>
        } else {
            return <Label H2 style={[styles.galka, {color: '#ccc'}]}> ✓ </Label>
        }
    }

    render() {
        const { room, userName } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Label H2 >Комната {room.name} ({room.id_room})</Label>

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
        userName: state.user.name,
        avatar: state.user.avatar,
        room: state.room,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (name, avatar) => dispatch(UserActions.updateRequest( { name: name, avatar: avatar } )),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
