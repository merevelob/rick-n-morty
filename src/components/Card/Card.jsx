import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Card.module.css";

function Card(props) {
   const {id, name, status, species, origin, image, onClose, addFav, removeFav, myFavourites} = props;
   
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavourites.forEach((fav) => {
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

   return (
      <div className={style.contenedor}>
         {isFav ? (
            <img src={require('../../images/rym_fav-button-active.png')} onClick={handleFavourite} className={style.botonFav} />
         ) : (
            <img src={require('../../images/rym_fav-button-normal.png')} onClick={handleFavourite} className={style.botonFav} />
         )}
         <span className={style.idnumber}>{tresDigitos(id)}</span>
         <img className={style.botonClose} onClick={() => onClose(id)} src={require('../../images/rym_xbutton.png')} />
         <img src={require('../../images/rym_scifi-frame.png')} className={style.frame}/>
         <div className={style.linkcontainer}>
            <h2 className={style.nombre}>
               <Link to={`/detail/${id}`} className={style.link}>{name}</Link>
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
            <img src={image} alt={`${name}`} className={style.charpic} />
            <img src={require('../../images/rym_circle-frame.png')} className={style.circlefr}/>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavourites: state.myFavourites
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);