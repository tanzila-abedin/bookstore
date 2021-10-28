// use combire reducer
// use book reducer

const initialState = {
  books: [
    {

    },
  ],
};

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
