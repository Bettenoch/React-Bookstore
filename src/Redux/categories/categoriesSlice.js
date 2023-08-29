const CHECK_STATUS = 'categories/categoriesSlICE/CHECK_STATUS';

const initialState = [];

export default function categoryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';

    default:
      return state;
  }
}

export const checkCurStatus = () => ({
  type: CHECK_STATUS,
});
