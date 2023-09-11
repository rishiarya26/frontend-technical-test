import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VehicleCard from '..';
import useModal from '../../../hooks/useModal';

jest.mock('../../../hooks/useModal');

const mockProps = {
  name: "xe",
  price: "£30,000",
  description: "The most advanced, efficient and refined sports saloon",
  media: ["mock-square-image.jpg", "mock-wide-image.jpg"]
  
};

describe('VehicleCard Component', () => {
    it('Should render vehicleCard Component without errors', () => {
      useModal.mockReturnValue({visible : false, show: jest.fn(), close: jest.fn()});

    const { queryByTestId } = render(
        <VehicleCard
            name={mockProps.name}
            media={mockProps.media}
            price={mockProps.price}
            description={mockProps.description}
        />
    );

    expect(queryByTestId("test-vehicle-card")).not.toBeNull();
    expect(queryByTestId("test-vehicle-card-title")).not.toBeNull();
    expect(queryByTestId("test-vehicle-card-price")).not.toBeNull();
    expect(queryByTestId("test-vehicle-card-description")).not.toBeNull();
    });


    it('Should open modal when card is clicked', () => {
        const show = jest.fn()
        useModal.mockReturnValue({visible : false, show: show, close: jest.fn()});

        const { queryByTestId } = render(
          <VehicleCard
              name={mockProps.name}
              media={mockProps.media}
              price={mockProps.price}
              description={mockProps.description}
          />
      );
  
        // Click the card to open the modal
        fireEvent.click(queryByTestId("test-vehicle-card"));
    
        // Verify that the show function was called
        expect(show).toHaveBeenCalled();
      });
})