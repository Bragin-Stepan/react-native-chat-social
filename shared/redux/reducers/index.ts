import {combineReducers} from 'redux';

import users from './users';
import userMessages from './user-messages';

const rootReducer = combineReducers({
  users,
  userMessages,
});

export default rootReducer;
