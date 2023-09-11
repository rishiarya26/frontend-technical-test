import React from 'react';
import { render } from '@testing-library/react';
import CardImage from '../CardImage';

describe('CardImage Component', () => {
  it('Should load vehicle image', () => {
    const mockProps = {
      name: 'Jaguar image',
      media: ['mock-wide-image.jpg', 'mock-square-image.jpg'],
    };

    const { queryByTestId } = render(
      <CardImage name={mockProps.name} media={mockProps.media} />
    );

    expect(queryByTestId('test-card-image')).not.toBeNull();
  });
});
