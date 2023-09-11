import React from 'react';
import './style.scss';

const CardInfo = ({
  name,
  price,
  description,
  show
}) => {
  return (
    <div className="card-info">
      {name && (
      <h2
        className="card-info__title"
        data-testid="test-vehicle-card-title"
        aria-label={`JAGUAR ${name}`}
      >
        {`JAGUAR ${name}`}
      </h2>
      )}
      {price && (
      <p
        className="card-info__price"
        data-testid="test-vehicle-card-price"
      >
        From
        {' '}
        {price}
      </p>
      )}
      {description && (
      <p
        className="card-info__desc line-clamp"
        data-testid="test-vehicle-card-description"
        aria-label={description}
      >
        {description}
      </p>
      )}
      <button
        className="card-info__readMore"
        data-testid="test-vehicle-card-read-more"
        aria-label="read more"
        onClick={show}
        tabIndex={0}
        type="button"
        onKeyDown={(e) => {
          if (e.key === 'enter') {
            show();
          }
        }}
      >
        Read More
      </button>
    </div>
  );
};

export default CardInfo;
