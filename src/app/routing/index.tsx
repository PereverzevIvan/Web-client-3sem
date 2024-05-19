import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import HomePage from "../../pages/home";
import BooksPage from "../../pages/books";
import AuthorPage from "../../pages/authors";
import GenresPage from "../../pages/genres";

import {
  HOME_ROUTE,
  BOOKS_ROUTE,
  AUTHORS_ROUTE,
  GESNRES_ROUTE,
  PDF_ROUTE,
} from "./config";
import PDFPage from "../../pages/pdf";

const MainRouter = ({ isAuth = false }) => {
  const basePaths = [
    { path: HOME_ROUTE, element: <HomePage /> },
    { path: BOOKS_ROUTE, element: <BooksPage /> },
    { path: "*", element: <Navigate to={HOME_ROUTE} replace /> },
  ];

  const AuthPaths = [
    { path: AUTHORS_ROUTE, element: <AuthorPage /> },
    { path: GESNRES_ROUTE, element: <GenresPage /> },
    { path: PDF_ROUTE, element: <PDFPage /> },
  ];

  const resultPaths: RouteObject[] = basePaths;

  if (isAuth) {
    resultPaths.push(...AuthPaths);
  }

  return useRoutes(resultPaths);
};

export default MainRouter;
