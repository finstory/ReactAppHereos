import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="row justify-content-center text-center page-footer font-small blue mt-4 ">

                <div className="col-12 d-flex justify-content-center bg-dark">
                    <hr />
                    <div className="footer-copyright text-center text-light p-2">Powered  By
                        <Link to="./" className="text-light"> Facu  Neutral</Link>  ©  2022.
                    </div>
                </div>

            </footer>
  )
}
