import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

interface ContainerProps {
  width?: string;
  height?: string;
}

export const GlobalStyles = createGlobalStyle`
    :root {
      // font-sizes (fz)
      font-size: 16px;
      --common-text-fz: 1rem;
      --big-title-fz: 2.44rem;
      --medium-title-fz: 1.7rem;

      // colors
      --black: black;
      --white: white;
      --font-color: white;
      --green: #3CD288;
      --dark-green: green;
      --red: #EC5F6B;
      --dark-red: red;
      --accent-color: #5F6DEC;
    }

    *, *::before, *::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html[data-theme=dark] {
      --font-color: white;
      --primary-color: #3A3A3A;
      --secondary-color: #2E2E2E;
      --third-color: #333339;
      --four-color: #252525;
      --default-button-bg: var(--primary-color);
    }

    html[data-theme=light] {
      --font-color: black;
      --primary-color: #dbdbdb;
      --secondary-color: #F5F5F5;
      --third-color: #F5F5F5;
      --four-color: #FFFFFF;
      --default-button-bg: var(--third-color);
    }
`;

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  color: var(--font-color);
  gap: 20px;
  transition: background-color 0.2s;
`;

export const Main = styled.main`
  flex: 1 1 0;
  width: 100%;
`;

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width || "80%"};
  height: ${({ height }) => height || "auto"};
  margin: 0 auto;
`;
