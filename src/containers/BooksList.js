import { nanoid } from 'nanoid';
import React from 'react';
import { useSelector } from 'react-redux';
import book from '../components/Book';

const newBook = {
  id: nanoid(),
  title: '5 am morning club',
  category: 'personal development',
};

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
  const displayBook = book(newBook);
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
