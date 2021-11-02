const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FILTER_BOOK = 'FILTER_BOOK';

const createBook = (book) => ({
  type: CREATE_BOOK,
  book,

});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const filterBook = () => ({
  type: FILTER_BOOK,
});

export {
  createBook, removeBook, filterBook, CREATE_BOOK, REMOVE_BOOK, FILTER_BOOK,
};
