import React  from 'react'
import { HOME_ROUTE, BOOKS_ROUTE, AUTHORS_ROUTE, GESNRES_ROUTE } from './config';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import HomePage from '../../pages/home';
import BooksPage from '../../pages/books';
import AuthorPage from '../../pages/authors';
import GenresPage from '../../pages/genres';



const MainRouter = ({isAuth = false}) => {
    const basePaths = [
        { path: HOME_ROUTE, element: <HomePage/>},
        { path: BOOKS_ROUTE, element: <BooksPage/>},
        { path: "*", element: <Navigate to={HOME_ROUTE} replace />},
    ]

    const AuthPaths = [
        { path: AUTHORS_ROUTE, element: <AuthorPage/>},
        { path: GESNRES_ROUTE, element: <GenresPage/>},
    ]

    const resultPaths: RouteObject[] = basePaths

    if (isAuth) {
      resultPaths.push(...AuthPaths)
    }
    
    return useRoutes(resultPaths) 
  }

export default MainRouter;