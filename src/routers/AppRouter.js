import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';

import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
    return (
        <BrowserRouter basename="/ReactAppHereos">
        {/* <BrowserRouter > */}
            <Routes>

                <Route exact path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />

                <Route exact path="/*" element={
                    // acá se verifica si el usuario está logueado o no. Si está logueado, se muestra el dashboard.
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    )
}
