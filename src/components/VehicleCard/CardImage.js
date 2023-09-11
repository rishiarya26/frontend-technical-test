import React from 'react';
import './style.scss';

const CardImage = ({media, name}) => {
   const squareVehicleImg = media[1].url;
   const wideVehicleImg = media[0].url;

    return(
    <picture className="card-image" data-testid="test-card-image">
        <source media="(min-width:480px)" srcSet={wideVehicleImg} alt={name} />
        <img 
            src={squareVehicleImg} 
            alt={name} 
            className="card-image__mobile" 
        />
    </picture>
    )
}

export default CardImage;