import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import About2 from './components/About/About2';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {   
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({data}) => {
            if (data.name && characters.findIndex(character => character.id === data.id) === -1) {
               setCharacters((currentChar) => [...currentChar, data]);
            } else window.alert('¡Ya se agregó un personaje con este Id!');})
         .catch((error) => {
            if (error.response) window.alert('¡No hay personajes con este Id!');
         });
   }
   
   function onClose(id) {
      setCharacters(characters.filter(character => character.id !== Number(id)));
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/about/extra' element={<About2 />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
