import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2uLpDoKDZ8I23S6ajxuI';
// 2uLpDoKDZ8I23S6ajxuI

const initialState = {
  books: [],
  status: 'nothing',

};

export const getBooks = createAsyncThunk(
  'getBooksFromApi',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${url}/books`);
      const { data } = res;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const postBooks = createAsyncThunk(
  'postBooks',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(`${url}/books`, data);
      thunkAPI.dispatch(getBooks());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteBookFromList = createAsyncThunk(
  'removeBook',
  async (bookId, thunkAPI) => {
    try {
      const res = await axios.delete(`${url}/books/${bookId}`, JSON.stringify({ item_id: bookId }));
      thunkAPI.dispatch(getBooks());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'success';
        const data = action.payload;
        state.books = data;
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default booksSlice.reducer;
