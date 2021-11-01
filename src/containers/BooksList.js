import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const { books } = useSelector((state) => state);
  const displayBook = books.map((book) => (
    <Book key={book.id} book={book} />
  ));

  return (
    <div className="booklist">
      <table className="booklist-table">
        <thead>
          <tr className="booklist-row">
            <th className="booklist-header">ID</th>
            <th className="booklist-title">Title Of Book</th>
            <th className="booklist-category">Category Of Book</th>
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
