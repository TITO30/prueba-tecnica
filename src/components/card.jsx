import React from 'react';
import'./card.css';

export const Card=(props)=>(
    <div className='card-character'>
        <img alt="personajes" className='image' src={props.personajes.image}></img>
        <h3>{props.personajes.name}</h3>
        <ul>
            <li><p>State: {props.personajes.status}</p></li>
            <li><p>Species: {props.personajes.species}</p></li>
            <li><p>Type: {props.personajes.type}</p></li>
            <li><p>Gender: {props.personajes.gender}</p></li>
            <li><p>Origin place: {props.personajes.origin.name}</p></li>
            <li><p>Location: {props.personajes.location.name}</p></li>
        </ul>
    </div>

)