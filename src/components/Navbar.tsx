import { Link } from 'react-router-dom';
import { HOME_ROUTE, BOOKS_ROUTE, AUTHORS_ROUTE, GESNRES_ROUTE } from '../app/routing/config';
import styled from 'styled-components';
import Flex from './Flex';


const StyledNavbar = styled.nav`
  .nav__link {
    color: inherit;
    text-decoration: none;
    transition: transform 0.2s;
  }

  .nav__link:hover {
    transform: scale(1.2);
    text-decoration: underline;
  }
`

// Интерфейс передаваемых в компонент значений
interface NavbarProps {
  isAuth: boolean;
}

// Компонент навигационного меню
const Navbar = ({isAuth=false} : NavbarProps) => {
  return (
    <StyledNavbar className='nav'>
      <Flex gap='20px'>
        <Link className='nav__link' to={HOME_ROUTE}>Home</Link>
        <Link className='nav__link' to={BOOKS_ROUTE}>Books</Link>
        {isAuth === true ? <Link className='nav__link' to={AUTHORS_ROUTE}>Authors</Link> : <></>}
        {isAuth === true ? <Link className='nav__link' to={GESNRES_ROUTE}>Genres</Link> : <></>}
      </Flex>
    </StyledNavbar>
  );
}

export default Navbar;
