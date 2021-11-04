import Select from 'react-select';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

const faker = require('faker');

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const option = categories.map((category) => ({
  value: category,
  label: category,
}));

const BooksForm = () => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const id = faker.name.findName();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(createBook({
      id,
      title,
      category,
    }));
    e.target.reset();
  };

  return (
    <div className="booklist pb-5 ">
      <h2 className="add-book"> ADD NEW BOOK </h2>
      <form onSubmit={(e) => handleChange(e)}>
        <input className="book-input" type="text" id="title" name="title" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} />
        <Select className="select-dropdown-2" placeholder="Categories" options={option} onChange={(e) => setCategory(e.value)} />
        <button className="form-submit btn btn btn-lg" type="submit">Submit</button>
      </form>
    </div>
  );
};
export default BooksForm;
