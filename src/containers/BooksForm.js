import Select from 'react-select';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const option = categories.map((category) => ({
  value: category,
  label: category,
}));

const BooksForm = () => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const id = nanoid();

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
    <div className="booklist">
      <form onSubmit={(e) => handleChange(e)}>
        <input type="text" id="title" name="title" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} />
        <Select options={option} onChange={(e) => setCategory(e.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default BooksForm;
