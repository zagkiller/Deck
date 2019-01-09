import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';
import Constants from '../Config/Constants';

/* ------------- Types ------------- */

import { UserTypes } from '../Redux/UserRedux';

/* ------------- Sagas ------------- */

import {
    authorize,
    signUp,
    logout,
    update,
    fake
} from './UserSagas';

/* ------------- API ------------- */
export const userApi = API.create(Constants.apiBaseUrl + Constants.apiUserUrl);
/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
    yield all([
        // some sagas only receive an action
        takeLatest(UserTypes.AUTH_REQUEST, authorize, userApi),
        takeLatest(UserTypes.REG_REQUEST, signUp, userApi),
        takeLatest(UserTypes.UPDATE_REQUEST, update, userApi),
        takeLatest(UserTypes.LOGOUT_REQUEST, logout, userApi),
    ]);
}