import React from 'react'
import { Link } from 'react-router-dom';
import { getImgById } from '../../helpers/querys/getImgById';



export const HeroCard = ({ superhero, id = "", first_appearance }) => {
    return (


        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0 mt-lg-3 animate__animated animate__bounceInLeft animate__faster"
        >
            <div className="card" >
                <h4 className="card-title text-center  p-1  bg-warning">{superhero}</h4>
                <img className="card-img-top rounded-0" src={`${getImgById(id)}`} alt="" />
                <div className="card-body col-12 align-items-start">
                    <hr />
                    {/* <h5 className="card-title ">Gock Maquen</h5> */}
                    <p className={`card-subtitle text mt-3
                    `}>{first_appearance}</p>

                    <Link to={`/hero/${id}`} className="col-6 btn btn-outline-warning text-black mt-4 mb-0"
                    >More</Link>

                </div>
            </div>
        </div>
    )
}
