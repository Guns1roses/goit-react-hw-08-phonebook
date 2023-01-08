import persistReducer from 'redux-persist/es/persistReducer';
// import { contactsReducer } from 'redux/slice/contactSlice';
import { filterReducer } from 'redux/slice/filterSlice';
import { persistFilterConfig } from './persistConfig';

export const persistedFilterReducer = persistReducer(
  persistFilterConfig,
  filterReducer
);
