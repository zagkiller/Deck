import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';

import UserActions from "../../Redux/UserRedux";
import { connect } from 'react-redux';

import styles from './ProfileScreenStyle';
import Button from "../../Shared/Button";
import Label from "../../Shared/Label";

class ProfileScreen extends Component {

    constructor ( props ) {
        super(props);

        this.state = {
            name: this.props.name,
        }
    }

    _saveProfile = () => {
        this.props.updateProfile(this.state.name);
    }

    _clearProfile = () => {
        this.props.navigation.navigate('LoginScreen');
    }

    _renderImageStatus = () => {
        if(this.state.name == this.props.name) {
            return <Label H2 style={[styles.galka, {color: '#f00'}]}> ✓ </Label>
        } else {
            return <Label H2 style={[styles.galka, {color: '#ccc'}]}> ✓ </Label>
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Label H2 >Личный кабинет: </Label>
                    <View style={{margin: 16}}>
                        <Label>Имя: </Label>
                        <View style={styles.inputView}>
                            <TextInput
                                style={{height: 40, paddingLeft: 16, borderRadius: 10, borderColor: 'gray', borderWidth: 1, width: '75%'}}
                                onChangeText={(name) => this.setState({name})}
                                value={this.state.name}
                            />
                            {this._renderImageStatus()}
                        </View>
                        <Button onPress={this._saveProfile} radius10 style={{margin: 32}}>
                            <Label style={{color: '#e4002b'}}>Сохранить</Label>
                        </Button>
                    </View>
                    <Button onPress={this._clearProfile} radius10 style={{marginBottom: 32}}>
                        <Label style={{color: '#e4002b'}}>Отменить</Label>
                    </Button>
                </View>

            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        name: state.user.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (name) => dispatch(UserActions.updateRequest( { name: name } )),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
 // export default ProfileScreen