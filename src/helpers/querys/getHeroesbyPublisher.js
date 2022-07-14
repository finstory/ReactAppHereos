import { heroes } from "../../data/heroes";


export const getHeroesbyPublisher = ({publisher}) => {

    return heroes.filter (hero => hero.publisher === publisher);
}