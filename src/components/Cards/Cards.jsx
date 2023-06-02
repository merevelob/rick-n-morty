import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   
   return (
      <div className={style.contenedor}>
         {characters.map((character) => {
            const { id, name, status, species, gender, origin, image } = character;
            return <Card
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin}
               image={image}
               onClose={onClose}
            />;
         })}
      </div>
   );
}
