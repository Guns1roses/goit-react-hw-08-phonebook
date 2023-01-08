import { createSlice } from '@reduxjs/toolkit/';

export const addContactFormSlice = createSlice({
  name: 'addContactForm',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggle: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const addContactFormReducer = addContactFormSlice.reducer;
export const { toggle: toggleAddFormAction } = addContactFormSlice.actions;