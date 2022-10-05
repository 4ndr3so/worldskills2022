import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogroCont from './LogroCont';

describe('<LogroCont />', () => {
  test('it should mount', () => {
    render(<LogroCont />);
    
    const logroCont = screen.getByTestId('LogroCont');

    expect(logroCont).toBeInTheDocument();
  });
});