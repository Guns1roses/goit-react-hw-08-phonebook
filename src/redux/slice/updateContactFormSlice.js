import { createSlice } from '@reduxjs/toolkit/';

export const updateContactFormSlice = createSlice({
  name: 'updateContactForm',
  initialState: {
    id: '',
    isOpen: false,
  },
  reducers: {
    toggle: state => {
      state.isOpen = !state.isOpen;
    },
    setContactId: (state, { payload }) => {
      state.id = payload;
    },
  },
});

export const updateContactFormReducer = updateContactFormSlice.reducer;
export const { toggle: toggleUpdateFormAction, setContactId } =
  updateContactFormSlice.actions;