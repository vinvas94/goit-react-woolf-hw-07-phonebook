import { createSelector } from '@reduxjs/toolkit';

export const selectGetContacts = state => state.contacts.items;
export const selectGetFilter = state => state.contacts.filter;
export const selectGetIsLoading = state => state.contacts.isLoading;
export const selectGetError = state => state.contacts.error;

export const selectContacts = createSelector(
  [selectGetContacts, selectGetFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter?.toLowerCase() ?? '')
    );
  }
);
