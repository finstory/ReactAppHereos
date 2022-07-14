import { listHeroImg } from '../../data/listHeroImg';
export const getImgById = (name = "") => {
    const hero = listHeroImg.find(hero => hero.id.includes(name)) || { img: "", id: "" }

    return hero.img;
    ;
}
