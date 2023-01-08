import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '', isOpen: false },
  reducers: {
    set: (state, action) => {
      return { ...state, value: action.payload };
    },

    toggle: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { set, toggle: toggleFilterAction } = filterSlice.actions;