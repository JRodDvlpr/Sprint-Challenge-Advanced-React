import React from 'react';

const PlayerCards = (props) => {

    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.country}</p>
            <p>{props.searches}</p>
        </div>
    )
}

export default PlayerCards;