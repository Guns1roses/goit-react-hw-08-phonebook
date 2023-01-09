import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    set: (state, action) => {
      return { ...state, value: action.payload };
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { set, toggle: toggleFilterAction } = filterSlice.actions;