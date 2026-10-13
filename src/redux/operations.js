import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://694ac93526e8707720669208.mockapi.io';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const res = await axios.get('/contacts');
    return res.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    const res = await axios.post('/contacts', { name, phone });
    return res.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);
