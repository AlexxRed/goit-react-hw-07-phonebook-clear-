import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6286216d96bccbf32d6fc4b5.mockapi.io/'
    }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `contacts`,
            providesTags: ['Contacts'],
        }),
        addNewContact: builder.mutation({
            query: (contact) =>({
            url: `contacts`,
            method: 'POST',
            body: contact,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: (id) =>({
            url: `contacts/${id}`,
            method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useAddNewContactMutation,
    useDeleteContactMutation,
} = contactsApi;


export const filterSlice = createSlice({
    name: 'filter',
    initialState: { value: '' },
    reducers: {
        setFilter(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
