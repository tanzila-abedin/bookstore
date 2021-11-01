// use combire reduce
import { nanoid } from 'nanoid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = [
  { id: nanoid(), title: 'Rich Dad Poor Dad', category: 'Finance' },
  { id: nanoid(), title: 'The Art of seduction', category: 'Non-fiction' },
];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:

      return [
        ...state,
        action.payload,

      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
