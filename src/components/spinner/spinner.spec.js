import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Spinner from './spinner';

const makeSut = () => {
  renderWithTheme(<Spinner />);
};

describe('Spinner Component', () => {
  test('Should render with 4 divs', () => {
    makeSut();
    expect(screen.getByTestId('spinner').childElementCount).toBe(4);
  });
});
