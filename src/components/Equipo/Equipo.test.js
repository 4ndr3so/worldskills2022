import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Equipo from './Equipo';

describe('<Equipo />', () => {
  test('it should mount', () => {
    render(<Equipo />);
    
    const equipo = screen.getByTestId('Equipo');

    expect(equipo).toBeInTheDocument();
  });
});