import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/reducer.js';
import logger from '../lib/middleware/logger.js';

export default () => createStore(reducer, applyMiddleware(
  logger,
));