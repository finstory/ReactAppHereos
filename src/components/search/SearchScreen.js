import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroByName } from "../../helpers/querys/getHeroByName";
import { useForm } from '../../hooks/useForm';

import queryString from 'query-string';
import { HeroCard } from "../hero/HeroCard";

import './searchScreen.css';

export const SearchScreen = () => {

  const navigate = useNavigate();
  //con el useLocation podemos usar las query http como dato para autocompletar y guardar nuestra busqueda al volver.
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [formValue, handleInputChange] = useForm({ element: q });
  const { name = q } = formValue;

  const [heroes, setHeroes] = useState(getHeroByName(q));

  const handleSubmit = (e) => {
    setHeroes(getHeroByName(name));
    e.preventDefault();
    navigate(`?q=${name}`);
    console.log(heroes);
  }
  return (
    <div className="row justify-content-center mt-4">

      <form className="row"
        onSubmit={handleSubmit}>
        <div className="form-group col-8">

          <input type="text"
            name="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="your Hero..."
            autoCapitalize="off"
            value={name}
            onChange={(handleInputChange)}
          />

        </div>
        <button type="submit"
          className="col-4 btn btn-warning p-0 m-0">Send</button>
        <hr className="mt-4" />
      </form>

      <div className='col-10 align-content-center'>
        <div className={`col-12 alert alert-warning align-content-center text-center p-2 ${(heroes.length > 0) && "notFound"}`}> Hero not found...</div>
        <div className="row justify-content-start">

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>

    </div>
  )

}