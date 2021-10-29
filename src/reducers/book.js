// use combire reduce
import { nanoid } from 'nanoid';

const initialState = [

  { id: nanoid(), title: 'Rich Dad Poor Dad', category: 'Finance' },
  { id: nanoid(), title: 'The Art of seduction', category: 'Non-fiction' },

];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {

      };
    default:
      return state;
  }
};

export default bookReducer;
