import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({

    authRequest: { login : '', pass: ''  },
    authSuccess: { value: {} },
    authFailure: { error: '' },

    regRequest: { login : '', pass: '', name: '' },
    regSuccess: { value: {} },
    regFailure: { error: '' },

    updateRequest: { name: '' },
    updateSuccess: { value: {} },
    updateFailure: { error: '' },

    logoutRequest: { },
    logoutSuccess: { },
    logoutFailure: { error: '' },
});

export const UserTypes = Types;
export default Creators;

// the initial state of this reducer
export const INITIAL_STATE = Immutable({
    error: false,
    name: '',
    token: undefined,
    fetching: false,
});

export const regRequest = (state, { login, pass, name }) => state.merge({
    fetching: true,
});

export const regFailure = (state, { error }) =>  state.merge({
    fetching: false,
    error,
});

export const regSuccess = (state, { value } ) => state.merge({
        fetching: false,
        error: null,
        token: value.token,
        name: value.name,
    });

export const authRequest = (state, { login, pass }) => state.merge({
        fetching: true,
    });

export const authSuccess = (state, { value } ) => state.merge({
        fetching: false,
        error: null,
        token: value.token,
        name: value.name,
    });

export const authFailure = (state, { error }) =>
     state.merge({
        fetching: false,
        error,
    });

export const updateRequest = (state, { name }) => state.merge({
        fetching: true,
    });

export const updateSuccess = (state, { value } ) => state.merge({
        fetching: false,
        name: value.name,
    });

export const updateFailure = (state, { error }) =>
     state.merge({
        fetching: false,
        error,
    });

// we've logged out
export const logoutRequest = state => state.merge({ fetching: true });

export const logoutSuccess = state => INITIAL_STATE;

export const logoutFailure = (state, { error }) => state.merge({ fetching: false, error });


// map our action types to our reducer functions
export const reducer =  createReducer(INITIAL_STATE, {
    //
    [Types.REG_REQUEST]: regRequest,
    [Types.REG_SUCCESS]: regSuccess,
    [Types.REG_FAILURE]: regFailure,

    [Types.AUTH_REQUEST]: authRequest,
    [Types.AUTH_SUCCESS]: authSuccess,
    [Types.AUTH_FAILURE]: authFailure,
    //
    [Types.UPDATE_REQUEST]: updateRequest,
    [Types.UPDATE_SUCCESS]: updateSuccess,
    [Types.UPDATE_FAILURE]: updateFailure,

    [Types.LOGOUT_REQUEST]: logoutRequest,
    [Types.LOGOUT_SUCCESS]: logoutSuccess,
    [Types.LOGOUT_FAILURE]: logoutFailure,

});
/* ------------- Selectors ------------- */
// Is the current user logged in?
export const isAuthorized = state => state.user.token !== null;

export const getUserName = state => state.user.name;

export const getToken = state => state.user.token;

