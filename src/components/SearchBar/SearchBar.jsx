import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId] = useState('');

   function handleChange(event) {
      setId(event.target.value);
   }

   function randomSearch() {
      const randomNum = 1 + Math.floor(Math.random() * 826);
      onSearch(randomNum);
   }

   function cleanSearch() {
      onSearch(id);
      setId('');
   }

   function handleKeyPress(event) {
      if(event.key === 'Enter') cleanSearch();
   }

   return (
      <div className={style.contenedor}>
         <input type='search' placeholder="Ingresa Id de personaje" className={style.input} onChange={handleChange} value={id} onKeyDown={handleKeyPress} />
         <button className={style.boton} onClick={cleanSearch}>Agregar</button>
         <button className={style.randomButton} onClick={randomSearch}>Aleatorio</button>
      </div>
   );
}
