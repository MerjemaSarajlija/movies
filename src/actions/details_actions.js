import axios from 'axios';
import { API_URL } from '../utils/constants';
import { API_KEY } from '../utils/constants';

import {
  FETCH_MOVIE_DETAILS, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_DETAILS_FAILURE,
  FETCH_TV_SHOWS_DETAILS, FETCH_TV_SHOWS_DETAILS_SUCCESS, FETCH_TV_SHOWS_DETAILS_FAILURE
} from '../actions/ActionTypes';

export function getMovieDetails(id) {
  return function (dispatch) {
    dispatch({ type: FETCH_MOVIE_DETAILS });
    axios
      .get(`${API_URL}/movie/` + id + `?api_key=` + API_KEY + '&language=en-US')
      .then(response => {
        dispatch({
          type: FETCH_MOVIE_DETAILS_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_MOVIE_DETAILS_FAILURE,
          payload: error
        });
      });
  };
}


export function getTVShowDetails(id) {
  return function (dispatch) {
    dispatch({ type: FETCH_TV_SHOWS_DETAILS });
    axios
      .get(`${API_URL}/tv/` + id + `?api_key=` + API_KEY + '&language=en-US')
      .then(response => {
        dispatch({
          type: FETCH_TV_SHOWS_DETAILS_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_TV_SHOWS_DETAILS_FAILURE,
          payload: error
        });
      });
  };
}

