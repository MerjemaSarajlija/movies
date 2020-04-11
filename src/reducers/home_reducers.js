import {
    FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE,
    FETCH_TV_SHOWS, FETCH_TV_SHOWS_SUCCESS, FETCH_TV_SHOWS_FAILURE, SELECT_TYPE,
    SEARCH_MOVIES, SEARCH_MOVIES_FAILURE, SEARCH_MOVIES_SUCCESS,
    SEARCH_TV_SHOWS, SEARCH_TV_SHOWS_SUCCESS, SEARCH_TV_SHOWS_FAILURE
} from '../actions/ActionTypes';

const INIT_STATE = {
    list: [],
    error: null,
    loading: true,
    type: "TV"
};

export default function (state = INIT_STATE, action) {
    let error;

    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, list: [], error: null, loading: true };
        case FETCH_MOVIES_SUCCESS:
            return { ...state, list: action.payload.results, error: null, loading: false };
        case FETCH_MOVIES_FAILURE:
            error = action.payload || { message: action.payload.message };
            return { ...state, list: { movies: [], error: error, loading: false } };
        case FETCH_TV_SHOWS:
            return { ...state, list: [], error: null, loading: true };
        case FETCH_TV_SHOWS_SUCCESS:
            return { ...state, list: action.payload.results, error: null, loading: false };
        case FETCH_TV_SHOWS_FAILURE:
            error = action.payload || { message: action.payload.message };
            return { ...state, list: { movies: [], error: error, loading: false } };
        case SEARCH_MOVIES:
            return { ...state, list: [], error: null, loading: true };
        case SEARCH_MOVIES_SUCCESS:
            return { ...state, list: action.payload.results, error: null, loading: false };
        case SEARCH_MOVIES_FAILURE:
            error = action.payload || { message: action.payload.message };
            return { ...state, list: { movies: [], error: error, loading: false } };
        case SEARCH_TV_SHOWS:
            return { ...state, list: [], error: null, loading: true };
        case SEARCH_TV_SHOWS_SUCCESS:
            return { ...state, list: action.payload.results, error: null, loading: false };
        case SEARCH_TV_SHOWS_FAILURE:
            error = action.payload || { message: action.payload.message };
            return { ...state, list: { movies: [], error: error, loading: false } };
        case SELECT_TYPE:
            return { ...state, type: action.payload }
        default:
            return state;
    }
}

