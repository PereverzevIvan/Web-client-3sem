import { Link } from "react-router-dom";
import {
  HOME_ROUTE,
  BOOKS_ROUTE,
  AUTHORS_ROUTE,
  GESNRES_ROUTE,
  PDF_ROUTE,
} from "../../app/routing/config";
import styles from "./navbar.module.scss";

// Интерфейс передаваемых в компонент значений
interface INavbarProps {
  isAuth: boolean;
}

// Компонент навигационного меню
const Navbar = ({ isAuth = false }: INavbarProps) => {
  return (
    <nav className={`${styles.nav}`}>
      <Link className={`${styles.nav__link}`} to={HOME_ROUTE}>
        Home
      </Link>
      <Link className={`${styles.nav__link}`} to={BOOKS_ROUTE}>
        Books
      </Link>
      {isAuth === true && (
        <>
          <Link className={`${styles.nav__link}`} to={GESNRES_ROUTE}>
            Genres
          </Link>
          <Link className={`${styles.nav__link}`} to={AUTHORS_ROUTE}>
            Authors
          </Link>
          <Link className={`${styles.nav__link}`} to={PDF_ROUTE}>
            PDF
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
