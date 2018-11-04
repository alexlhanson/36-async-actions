import {combineReducers} from 'redux';
import lists from '../reducer/list-reducer';
import auth from '../reducer/auth-reducer';

export default combineReducers({
  lists, auth

})