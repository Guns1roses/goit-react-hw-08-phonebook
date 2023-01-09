import storage from 'redux-persist/lib/storage';

export const persistAuthConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};