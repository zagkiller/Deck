import { put, call, select } from 'redux-saga/effects';

import UserActions, {getToken} from '../Redux/UserRedux';

export function* authorize (api, { login, pass }) {
    const loginResponse = yield call(api.userLogin, {
        login,
        pass,
    });

    if (loginResponse.ok && loginResponse.data) {
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

    if (loginResponse.ok && loginResponse.data) {
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

export function* update(api, { name, avatar }) {
    const token = yield select(getToken);
    const loginResponse = yield call(api.userUpdate, {
        token,
        name
    });

    if (loginResponse.ok && loginResponse.data) {
        const res = loginResponse.data;
        res.avatar = avatar;
        if (res.error) {
            yield put(UserActions.updateFailure(res));
        } else {
            yield put(UserActions.updateSuccess({value: res}));
        }
    } else {
        yield put(UserActions.updateFailure({error: 'Изменить данные не удалось, попробуйте позже'}));
    }
}

export function* logout(api) {
    console.log('logout');
    try {
    const token = yield select(getToken);
    const loginResponse = yield call(api.userLogout, {
        token,
    });

    if (loginResponse.ok && loginResponse.data) {
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