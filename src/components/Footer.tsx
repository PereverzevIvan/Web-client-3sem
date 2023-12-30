import styled from "styled-components";
import { Container } from "../global-styles";
import Title from "./Title";

const StyledFooter = styled.footer`
  background-color: var(--secondary-color);
  padding: 15px 0;
`


// Компонент подвала сайта
function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Title fontSize={"var(--medium-title-fz)"} textAlign="center">
          Переверзев Иван 221-321
        </Title>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
