import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAll } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const slicer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
      })
      .addCase(fetchAll.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      });
  },
});

export const { setSearch } = slicer.actions;
export default slicer.reducer;
