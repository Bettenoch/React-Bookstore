import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2uLpDoKDZ8I23S6ajxuI';
// 2uLpDoKDZ8I23S6ajxuI

const initialState = {
  books: {},
  isLoading: false,
  error: null,

};

export const getBooks = createAsyncThunk(
  'getBooksFromApi',
  async (payload, thunkAPI) => {
    try {
      const res = await axios(`${url}/books`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const postBooks = createAsyncThunk(
  'postBooks',
  async (book, thunkAPI) => {
    try {
      await axios.post(`${url}/books`, book);
      const response = await axios.get(`${url}/books`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteBookFromList = createAsyncThunk(
  'removeBook',
  async (bookId, thunkAPI) => {
    try {
      await axios.delete(`${url}/books/${bookId}`);
      const response = await axios.get(`${url}/books`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.books = payload;
      })
      .addCase(getBooks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(postBooks.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(postBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.books = payload;
      })

      .addCase(postBooks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(deleteBookFromList.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(deleteBookFromList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.books = payload;
      })

      .addCase(deleteBookFromList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default booksSlice.reducer;
