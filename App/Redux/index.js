import { createStore, combineReducers } from 'redux'
import configureStore from './CreateStore';
import rootSaga from '../Sagas';
import {persistReducer} from "redux-persist";
import { AsyncStorage } from 'react-native'
import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
    user: require('./UserRedux').reducer,
    room: require('./RoomRedux').reducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    transforms: [immutablePersistenceTransform]
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

