// import {configureStore} from '@reduxjs/toolkit';
// import { createStore, compose, applyMiddleware } from 'redux';
// // import usersReducer from './rdx-slice';
// import thunk from 'redux-thunk';

// import rootReducer from './reducers';

// const store = configureStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Настраиваем Redux store через configureStore
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
