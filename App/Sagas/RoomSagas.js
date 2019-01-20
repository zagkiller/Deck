import { put, call, select } from 'redux-saga/effects';

import RoomActions from '../Redux/RoomRedux';
import {getToken} from '../Redux/UserRedux';

import NavigationService from '../Navigation/NavigationService';

export function* createRoom (api, { name }) {
    const token = yield select(getToken);

    const response = yield call(api.roomCreate, {
        token,
        name,
    });
    if (response.ok && response.data) {
        const res = response.data;
        if(res.error) {

            yield put(RoomActions.createFailure(res));
        } else {
            yield put(RoomActions.createSuccess({value: res}));
            NavigationService.navigate('GameScreen');
        }
    } else {
        yield put(RoomActions.createFailure({ res }));
    }
}

export function* findRoom (api, { name }) {
    const token = yield select(getToken);

    const response = yield call(api.roomFind, {
        token,
        name,
    });
    if (response.ok && response.data) {
        console.log(response.data);
        const res = response.data;
        if(res.error) {

            yield put(RoomActions.findFailure(res));
        } else {
            yield put(RoomActions.findSuccess({value: res}));
        }
    } else {
        yield put(RoomActions.findFailure({ res }));
    }
}

