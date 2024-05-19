import { describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./context/AppThemeContext";

describe("App", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AppThemeProvider>
          <App></App>
        </AppThemeProvider>
      </BrowserRouter>,
    );
  });

  test("Ищет тег main в компненте приложения", () => {
    const booksLink = screen.getByTestId("main_tag");
    expect(booksLink).toBeInTheDocument();
  });

  test("Проверяет изменение темы", () => {
    const changeThemeButton = screen.getByText("Сменить тему");
    expect(changeThemeButton).toBeInTheDocument();

    fireEvent.click(changeThemeButton);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");

    fireEvent.click(changeThemeButton);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
