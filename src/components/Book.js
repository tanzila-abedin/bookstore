import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { id, title, category } = book;
  return (
    <tr className="book-into">
      <td className="id">{id}</td>
      <td className="title">{title}</td>
      <td className="category">{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
