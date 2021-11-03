import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

const App = () => (
  <>
    <Header />
    <div className="container ">
      <BooksList />
      <BooksForm />
    </div>
  </>
);

export default App;
