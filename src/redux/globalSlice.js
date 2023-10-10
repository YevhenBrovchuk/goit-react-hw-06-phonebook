import { createSelector, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const globalSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addNewContact: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    },
    applyFilter: (state, { payload }) => {
      state.filter = payload;
    },
    delContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        contact => contact.name !== payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  globalSlice.reducer
);

export const { addNewContact, applyFilter, delContact } = globalSlice.actions;

export const showContacts = createSelector(
  state => state.contacts.filter,
  state => state.contacts.contacts,
  (filter, contacts) => {
    const normalFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  }
);

export const getContacts = state => state.contacts.contacts;
export const getFilters = state => state.contacts.filter;
