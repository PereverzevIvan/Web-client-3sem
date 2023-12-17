import Navbar from '../Navbar';

// Компонент шапки сайта
const Header = (props: any) => {
  return (
    <>
      <header className="header">
        <div className="header__container container wrapper-h">
          <a href="#" className="header__logo">WebClient</a>
          <Navbar isAuth={props.isAuth}/>
          {props.isAuth === false ?
          <a href="#" className="button" onClick={ () => {props.setIsAuth(true)} }>Войти</a> :
          <a href="#" className="button" onClick={ () => {props.setIsAuth(false)} }>Выйти</a>} 
        </div>
      </header>
    </>
  );
}

export default Header;
