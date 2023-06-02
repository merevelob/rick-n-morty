// Components
import { Nav, Cards, Detail, About, About2, Form, Favourites } from './components';
// Resources
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
// Constants
import { mycard } from './components/About/mycard';
import { EMAIL, PASSWORD } from './components/Form/credenciales';

function App() {
   // Hooks
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const { pathname } = useLocation();
   const navigate = useNavigate();
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   // Functions
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
      setCharacters([]);
      setAccess(false);
   }

   function onSearch(id) {   
      if (id === '827') {
         if (characters.findIndex(character => character.id === mycard.id) === -1) {
            setCharacters((currentChar) => [...currentChar, mycard]);
         } else window.alert('¡Ya se agregó un personaje con este id!');
         (pathname !== '/home') && navigate('/home');
      } else {
         axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({data}) => {
               if (data.name && characters.findIndex(character => character.id === data.id) === -1) {
                  setCharacters((currentChar) => [...currentChar, data]);
               } else window.alert('¡Ya se agregó un personaje con este id!');
               (pathname !== '/home') && navigate('/home');
            })
            .catch((error) => {
               if (error.response) window.alert('¡No hay personajes con este id!');
            });
      }
   }
   
   function onClose(id) {
      setCharacters(characters.filter(character => character.id !== Number(id)));
   }

   function clearAll() {
      setCharacters([]);
      (pathname !== '/home') && navigate('/home');
   }

   return (
      <div className='App'>
         {(pathname !== '/') && <Nav onSearch={onSearch} logout={logout} clearAll={clearAll} />}
         <Routes>
            <Route path='/' element={<Form login={login} guest={guest} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/about/extra' element={<About2 />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favourites' element={<Favourites />} />
         </Routes>
      </div>
   );
}

export default App;
