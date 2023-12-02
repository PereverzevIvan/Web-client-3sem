import React  from 'react'
import { UNIVERSITIES_ROUTE, USERS_ROUTE } from './config';
import { useRoutes } from 'react-router-dom';
import Users from '../../pages/users';
import University from '../../pages/university';



const MainRouter = () => {
    return useRoutes([
          { path: USERS_ROUTE, element: <Users />},
          { path: UNIVERSITIES_ROUTE, element: <University />},
          // { path: "*", element: <Navigate to={UNIVERSITIES_ROUTE} replace />},
        ]);
  }

export default MainRouter;