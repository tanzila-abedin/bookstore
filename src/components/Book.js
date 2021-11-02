import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  return (
    <tr className="book-into">
      <td className="id">{id}</td>
      <td className="title">{title}</td>
      <td className="category">{category}</td>
      <td className="displaybook_remove">
        <button type="button" onClick={() => removeBook(book)}>Remove</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
