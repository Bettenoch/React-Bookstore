const ADD_BOOK = 'books/bookSlice/ADD_BOOK';
const DELETE_BOOK = 'books/bookSlice/ADD_BOOK';
const initialState = [];

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case DELETE_BOOK:
      return [
        ...state.filter((item) => item.id !== action.id),
      ];
    default:
      return state;
  }
}

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const deleteBook = (id) => ({ type: DELETE_BOOK, payload: id });
