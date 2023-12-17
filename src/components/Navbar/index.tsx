import { Link } from 'react-router-dom';
import { HOME_ROUTE, BOOKS_ROUTE, AUTHORS_ROUTE, GESNRES_ROUTE } from '../../app/routing/config';

// Компонент навигационного меню
function Navbar({isAuth=false}) {
  return (
    <>
      <nav className="nav">
        <Link className='nav__link' to={HOME_ROUTE}>Home</Link>
        <Link className='nav__link' to={BOOKS_ROUTE}>Books</Link>
        {isAuth === true ? <Link className='nav__link' to={AUTHORS_ROUTE}>Authors</Link> : ""}
        {isAuth === true ? <Link className='nav__link' to={GESNRES_ROUTE}>Genres</Link> : ""}
      </nav>
    </>
  );
}

export default Navbar;
