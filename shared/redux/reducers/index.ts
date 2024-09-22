import {combineReducers} from 'redux';

import users from './users';
import userMessages from './user-messages';
import input from './input';

const rootReducer = combineReducers({
  users,
  userMessages,
  input,
});

export default rootReducer;
