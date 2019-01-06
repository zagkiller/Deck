import { createStore, combineReducers } from 'redux'
import configureStore from './CreateStore';
import rootSaga from '../Sagas';
import {persistReducer} from "redux-persist";
import { AsyncStorage } from 'react-native'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
    user: require('./UserRedux').reducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

export default () => {
    let finalReducers = reducers;

    finalReducers = persistReducer(persistConfig, reducers);

    let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./').reducers;
            store.replaceReducer(nextRootReducer);

            const newYieldedSagas = require('../Sagas').default;
            sagasManager.cancel();
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas)
            });
        });
    }

    return store;
}

