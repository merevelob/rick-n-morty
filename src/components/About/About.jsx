import style from "../Card/Card.module.css";
import ownstyle from "./About.module.css";
import { mycard } from "./mycard";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    const {id, name, status, species, origin, image} = mycard;
    return (      
        <div className={ownstyle.mycard}>
            <div className={style.contenedor}>
                <span className={style.idnumber}>{id}</span>
                <img className={style.botonClose} src={require('../../images/rym_xbutton.png')} onClick={() => navigate('/home')}/>
                <img src={require('../../images/rym_scifi-frame.png')} className={style.frame}/>
                <div className={style.linkcontainer}>
                    <h2 className={style.nombre}>
                        <Link to={`/about/extra`} className={style.link}>{name}</Link>
                    </h2>
                </div>
                <div className={style.info}>
                    <img src={require('../../images/rym_sci-fi-screen.png')} className={style.screen} />
                    <div className={style.icons}>
                        <img src={require('../../images/rym_skull-icon.png')} />
                        <img src={require('../../images/rym_alien-icon.png')} />
                        <img src={require('../../images/rym_planet-icon-black.png')} />
                    </div>
                    <div className={style.propiedades}>
                        <h2>{status}</h2>
                        <h2>{species}</h2>
                        <h2>{origin.name}</h2>
                    </div>
                </div>
                <div className={style.imagecont}>
                    <img src={image} alt='Mauricio' className={style.charpic} />
                    <img src={require('../../images/rym_circle-frame.png')} className={style.circlefr} />
                </div>
            </div>
        </div>  
    )
}