import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Main from './main';

describe('App Component', () => {
  test('Should start correctly', () => {
    renderWithTheme(<Main />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
