import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = () => {
  const { books, filter } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const displayBooks = (books) => books.map((book) => (
    <Book key={book.id} book={book} removeBook={handleRemoveBook} />
  ));

  const displayFilteredBooks = () => {
    if (filter === '' || filter === 'All') {
      return displayBooks(books);
    }
    return displayBooks(books.filter((book) => book.category === filter));
  };

  return (
    <div className="booklist">
      <div className="booklist-table">
        {displayFilteredBooks()}
      </div>
    </div>
  );
};

export default BooksList;
