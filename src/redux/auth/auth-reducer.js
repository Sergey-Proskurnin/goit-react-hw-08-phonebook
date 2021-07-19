import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  // registerRequest,
  registerSuccess,
  registerError,
  // logoutRequest,
  logoutSuccess,
  logoutError,
  // loginRequest,
  loginSuccess,
  loginError,
  // getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});
const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
});

const authReducer = combineReducers({
  user,
  token,
  error,
});
export { authReducer };
