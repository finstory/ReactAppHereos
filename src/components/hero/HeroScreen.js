import React, { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/querys/getHeroById';
import { getImgById } from '../../helpers/querys/getImgById';
import { useNav } from '../../hooks/useNav';

export const HeroScreen = () => {

    const { heroId } = useParams();

    //memo para recordar último hero cargado y no renderizarlo si no cambia, además que es super importante hacer peticiones inecesarias a la base de datos.
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    const { id, superhero, alter_ego, publisher } = hero;

    const { goBack } = useNav();

    //con esta condición, si no existe un hero
    if (!hero) {
        return <Navigate to="/" />
    }



    return (
        <div className="col-10 card mb-sm-12 mt-sm-4 card-size 
        animate__animated animate__bounceInLeft animate__faster
        ">
            <div className="row justify-content-start g-0">

                <div className="col-12 col-md-5 col-sm-8">
                    <img src={getImgById(id)} className=" img-fluid p-0" alt={id} />
                </div>
                <div className="col-12 col-md-7 col-sm-4">
                    <div className="card-body ms-md-4 ms-sm-1">
                        <h5 className="card-title text-title-size mb-4 "><u className='bg-warning p-2 pt-0 '>{superhero}</u></h5>
                        <hr className='p-0 m-0' />

                        <p className="card-text text-size p-2 pt-0 pb-0 m-2 ms-0"><strong>Alter ego:</strong> {alter_ego}</p>

                        <hr className='p-0 m-0' />

                        <p className="card-text text-size  p-2 pt-0 pb-0 m-2 ms-0"><strong>Publisher:</strong> {publisher}</p>
                        <hr className='p-0 m-0' />
                        <p className="card-text text-size p-2 pt-0 pb-0 m-2 ms-0">
                            <strong>First Appearance:</strong> {hero.first_appearance}</p>
                        <hr className='p-0 m-0' />
                        <p className="card-text text-size p-2 pt-0 pb-0 m-2 ms-0">
                            <strong>Characters:</strong> {hero.characters}</p>
                        <hr className='p-0 m-0' />
                        <button onClick={goBack} className="col-6 col-sm-8 btn btn-outline-warning mt-4">Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
