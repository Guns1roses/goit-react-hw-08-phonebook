import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: 'contacts/', method: 'get' }),
      providesTags: ['Contacts'],
    }),

    addContacts: builder.mutation({
      query: contact => ({
        url: `contacts/`,
        method: 'post',
        data: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    removeContacts: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContactById: builder.mutation({
      query: contact => ({
        url: `contacts/${contact.id}`,
        method: 'patch',
        data: contact.values,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useRemoveContactsMutation,
  useUpdateContactByIdMutation,
  useGetContactByIdQuery,
} = contactsApi;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     add: (state, action) => {
//       state.value.push(action.payload);
//     },

//     remove: (state, action) => {
//       return {
//         value: state.value.filter(({ id }) => id !== action.payload),
//       };
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
// export const { add, remove } = contactsSlice.actions;