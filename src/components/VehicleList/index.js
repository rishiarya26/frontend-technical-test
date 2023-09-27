import React from 'react';
import useData from './useData';
import './style.scss';
import VehicleCard from '../VehicleCard';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <main className="container" data-testid="results">
      {vehicles.length > 0 && vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          name={vehicle.id}
          price={vehicle.price}
          description={vehicle.description}
          media={vehicle.media}
          modelYear={vehicle.modelYear}
          bodystyles={vehicle.meta.bodystyles}
          drivetrain={vehicle.meta.drivetrain}
          seats={vehicle.meta.passengers}
          emissions={vehicle.meta.emissions.value}
        />
      ))}
    </main>
  );
}
