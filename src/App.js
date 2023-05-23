// Helpers
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
// Components
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import About2 from './components/About/About2';
import Form from './components/Form/Form';

function App() {
   // Credenciales falsas
   const EMAIL = 'mock@mail.com';
   const PASSWORD = 'abc123';
   
   // Hooks
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const {pathname} = useLocation();
   const navigate = useNavigate();
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   // Funciones
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else alert('Email y/o password incorrectos.');
   }

   function guest() {
      setAccess(true);
      navigate('/home');
   }

   function logout() {
      setAccess(false);
   }

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
         {(pathname !== '/') && <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            <Route path='/' element={<Form login={login} guest={guest} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/about/extra' element={<About2 />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
