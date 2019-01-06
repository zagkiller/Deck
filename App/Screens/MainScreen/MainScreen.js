import React, { Component } from 'react';
import { View, Text  } from 'react-native';

// import UserActions from "~/App/Redux/UserRedux";
// import connect     from "react-redux/es/connect/connect";

import styles from './MainScreenStyle';

class MainScreen extends Component {

    constructor ( props ) {
        super(props);

        this.state = {
            content: '',
            focus: ''
        }
    }

    // _handlePressMenu = () => {
    //     this.props.navigation.navigate('MenuScreen');
    // };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>ДобXXXX!</Text>
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