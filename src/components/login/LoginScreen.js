import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { useNav } from '../../hooks/useNav';
import { Footer } from '../global-comp/Foter';
import './loginScreen.css';
export const LoginScreen = () => {

  const [formValue, handleInputChange] = useForm({ firstName: "anonymous", lastName: "09" });
  
  const {firstName,lastName} = formValue;

  const { handleLogin } = useNav();
  const { login } = useContext(AuthContext);
  const handleSubmit = () => {
    login(`${firstName} ${lastName}`);
    handleLogin();
  }


  return (
    // <div>
    //   <button classNameName="btn btn-dark text-white mt-2 col-3"
    //     onClick={handleSubmit}
    //   >Login</button>

    // </div>
    <div className='row'>
      <menu className="col-12 p-0 m-0 vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">

              <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
                <span className="h1 fw-bold mb-0">Heroes App</span>
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4  pt-5 pt-xl-0 mt-xl-n5">

                <form style={{ width: "23rem" }}>

                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log in</h3>

                  <div className="form-outline mb-4">
                    <input type="name"
                    name="firstName"
                    id="form2Example18" className="form-control form-control-lg"
                      onChange={handleInputChange} />
                    <label className="form-label" for="form2Example18">First Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="name"
                    name="lastName" id="form2Example28" className="form-control form-control-lg" 
                    onChange={handleInputChange}/>
                    <label className="form-label" for="form2Example28">Last Name</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark text-light btn-lg btn-block" type="button"
                      onClick={handleSubmit}
                    >Login</button>
                  </div>

                  <p className="small mb-5 pb-lg-2"><Link className="text-muted" to="/login">Forgot password?</Link></p>
                  <p>Don't have an account? <Link to="/login" className="link-info">Register here</Link></p>

                </form>

              </div>

            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src="https://i.postimg.cc/zBWQSKnZ/heroes-in-crisis.jpg"
                alt="Login image" className="w-100 vh-100" style={{ objectFit: "cover", objectPosition: "left" }} />
            </div>
          </div>
        </div>
      </menu>

      <Footer />
    </div>
  )
}
