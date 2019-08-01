import React, {useContext} from 'react';
import './App.css';
import {MovieContext} from './MovieContext'

export default function Nav(props){
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <nav className="nav">
            <h3>Películas</h3>    
            <p>Mi lista de Películas: {movies.length}</p>
        </nav>
    );
}  