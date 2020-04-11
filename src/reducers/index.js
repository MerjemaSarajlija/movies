import { combineReducers } from 'redux';
import homeReducer from './home_reducers';
import detailReducer from './details_reducers';

const rootReducer = combineReducers({
   movies: homeReducer, 
   details: detailReducer
  });
  
  export default rootReducer;