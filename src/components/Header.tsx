import styled from 'styled-components';
import { Container } from '../global-styles';
import Navbar from './Navbar';
import Flex from './Flex';
import { DefaultStyledButton, GreenStyledButton, RedStyledButton } from './Buttons';
import { useState } from 'react';


const StyledHeader = styled.header`
  height: 50px;
  background-color: var(--secondary-color);
  transition: background-color 0.2s;

  .header__logo {
    color: inherit;
    text-decoration: none;
    transition: transform 0.2s;
    border-radius: 5px;
    background-color: var(--four-color);
    padding: 5px 10px;
    font-size: 1.3rem;
    font-weight: bold;
    margin-right: auto;
  }

  .header__logo:hover {
    transform: scale(1.05);
    text-decoration: underline;
  }
`

// Интерфейс передаваемых в компонент значений
interface HeaderProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isAuth: boolean;
}

// Компонент шапки сайта
const Header = ({ setIsAuth, isAuth } :  HeaderProps) => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">('dark')
  
  const changeTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    setCurrentTheme(newTheme);
  }

  document.documentElement.setAttribute('data-theme', currentTheme)

  return (
    <StyledHeader className='header'>
      <Container height='inherit'>
        <Flex justify='end' align='center' height='inherit' gap="25px">
            <a href="#" className="header__logo">RecommendSystemBooks</a>
            <Navbar isAuth={isAuth} />
            <Flex gap="10px">
              <DefaultStyledButton type="default" onClick={ () => changeTheme() }>Сменить тему</DefaultStyledButton>
              { isAuth === false ?
              <GreenStyledButton type="default" onClick={ () => {setIsAuth(true)} }>Войти</GreenStyledButton> :
              <RedStyledButton type="default" onClick={ () => {setIsAuth(false)} }>Выйти</RedStyledButton> }
            </Flex>
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
