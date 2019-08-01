import React from 'react';

export default function Movie({data}){
    return (
        <>
            <h3>{data.name}</h3>    
            <p>{data.price}</p>
        </>
    );
} 