import React from 'react';
import {Card} from './card';
import './card.css'

export const CardList=(props)=>{
    return(
    
        <div className='card-list'>
        {
            props.personajes.map(personajes => 
                <Card key={personajes.id} personajes={personajes}/>)
        }
        </div>)
}