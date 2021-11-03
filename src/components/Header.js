import { BsFillPersonFill } from 'react-icons/bs';

const Header = () => (
  <header>
    <div className="header-text">
      <h1 className="bookstore-cms">Bookstore CMS</h1>
      <p className="books">BOOKS</p>
      <p className="categories">CATEGORIES</p>
    </div>
    <div className="icon-frame">
      <i className="icon">
        <BsFillPersonFill size={25} />
      </i>
    </div>
  </header>
);

export default Header;
