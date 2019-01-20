import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({

    createRequest: { name : '' },
    createSuccess: { value: {} },
    createFailure: { error: '' },

    findRequest: { name : '' },
    findSuccess: { value: {} },
    findFailure: { error: '' },

    // deleteRequest: { name : '' },
    // deleteSuccess: { value: {} },
    // deleteFailure: { error: '' },

});

export const RoomTypes = Types;
export default Creators;

// the initial state of this reducer
export const INITIAL_STATE = Immutable({
    error: false,
    name: '',
    owner_name: '',
    id_room: '',
    fetching: false,
});

export const createRequest = (state, { name }) => state.merge({
    fetching: true,
});

export const createSuccess = (state, { value } ) => state.merge({
    fetching: false,
    name: value.name,
    owner_name: value.name_user,
    id_room: value.id_room,
    error: false
});

export const createFailure = (state, { error }) => state.merge({
    fetching: false,
    error,
});

export const findRequest = (state, { name }) => state.merge({
    fetching: true,
});

export const findSuccess = (state, { value } ) => state.merge({
    fetching: false,
    name: value.name,
    id_room: value.id_room,
    owner_name: value.name_user,
    error: false
});

export const findFailure = (state, { error }) => state.merge({
    fetching: false,
    error,
});

// map our action types to our reducer functions
export const reducer =  createReducer(INITIAL_STATE, {
    //
    [Types.CREATE_REQUEST]: createRequest,
    [Types.CREATE_SUCCESS]: createSuccess,
    [Types.CREATE_FAILURE]: createFailure,

    [Types.FIND_REQUEST]: findRequest,
    [Types.FIND_SUCCESS]: findSuccess,
    [Types.FIND_FAILURE]: findFailure,

});



