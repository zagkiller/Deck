import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import { View, Text  } from 'react-native';

const store = createStore();

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        )
    }
}

export default App
