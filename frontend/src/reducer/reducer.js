import {combineReducers} from 'redux';
import lists from '../reducer/list-reducer';
import auth from '../reducer/list-reducer';

export default combineReducers({
  lists, auth

})