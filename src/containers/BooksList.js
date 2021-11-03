import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions';
import CategoryFilter from '../components/Categoryfilter';

const BooksList = () => {
  const { books, filter } = useSelector((state) => state);
  const [options, setOptions] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const categories = ['All', ...books.map((book) => book.category)];
    setOptions(categories.map((category) => ({
      value: category,
      label: category,
    })));
  }, [books]);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.value));
  };

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
      <CategoryFilter options={options} handleChange={handleFilterChange} />
      <table className="booklist-table">
        <tbody>
          {displayFilteredBooks()}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
