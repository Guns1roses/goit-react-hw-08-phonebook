import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedFilterReducer } from './persist/presistReducer';
import { addContactFormReducer } from './slice/addContactFormSlice';
import { contactsApi } from './slice/contactSlice';
import { updateContactFormReducer } from './slice/updateContactFormSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: persistedFilterReducer,
    addContactForm: addContactFormReducer,
    updateContactForm: updateContactFormReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);