import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Проверка подвала", () => {
  test("Проверяет наличие заголовка с ФИО студента", () => {
    render(<Footer />);
    const countElement = screen.getByText("Переверзев Иван 221-321");
    expect(countElement).toBeInTheDocument();
  });
});
