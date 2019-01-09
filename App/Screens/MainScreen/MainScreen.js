import React, { Component } from 'react';
import { View, Text  } from 'react-native';

// import UserActions from "~/App/Redux/UserRedux";
// import connect     from "react-redux/es/connect/connect";

import styles from './MainScreenStyle';
import Button from "../../Shared/Button";
import Label from "../../Shared/Label";

class MainScreen extends Component {

    constructor ( props ) {
        super(props);

        this.state = {
            content: '',
            focus: ''
        }
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
                <View style={styles.buttons}>
                    <Button onPress={this._gotoLogin} cloudGrey radius10>
                        <Label>Cоздать игру</Label>
                    </Button>
                    <Button onPress={this._gotoLogin} cloudGrey radius10>
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

//
// const mapStateToProps = (state) => {
//     return {
//         fetching: state.user.fetching,
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         verify: (phone) => dispatch(UserActions.verifyRequest({ phone: phone })),
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
export default MainScreen