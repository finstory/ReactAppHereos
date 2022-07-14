import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';
import { DashboardRoutes } from './DashboardRoutes';

export const PrivateRoute = ({ children }) => {

  const { logged } = useContext(AuthContext);
  const {pathname,search} = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem("lastPath",lastPath);
  //si logged es true, entonces muestro el children (Nuestros comp. encapsualdos).
  return (logged) ? children : <Navigate to="/login" />


}
