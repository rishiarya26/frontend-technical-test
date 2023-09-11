import React from 'react';
import './style.scss'

const CardInfo = ({
   name,
   price,
   description,
}) => {
    return(
        <div className="card-info">
        {name && (
            <h2
                className="card-info__title"
                data-testid="test-vehicle-card-title"
            >
                {`JAGUAR ${name}`}
            </h2>
        )}
        {price && (
            <p
                className="card-info__price"
                data-testid="test-vehicle-card-price"
            >
                From {price}
            </p>
        )}
        {description && (
            <p
                className="card-info__desc line-clamp"
                data-testid="test-vehicle-card-description"
            >
                {description}
            </p>
        )}
            <p
                className="card-info__readMore"
                data-testid="test-vehicle-card-read-more"
            >
                Read More
            </p>
        </div>
    )

}

export default CardInfo;