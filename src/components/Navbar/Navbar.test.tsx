import { describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { BOOKS_ROUTE } from "../../app/routing/config";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar isAuth={false} />
      </BrowserRouter>,
    );
  });

  test("Отображает ссылку на страницу с книгами", () => {
    const booksLink = screen.getByText("Home");
    expect(booksLink).toBeInTheDocument();
  });

  test("Перенаправляет на страницу с книгами", () => {
    const booksLink = screen.getByText("Books");
    expect(booksLink).toBeInTheDocument();
    fireEvent.click(booksLink);
    expect(window.location.pathname).toBe(BOOKS_ROUTE);
  });

  test("Проверяет отсутствие ссылки на PDF документ", () => {
    const booksLink = screen.queryByText("PDF");
    expect(!!booksLink).toBe(false);
  });
});
