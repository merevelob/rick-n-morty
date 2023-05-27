import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
   const {characters, onClose} = props;
   return (
      <div className={style.contenedor}>
         {characters.map((character) => {
             const {id, name, status, species, origin, image} = character;
             return <Card
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               origin={origin}
               image={image}
               onClose={onClose}
            />;
         })}
      </div>
   );
}
