import React from 'react';
import { render } from '@testing-library/react';
import CardInfo from '../cardInfo';

const mockProps = {
    name: 'Jaguar Model',
    price: '£60,000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

describe('CardInfo Component', () => {
    it('Should render card component properly without errors', () => {

      const { queryByTestId } = render(
        <CardInfo
          name={mockProps.name}
          price={mockProps.price}
          description={mockProps.description}
        />
      );

      expect(queryByTestId("test-vehicle-card-title")).not.toBeNull();
      expect(queryByTestId("test-vehicle-card-description")).not.toBeNull();
      expect(queryByTestId("test-vehicle-card-price")).not.toBeNull();
},
 it('Should display the title properly',() => {
    const { queryByTestId } = render(
        <CardInfo
          name={mockProps.name}
        />
      );
     expect(queryByTestId("test-vehicle-card-title")).not.toBeNull();
 }),
 it('Should display the description properly',() => {
    const { queryByTestId } = render(
        <CardInfo
          description={mockProps.description}
        />
      );
     expect(queryByTestId("test-vehicle-card-description")).not.toBeNull();
 }),
 it('Should display the price properly',() => {
    const { queryByTestId } = render(
        <CardInfo
          price={mockProps.price}
        />
      );
     expect(queryByTestId("test-vehicle-card-price")).not.toBeNull();
 }),
 it('Should load the read more button properly',() => {
    const { queryByTestId } = render(
        <CardInfo
        name={mockProps.name}
        price={mockProps.price}
        description={mockProps.description}
      />
      );
     expect(queryByTestId("test-vehicle-card-read-more")).not.toBeNull();
 })
)}
)