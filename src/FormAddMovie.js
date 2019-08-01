import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

export default function FormAddMovie (){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = event => {
        setName(event.target.value)
    }

    const updatePrice = event => {
        setPrice(event.target.value)
    }

    const addMovie = event => {
        event.preventDefault();
        setMovies(prevMovies => 
            [
                ...prevMovies, 
                {
                    name: name,
                    price: price,
                    id: prevMovies.length + 1
                }
            ]
        )
    }

    return ( 
        <form>
            <label htmlFor="name">
                Name of the movie
                <input type="text" name="name" onChange={updateName} value={name}/>
            </label>
            <label htmlFor="price">
                Price of the movie
                <input type="text" name="price" onChange={updatePrice} value={price}/>
            </label>
            <button type="button" onClick={addMovie}>Update</button>
        </form>
    );
}
