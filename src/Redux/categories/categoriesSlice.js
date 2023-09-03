const CHECK_BOOK_STATUS = 'categories/categoriesSlice/CHECK_STATUS';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_BOOK_STATUS:
      return 'Oops, Under construction';

    default:
      return state;
  }
}

export const checkBookStatus = () => ({
  type: CHECK_BOOK_STATUS,
});
