import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GaleriaVideHome from './GaleriaVideHome';

describe('<GaleriaVideHome />', () => {
  test('it should mount', () => {
    render(<GaleriaVideHome />);
    
    const galeriaVideHome = screen.getByTestId('GaleriaVideHome');

    expect(galeriaVideHome).toBeInTheDocument();
  });
});