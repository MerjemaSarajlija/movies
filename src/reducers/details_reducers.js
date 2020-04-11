import {
    FETCH_MOVIE_DETAILS, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_DETAILS_FAILURE,
    FETCH_TV_SHOWS_DETAILS, FETCH_TV_SHOWS_DETAILS_SUCCESS, FETCH_TV_SHOWS_DETAILS_FAILURE
} from '../actions/ActionTypes';


const INIT_STATE = {
    list: [],
    error: null,
    loading: true
};


export default function (state = INIT_STATE, action) {
    let error;

    switch (action.type) {
        case FETCH_MOVIE_DETAILS:
            return { ...state, list: [], error: null, loading: true };
        case FETCH_MOVIE_DETAILS_SUCCESS:
            return { ...state, list: action.payload, error: null, loading: false };
        case FETCH_MOVIE_DETAILS_FAILURE:
            error = action.payload || { message: action.payload.message };
            return { ...state, list: { details: [], error: error, loading: false } };
        case FETCH_TV_SHOWS_DETAILS:
            return { ...state, list: [], error: null, loading: true };
        case FETCH_TV_SHOWS_DETAILS_SUCCESS:
            return { ...state, list: action.payload, error: null, loading: false };
        case FETCH_TV_SHOWS_DETAILS_FAILURE:
            error = action.payload || { message: action.payload.message };
            return { ...state, list: { details: [], error: error, loading: false } };
        default:
            return state;
    }
}
