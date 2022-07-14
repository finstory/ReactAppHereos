import { useNavigate } from 'react-router-dom';


export const useNav = () => {

  const navigate = useNavigate();
  //con lastPath recordamos la última paguina visitada.
  const lastPath = localStorage.getItem("lastPath") || "/";

  const handleLogin = () => {

    navigate(lastPath, {
      replace: true
    });
  }

  const handleLogout = () => {
    navigate("/login", {
      replace: true
    });
  }

  const goBack = () => {
    navigate(-1);
  }


  return ({handleLogin,handleLogout,goBack}
  )
}
