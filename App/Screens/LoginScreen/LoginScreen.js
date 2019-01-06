import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import UserActions from "../../Redux/UserRedux";
// import { userApi } from '../../Sagas';

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
        // const login = this.state.login ? this.state.login : null;
        // const pass = this.state.pass ? this.state.pass : null;
        this.props.authorize(this.state.login, this.state.pass);
    }

    _handleReg = () => {
        this.props.register(this.state.login, this.state.pass, this.state.name);
    }

    _handleLogout = () => {
        this.props.logout();
    }

    _gotoMain = () => {
        this.props.navigation.navigate('MainScreen');
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
                <Text>Добро пожаловать {this.props.name} </Text>
                <TouchableOpacity onPress={this._gotoMain}>
                    <Text>Продолжить =></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._handleLogout}>
                    <Text>Разлогиниться</Text>
                </TouchableOpacity>
            </View>
        );
    };

    _renderAuthBlock = () => {
        return (
            <View style={styles.auth} >
                <Text>Авторизуйтесь...</Text>
                <Text>Логин: </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(login) => this.setState({login})}
                    value={this.state.login}
                />
                <Text>Пароль: </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(pass) => this.setState({pass})}
                    value={this.state.pass}
                />
                <TouchableOpacity onPress={this._handleAuth}>
                    <Text>Авторизоваться</Text>
                </TouchableOpacity>
                <Text>либо зарегистриуйтесь, для этого введите имя или ник</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <TouchableOpacity onPress={this._handleReg}>
                    <Text>Зарегистрироваться</Text>
                </TouchableOpacity>
                <Text>{this.props.name} Au {this.props.pass} th {this.props.login} gth {this.props.token} gth {this.props.error}</Text>
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
    console.log('mapStateToProps', state.user);
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