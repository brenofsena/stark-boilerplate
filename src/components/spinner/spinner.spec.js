import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Spinner from './spinner';

describe('Spinner Component', () => {
  test('Should render with 4 divs', () => {
    renderWithTheme(<Spinner />);
    expect(screen.getByTestId('spinner').childElementCount).toBe(4);
  });
});
