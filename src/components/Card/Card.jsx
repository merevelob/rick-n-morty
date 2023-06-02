import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Card.module.css";

function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavourites, allCharacters } = props;
   
   const { pathname } = useLocation();
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      allCharacters.forEach((fav) => {
         if (fav.id === props.id) setIsFav(true);
      });
   }, [myFavourites]);

   const tresDigitos = (num) => {
      const unCero = '0';
      const dobleCero = '00';
      if (num >= 1 && num <= 9) return dobleCero.concat(num);
      else if (num >= 10 && num <= 99) return unCero.concat(num);
      return num;
   };

   function handleFavourite() {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav(props);
      }
   }

   function newOnClose() {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      onClose(id);
   }

   return (
      <div className={style.contenedor}>
         {isFav ? (
            <img src={require('../../images/rym_fav-button-active.png')} onClick={handleFavourite} className={style.botonFav} alt="" />
         ) : (
            <img src={require('../../images/rym_fav-button-normal.png')} onClick={handleFavourite} className={style.botonFav} alt="" />
         )}
         <span className={style.idnumber}>{tresDigitos(id)}</span>
         {(pathname === '/home' ) ? (
            <img className={style.botonClose} onClick={newOnClose} src={require('../../images/rym_xbutton.png')} alt="" />
         ) : (
            <img className={style.noBoton} src={require('../../images/rym_no-button.png')} alt="" />
         )}
         <img src={require('../../images/rym_scifi-frame.png')} className={style.frame} alt="" />
         <div className={style.linkcontainer}>
            <h2 className={style.nombre}>
               {(id === 827) ? (
                  <Link to={`/about/extra`} className={style.link}>{name}</Link>
               ) : (
                  <Link to={`/detail/${id}`} className={style.link}>{name}</Link>
               )}
            </h2>
         </div>
         <div className={style.info}>
            <img src={require('../../images/rym_sci-fi-screen.png')} className={style.screen} alt="" />
            <div className={style.icons}>
               <img src={require('../../images/rym_skull-icon.png')} alt="skull icon" />
               <img src={require('../../images/rym_alien-icon.png')} alt="alien icon" />
               <img src={require('../../images/rym_planet-icon-black.png')} alt="planet icon" />
            </div>
            <div className={style.propiedades}>
               <h2>{status}</h2>
               <h2>{species}</h2>
               <h2>{origin.name}</h2>
            </div>
         </div>
         <div className={style.imagecont}>
            <img src={image} alt={`${name}`} className={style.charpic} />
            <img src={require('../../images/rym_circle-frame.png')} className={style.circlefr} alt="" />
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavourites: state.myFavourites,
      allCharacters: state.allCharacters
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);