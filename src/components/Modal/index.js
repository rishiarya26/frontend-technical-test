import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const Modal = ({
  name,
  year = '',
  price,
  image,
  bodystyles = '',
  seats = '',
  emissions = '',
  visible,
  description,
  close
}) => {
  const VehileDetails = () => (
    <div className="modal-container">
      <header className="modal-header">
        <div>
          <h2>{`Jaguar ${name}`}</h2>
          <h4>{bodystyles}</h4>
        </div>
        <strong className="modal-header__right">{price}</strong>
      </header>
      <img src={image} className="modal-image" alt={name} />
      <section className="modal-body">
        <div className="modal-body__child">
          <strong>{year}</strong>
          <div>Model Year</div>
        </div>
        <div className="modal-body__child">
          <strong>{seats}</strong>
          <div>Seats</div>
        </div>
        <div className="modal-body__child">
          <strong>{`${emissions} g/km`}</strong>
          <div>CO2 Emission</div>
        </div>
      </section>
      <article className="modal-desc">
        {description}
      </article>
      <footer>
        <button
          className="modal-footer"
          type="button"
          onClick={close}
          aria-label="modal close button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'enter') {
              close();
            }
          }}
        >
          <strong>Close</strong>
        </button>
      </footer>
    </div>
  );

  return (
    visible
      ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <VehileDetails />
          </div>
          <div onClick={close} className="modal-overlay" tabIndex={0} role="button" onKeyDown={close} aria-label="Close Modal" />
        </div>,
        document.body
      )
      : null
  );
};

export default Modal;
