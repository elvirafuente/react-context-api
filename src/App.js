import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import FormAddMovie from './FormAddMovie';

import {MovieProvider} from './MovieContext';


export default function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <FormAddMovie />
        <ul className="App">
            <MovieList />
        </ul>
      </div>
    </MovieProvider>
  );
}

