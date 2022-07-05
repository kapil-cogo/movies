import logo from './logo.svg';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ReactDOM from "react-dom/client";
import MovieList from './MoviesList';
import { movies } from './movies';
import MovieItem from './MovieItem';
import { useState } from 'react';
//import Favourites from './Favourites';



 function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/:id' element={ <MovieItem /> } exact/>
      <Route path='/' element={ <MovieList /> } exact />
      {/* <Route path='/favourites' element={ <Favourites />} exact/>  */}
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
