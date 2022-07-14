import React, { useMemo } from 'react'
import { getHeroesbyPublisher } from '../../helpers/querys/getHeroesbyPublisher'
import { HeroCard } from './HeroCard';

export const ListHero = (publisher) => {

  const heroes = useMemo(() => getHeroesbyPublisher(publisher), [publisher]);

  return (

    <div className='col-10 align-content-center'>

      <div className="row justify-content-start">

        {
          heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))
        }
      </div>
    </div>


  )
}
