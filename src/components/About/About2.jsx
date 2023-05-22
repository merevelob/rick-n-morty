import { mycard } from "./mycard";
import style from '../Detail/Detail.module.css';

export default function About2() {
    const {id, name, status, species, gender, origin, image} = mycard;
    return (
        <div className={style.contenedor}>
            <div className={style.panel}>
                <img src={require('../../images/rym_sci-fi-screen.png')} className={style.screen} />
                <span className={style.idnumber}>{id}</span>
                <div className={style.linkcontainer}>
                    <h2 className={style.nombre}>{name}</h2>
                </div>
                <div className={style.info}>
                    <div className={style.icons}>
                        <img src={require('../../images/rym_skull-icon.png')} />
                        <img src={require('../../images/rym_alien-icon.png')} />
                        <img src={require('../../images/rym_gender-icon.png')} />
                        <img src={require('../../images/rym_planet-icon-black.png')} />
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
                <img src={require('../../images/rym_circle-frame.png')} className={style.circlefr}/>
            </div>
        </div>
    );
}