import Button from "../Button/Button";
import { AppThemeContext } from "../../context/AppThemeContext";
import Navbar from "../Navbar/Navbar";
import styles from "./header.module.scss";
import { useContext } from "react";

// Интерфейс передаваемых в компонент значений
interface IHeaderProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isAuth: boolean;
}

// Компонент шапки сайта
const Header = ({ setIsAuth, isAuth }: IHeaderProps) => {
  const { theme, setTheme } = useContext(AppThemeContext);

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log(`Тема сменилась с ${theme} на ${newTheme}`);

    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  document.documentElement.setAttribute("data-theme", theme);

  return (
    <header className={`${styles.header}`}>
      <div className={`container ${styles.header__container}`}>
        <a href="#" className={`${styles.header__logo}`}>
          RecommendSystemBooks
        </a>
        <Navbar isAuth={isAuth} />
        <Button onClick={() => changeTheme()}>Сменить тему</Button>
        {isAuth === false ? (
          <Button
            onClick={() => {
              setIsAuth(true);
            }}
          >
            Войти
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsAuth(false);
            }}
          >
            Выйти
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
