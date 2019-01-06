import { put, call, select } from 'redux-saga/effects';

import UserActions, {getToken} from '../Redux/UserRedux';

import NavigationService from '../Navigation/NavigationService';
import Constants from "../Config/Constants";

export function* authorize (api, { login, pass }) {
    const loginResponse = yield call(api.userLogin, {
        login,
        pass,
    });

    if (loginResponse.ok) {
        const res = loginResponse.data;
        if(res.error) {
            yield put(UserActions.authFailure(res));
        } else {
            yield put(UserActions.authSuccess({value: res}));
        }
    } else {
        yield put(UserActions.authFailure({ error: 'Авторизация не удалась, попробуйте повторить позже' }));
    }
}

export function* signUp(api, { login, pass, name }) {
    const loginResponse = yield call(api.userSignUp, {
        login,
        pass,
        name
    });

    if (loginResponse.ok) {
        const res = loginResponse.data;
        if (res.error) {
            yield put(UserActions.regFailure(res));
        } else {
            yield put(UserActions.regSuccess({value: res}));
        }
    } else {
        yield put(UserActions.regFailure({error: 'Регистрация не удалась, попробуйте повторить позже'}));
    }
}

export function* logout(api) {
    console.log('logout');
    try {
    const token = yield select(getToken);
    const loginResponse = yield call(api.userLogout, {
        token,
    });

    if (loginResponse.ok) {
        const res = loginResponse.data;
        if (res.error) {
            yield put(UserActions.logoutFailure(res));
        } else {
            yield put(UserActions.logoutSuccess({value: res}));
        }
    } else {
        yield put(UserActions.logoutFailure({error: 'logout не удался, попробуйте повторить позже'}));
    }
    } catch (e) {
        console.log(e);
    }
}

export function* fake(api, { login, pass }) {
    console.log('fakeSaga', login, pass);
    const loginResponse = yield call(api.fake, {
        login,
        pass,
    });

    if (loginResponse.ok) {
        const res = loginResponse.data;
        console.log( res.error, 'eee' );
        if(res.error) {
            yield put(UserActions.authauthFailure(res.error));
        } else {
            yield put(UserActions.authSuccess(res));
        }
        // try {
        //     yield put(UserActions.authSuccess(res));
        // } catch (e) {
        //     console.log(e);
        // }
    }
}