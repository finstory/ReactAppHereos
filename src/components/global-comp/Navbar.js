import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useNav } from '../../hooks/useNav';

export const Navbar = () => {

    const {handleLogout} = useNav();
    const {user} = useContext(AuthContext);
    const { logout ,logged} = useContext(AuthContext);

    const submitLogout = () => {

        logout();
        handleLogout();

    }

    return (
        <nav className="row navbar navbar-expand-sm navbar-dark bg-dark ">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="./"><strong>Home</strong></NavLink>
                        </li>
                        <li className="nav-item">
                            {/* modo viejo para resaltar navlink activo, ahora lo hace auto! */}
                            <NavLink className={({isActive})=> `nav-link ${isActive && "active"}`
                             } to="marvel">Marvel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="dc">DC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="search">Search</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <p className='nav-item text-warning m-1 me-3'>
                            {/* si pongo un ? por delante de una prop. de un obj., si la prop. es undefined, no se muestra. */}
                            {user?.name}
                        </p>
                        <button type="button" className="btn btn-light px-3 me-2"
                        onClick={submitLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
