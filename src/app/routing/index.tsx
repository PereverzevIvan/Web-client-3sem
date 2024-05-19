import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import HomePage from "../../pages/home";
import BooksPage from "../../pages/books";
import AuthorPage from "../../pages/authors";
import PaginationPage from "../../pages/genres";

import {
  HOME_ROUTE,
  BOOKS_ROUTE,
  AUTHORS_ROUTE,
  PAGINATION_ROUTE,
  PDF_ROUTE,
} from "./config";
import PDFPage from "../../pages/pdf";

const MainRouter = ({ isAuth = false }) => {
  const basePaths = [
    { path: HOME_ROUTE, element: <HomePage /> },
    { path: BOOKS_ROUTE, element: <BooksPage /> },
    { path: "*", element: <Navigate to={HOME_ROUTE} replace /> },
  ];

  const authPaths = [
    { path: AUTHORS_ROUTE, element: <AuthorPage /> },
    { path: PAGINATION_ROUTE, element: <PaginationPage /> },
    { path: PDF_ROUTE, element: <PDFPage /> },
  ];

  const resultPaths: RouteObject[] = basePaths;

  if (isAuth) {
    resultPaths.push(...authPaths);
  }

  return useRoutes(resultPaths);
};

export default MainRouter;
