import Select from 'react-select';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const option = categories.map((category) => ({
  value: category,
  label: category,
}));

const BooksForm = () => (
  <div className="booklist">
    <form>
      <input type="text" id="title" name="title" placeholder="Book Title" />
      <Select options={option} />
      <button type="submit">Submit</button>
    </form>
  </div>
);
export default BooksForm;
