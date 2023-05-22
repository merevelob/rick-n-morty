import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   const {idChar, name, status, species, gender, origin, image, onClose} = props;
   
   const tresDigitos = (num) => {
      const unCero = '0';
      const dobleCero = '00';
      if (num >= 1 && num <= 9) return dobleCero.concat(num);
      else if (num >= 10 && num <= 99) return unCero.concat(num);
      return num;
   };

   return (
      <div className={style.contenedor}>
         <span className={style.idnumber}>{tresDigitos(idChar)}</span>
         <img className={style.botonClose} onClick={() => onClose(idChar)} src={require('../../images/rym_xbutton.png')} />
         <img src={require('../../images/rym_scifi-frame.png')} className={style.frame}/>
         <div className={style.linkcontainer}>
            <h2 className={style.nombre}>
               <Link to={`/detail/${idChar}`} className={style.link}>{name}</Link>
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
               {/* <h2>{gender}</h2> */}
               <h2>{origin.name}</h2>
            </div>
         </div>
         <div className={style.imagecont}>
            <img src={image} alt={`${name}`} className={style.charpic} />
            <img src={require('../../images/rym_circle-frame.png')} className={style.circlefr}/>
         </div>
      </div>
   );
}
