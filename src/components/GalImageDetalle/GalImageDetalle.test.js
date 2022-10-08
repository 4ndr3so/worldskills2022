import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GalImageDetalle from './GalImageDetalle';

describe('<GalImageDetalle />', () => {
  test('it should mount', () => {
    render(<GalImageDetalle />);
    
    const galImageDetalle = screen.getByTestId('GalImageDetalle');

    expect(galImageDetalle).toBeInTheDocument();
  });
});