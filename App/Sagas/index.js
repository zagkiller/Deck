import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';
import Constants from '../Config/Constants';

/* ------------- Types ------------- */

import { UserTypes } from '../Redux/UserRedux';
import { RoomTypes } from '../Redux/RoomRedux';

/* ------------- Sagas ------------- */

import {
    authorize,
    signUp,
    logout,
    update,
} from './UserSagas';

import {
    createRoom,
    findRoom,
} from './RoomSagas';

/* ------------- API ------------- */
export const userApi = API.create(Constants.apiBaseUrl + Constants.apiUserUrl);
const roomApi = API.create(Constants.apiBaseUrl + Constants.apiRoomUrl);

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
    yield all([
        // some sagas only receive an action
        takeLatest(UserTypes.AUTH_REQUEST, authorize, userApi),
        takeLatest(UserTypes.REG_REQUEST, signUp, userApi),
        takeLatest(UserTypes.UPDATE_REQUEST, update, userApi),
        takeLatest(UserTypes.LOGOUT_REQUEST, logout, userApi),

        takeLatest(RoomTypes.CREATE_REQUEST, createRoom, roomApi),
        takeLatest(RoomTypes.FIND_REQUEST, findRoom, roomApi),
    ]);
}