import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

// con children todos los elementos html se herdan.
export const AuthPorvider = ({ children }) => {

  const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
      logged: !!user,
      user
    }
  }

  const [auth, dispatch] = useReducer(authReducer, {}, init)


  //si disparo login, se ejecuta dispatch, cambio de estado y logeo.
  const login = (name = "anonymous") => {
    //creo mi usuario.
    const user = {
      id: 12,
      name: name,
    }
    //se cambia mi estado en auth.
    dispatch({
      type: types.login,
      payload: user
    })
    //se guarda en localStorage.
    localStorage.setItem('user', JSON.stringify(user));
  }

  const logout = () => {
    //creo mi usuario.
    const user = {};
    //se cambia mi estado en auth.
    dispatch({
      type: types.logout,
      user});
    //se guarda en localStorage.
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ ...auth, login, logout}}>

      {children}

    </AuthContext.Provider>
  )
} 
