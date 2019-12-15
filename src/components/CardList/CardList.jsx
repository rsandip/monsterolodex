import React from 'react'


import { Card } from '../Card/CardComponent'

import './CardList.style.css'

export const CardList = (props) => {
    return(
    <div className="card-list">
    { props.monsters.map(monster => 
        <Card key={monster.id} monster={monster}/> 
    )}
    </div>
    )
}
