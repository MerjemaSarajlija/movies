import axios from 'axios';
import { API_URL } from '../utils/constants';
import { API_KEY } from '../utils/constants';
import {
  FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE,
  FETCH_TV_SHOWS, FETCH_TV_SHOWS_SUCCESS, FETCH_TV_SHOWS_FAILURE, SELECT_TYPE,
  SEARCH_MOVIES, SEARCH_MOVIES_FAILURE, SEARCH_MOVIES_SUCCESS,
  SEARCH_TV_SHOWS, SEARCH_TV_SHOWS_SUCCESS, SEARCH_TV_SHOWS_FAILURE
} from '../actions/ActionTypes';

export function getMoviesByRating() {
  return function (dispatch) {
    dispatch({ type: FETCH_MOVIES });
    axios
      .get(`${API_URL}/movie/top_rated?api_key=` + API_KEY + '&language=en-US&page=1')
      .then(response => {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: error
        });
      });
  };
}

export function getTVShowsByRating() {
  return function (dispatch) {
    dispatch({ type: FETCH_TV_SHOWS });
    axios
      .get(`${API_URL}/tv/top_rated?api_key=` + API_KEY + '&language=en-US&page=1')
      .then(response => {
        dispatch({
          type: FETCH_TV_SHOWS_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_TV_SHOWS_FAILURE,
          payload: error
        });
      });
  };
}

export const selectType = type => async dispatch => {
  dispatch({ type: SELECT_TYPE, payload: type });
};


export function searchMovies(query) {
  return function (dispatch) {
    dispatch({ type: SEARCH_MOVIES });
    axios
      .get(`${API_URL}/search/movie?api_key=` + API_KEY + '&language=en-US&query='+query+'&page=1&include_adult=false')
      .then(response => {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: SEARCH_MOVIES_FAILURE,
          payload: error
        });
      });
  };
}

export function searchTVShows(query) {
  return function (dispatch) {
    dispatch({ type: SEARCH_TV_SHOWS });
    axios
      .get(`${API_URL}/search/tv?api_key=` + API_KEY + '&language=en-US&page=1&query='+query+'&include_adult=false')
      .then(response => {
        dispatch({
          type: SEARCH_TV_SHOWS_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: SEARCH_TV_SHOWS_FAILURE,
          payload: error
        });
      });
  };
}






