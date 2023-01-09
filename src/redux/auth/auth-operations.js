import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../helpers/api/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await API.signUp(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      const {response: {status}} = error
      return thunkAPI.rejectWithValue(status);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await API.logIn(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const {response: {status}} = error
    return thunkAPI.rejectWithValue(status);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await API.logOut();
    token.unSet();
  } catch (error) {
    Notify.failure('Something went wrong, try again');
    const {response: {status}} = error
      return thunkAPI.rejectWithValue(status);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const data = await API.fetchCurrentUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;