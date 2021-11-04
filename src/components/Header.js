import { BsFillPersonFill } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../actions';
import CategoryFilter from './Categoryfilter';

const Header = () => {
  const { books } = useSelector((state) => state);
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

  return (
    <header>
      <div className="head-wrap">
        <div className="header-text">
          <h1 className="bookstore-cms">Bookstore CMS</h1>
          <p className="books pt-2">BOOKS</p>
          <p className="categories pt-2">
            {' '}
            <CategoryFilter options={options} handleChange={handleFilterChange} />
          </p>
        </div>
        <div className="icon-frame pb-2">
          <i className="icon">
            <BsFillPersonFill size={25} />
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
