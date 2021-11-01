import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:

      return [
        ...state,
        {
          id: action.book.id,
          title: action.book.title,
          category: action.book.category,
        },

      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
