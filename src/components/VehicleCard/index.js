import React from 'react';
import './style.scss';
import CardInfo from './CardInfo';
import useModal from '../../hooks/useModal';
import Modal from '../Modal';
import CardImage from './CardImage';

const VehicleCard = ({
  name,
  price,
  description,
  media,
  modelYear,
  bodystyles,
  drivetrain,
  seats,
  emissions
}) => {
  const { visible, show, close } = useModal();

  return (
    <>
      <section
        className="card"
        onClick={show}
        data-testid="test-vehicle-card"
        tabIndex={0}
        role="button"
        aria-label={`View details of ${name}`}
        onKeyDown={(e) => {
          if (e.key === 'enter') {
            close();
          }
        }}
      >
        <CardImage
          media={media}
          name={name}
          show={show}
        />
        <CardInfo
          name={name}
          description={description}
          price={price}
          show={show}
        />
      </section>
      <Modal
        name={name}
        price={price}
        description={description}
        image={media[0].url}
        year={modelYear}
        bodystyles={bodystyles}
        drivetrain={drivetrain}
        seats={seats}
        emissions={emissions}
        visible={visible}
        close={close}
      />
    </>
  );
};

export default VehicleCard;
