import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index';
import logger from '../lib/middleware/logger';

export default () => createStore(reducer, applyMiddleware(
  logger,
));