import {combineReducers} from 'redux';
import listReducer from '../reducer/list-reducer';

export default combineReducers({
  lists: listReducer,
})