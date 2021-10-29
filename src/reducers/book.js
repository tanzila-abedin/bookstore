// use combire reduce
import { nanoid } from 'nanoid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  book: [
    { id: nanoid(), title: 'Rich Dad Poor Dad', category: 'Finance' },
    { id: nanoid(), title: 'The Art of seduction', category: 'Non-fiction' },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:

      return {
        ...state,
        newBook: action.payload,

      };
    case REMOVE_BOOK:
      return state.filter((book) => book.bookId !== action.payload.bookId);
    default:
      return state;
  }
};

export default bookReducer;
