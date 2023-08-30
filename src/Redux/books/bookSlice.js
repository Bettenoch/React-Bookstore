// ./src/redux/books/booksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 'item1',
    title: 'Lone Women',
    author: 'Ema Cline',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Romantic Comedy',
    author: 'Mathew Desmond',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Covenant of a Woman',
    author: 'Abraham Verghese',
    category: 'Nonfiction',
  },

];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const userBook = {
        item_id: `item${state.length + 1}`,
        title: action.payload.title,
        author: action.payload.author,
        category: 'Fiction',
      };
      state.push(userBook);
    },
    removeBook: (state, action) => {
      const exit = action.payload.id;
      return state.filter((book) => book.item_id !== exit);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
