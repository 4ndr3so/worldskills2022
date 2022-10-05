import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HabilidadesCont from './HabilidadesCont';

describe('<HabilidadesCont />', () => {
  test('it should mount', () => {
    render(<HabilidadesCont />);
    
    const habilidadesCont = screen.getByTestId('HabilidadesCont');

    expect(habilidadesCont).toBeInTheDocument();
  });
});