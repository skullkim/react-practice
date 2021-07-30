import {handleActions} from 'redux-actions';
import * as api from '../lib/api';
import createRequesThunk from "../lib/createRequestThunk";

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS/FAILURE';

//thunk함수 생성
export const getPost = createRequesThunk(GET_POST, api.getPost);
export const getUsers = createRequesThunk(GET_USERS, api.getUsers);

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false,
    },
};

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload,
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload,
        }),
    },
    initialState
);

export default sample;