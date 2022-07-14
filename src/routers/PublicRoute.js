import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';
import { DashboardRoutes } from './DashboardRoutes';

export const PublicRoute = ({ children }) => {

  const { logged } = useContext(AuthContext);
  
  //si logged es true, entonces muestro el children (Nuestros comp. encapsualdos).
  return (!logged) ? children : <Navigate to="/marvel" />


}
