import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SobreWs from './SobreWs';

describe('<SobreWs />', () => {
  test('it should mount', () => {
    render(<SobreWs />);
    
    const sobreWs = screen.getByTestId('SobreWs');

    expect(sobreWs).toBeInTheDocument();
  });
});