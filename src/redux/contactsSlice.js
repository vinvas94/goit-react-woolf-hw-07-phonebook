import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'services/api';
import * as helpersReducer from './helpersReducer';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.unshift(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload);
      })
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        helpersReducer.handleFulfilled
      )
      .addMatcher(
        action => action.type.endsWith('pending'),
        helpersReducer.handlePending
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        helpersReducer.handleReject
      );
  },
});

export const { addFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
