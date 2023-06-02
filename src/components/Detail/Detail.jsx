import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) setCharacter(data);
            })
         .catch((error) => {
            if (error.response) window.alert('¡No hay personajes con este Id!');
         });
        return setCharacter({});
    }, [id]);

    const tresDigitos = (num) => {
        const unCero = '0';
        const dobleCero = '00';
        if (num >= 1 && num <= 9) return dobleCero.concat(num);
        else if (num >= 10 && num <= 99) return unCero.concat(num);
        return num;
     };

    const { name, status, species, gender, origin, image } = character;
    
    if (name && status && species && gender && origin && image) {
        return (
            <div className={style.contenedor}>
                <div className={style.panel}>
                    <img src={require('../../images/rym_sci-fi-screen.png')} className={style.screen} alt="" />
                    <span className={style.idnumber}>{tresDigitos(id)}</span>
                    <div className={style.linkcontainer}>
                        <h2 className={style.nombre}>{name}</h2>
                    </div>
                    <div className={style.info}>
                        <div className={style.icons}>
                            <img src={require('../../images/rym_skull-icon.png')} alt="skull icon" />
                            <img src={require('../../images/rym_alien-icon.png')} alt="alien icon" />
                            <img src={require('../../images/rym_gender-icon.png')} alt="gender icon" />
                            <img src={require('../../images/rym_planet-icon-black.png')} alt="planet icon" />
                        </div>
                        <div className={style.propiedades}>
                            <h2>{status}</h2>
                            <h2>{species}</h2>
                            <h2>{gender}</h2>
                            <h2>{origin.name}</h2>
                        </div>
                    </div>
                </div>
                <div className={style.imagecont}>
                    <img src={image} alt={`${name}`} className={style.charpic} />
                    <img src={require('../../images/rym_circle-frame.png')} className={style.circlefr} alt="" />
                </div>
            </div>
        );
    }
}