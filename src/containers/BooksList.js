import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = () => {
  const { books } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const displayBook = books.map((book) => (
    <Book key={book.id} book={book} removeBook={handleRemoveBook} />
  ));

  return (
    <div className="booklist">
      <table className="booklist-table">
        <thead>
          <tr className="booklist-row">
            <th className="booklist-header">ID</th>
            <th className="booklist-title">Title Of Book</th>
            <th className="booklist-category">Category Of Book</th>
            <th className="booklist-remove">Remove</th>
          </tr>
        </thead>
        <tbody>
          {displayBook}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
