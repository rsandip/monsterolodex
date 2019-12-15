import React from 'react'

import './Card.style.css'

export const Card = (props) => {
    return(
        <div className='cardContainer'>
            <img 
                alt="monster"
                src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}