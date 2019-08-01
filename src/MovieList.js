import React, {useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext'

export default function MovieList(){
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Movie data={movie}/>
                </li>
            ))}
        </>
    );
}