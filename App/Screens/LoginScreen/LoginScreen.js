import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Label from "../../Shared/Label";
import Button from "../../Shared/Button";
import ApiTranforms from "../../Transforms/ApiTranforms";

import { connect } from 'react-redux';
import UserActions from "../../Redux/UserRedux";

import styles from './LoginScreenStyle';

class LoginScreen extends Component {

    constructor ( props ) {
        super(props);

        this.state = {
            login: '',
            pass: '',
            name: ''
        }
    }
    _handleAuth = () => {
        this.props.authorize(this.state.login, this.state.pass);
    }

    _handleReg = () => {
        this.props.register(this.state.login, this.state.pass, this.state.name);
    }

    _handleLogout = () => {
        this.props.logout();
    }

    _gotoMain = () => {
        this.props.navigation.navigate('ProfileScreen');
    }

    _renderBody = () => {
        if(this.props.token) {
            return this._renderHelloBlock();
        } else {
            return this._renderAuthBlock();
        }
    };

    _renderHelloBlock = () => {
        return (
            <View style={styles.auth}>
                <Label H2 >Добро пожаловать {this.props.name} </Label>
                <View style={styles.space32}/>
                <Button onPress={this._gotoMain} cloudGrey radius10>
                    <Label>Продолжить =></Label>
                </Button>
                <View style={styles.space32}/>
                <Button onPress={this._handleLogout} radius10>
                    <Label style={{color: '#e4002b'}}>Разлогиниться</Label>
                </Button>
            </View>
        );

    };

    _renderErrorBlock = () => {
        if(this.props.error) {
            let errorText = ApiTranforms.getError(this.props.error);
            if(!errorText) errorText = this.props.error;
            return (
                <View style={styles.error}>
                    <Label style={{color: '#e4002b'}}>{errorText}</Label>
                </View>
            )
        } else {
            return ( <View style={styles.space32}/> );
        }
    };

    _renderAuthBlock = () => {
        return (
            <View style={styles.auth} >
                <Label H3> Авторизуйтесь...</Label>
                <View style={styles.space16}/>
                {this._renderErrorBlock()}
                <Label>Логин: </Label>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(login) => this.setState({login})}
                    value={this.state.login}
                />
                <Label>Пароль: </Label>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(pass) => this.setState({pass})}
                    value={this.state.pass}
                />
                <View style={styles.space16}/>
                <Button onPress={this._handleAuth} cloudGrey radius10>
                    <Label H3 style={{color: '#e4002b'}}>Авторизоваться</Label>
                </Button>
                <View style={styles.space16}/>
                <Label H3>либо зарегистриуйтесь, для этого введите имя или ник</Label>
                <View style={styles.space16}/>
                <Label>Имя: </Label>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <View style={styles.space32}/>
                <Button onPress={this._handleReg} cloudGrey radius10>
                    <Label style={{color: '#e4002b'}}>Зарегистрироваться</Label>
                </Button>
                <View style={styles.space32}/>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container} >
                {this._renderBody()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.user.login,
        pass: state.user.pass,
        name: state.user.name,
        token: state.user.token,
        error: state.user.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authorize: (login, pass) => dispatch(UserActions.authRequest( { login: login, pass: pass } )),
        register: (login, pass, name) => dispatch(UserActions.regRequest({ login: login, pass: pass, name: name })),
        logout: () => dispatch(UserActions.logoutRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
// export default LoginScreen