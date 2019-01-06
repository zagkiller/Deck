import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore } from 'redux-persist';

// creates the store
export default (rootReducer, rootSaga) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];


    /* ------------- Saga Middleware ------------- */

    const sagaMiddleware = createSagaMiddleware({});
    middleware.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware));

    // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
    const store = createStore(rootReducer, compose(...enhancers));

    persistStore(store);

    // kick off root saga
    const sagasManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagasManager,
        sagaMiddleware,
    };
};
