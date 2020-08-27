import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('Should start correctly', () => {
    render(<App />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
