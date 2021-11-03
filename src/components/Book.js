import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  return (
    <div className="lesson-panel mb-5">
      <div className="book-info ">
        <p className="category opacity-50 font-mont font-bold md:text-sm capitalize">
          {category}
          {' '}
        </p>
        <p className="title">
          {title}
        </p>
        <p className="id text-link font-robo font-light md:text-sm mb-4">
          ID:
          {' '}
          {id}
        </p>
        <div className="button-grp d-flex align-items-center">
          <span className="comments">Comment</span>
          <button className="remove btn btn" type="button" onClick={() => removeBook(book)}>Remove</button>
          <span className="edit">Edit</span>
        </div>
      </div>
      <div className="progress-info ">
        <div className="circular">
          <div className="inner" />
          <div className="circle">
            <div className="bar left">
              <div className="progress" />
            </div>
            <div className="bar right">
              <div className="progress" />
            </div>
          </div>
        </div>
        <div className="count">
          <p className="percent">75%</p>
          <p className="completed"> completed</p>
        </div>
      </div>
      <div className="chapter-info">
        <p className="para-1">CURRENT CHAPTER</p>
        <p className="para-2">Chapter 1</p>
        <button className=" update-btn btn btn btn-lg" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
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
