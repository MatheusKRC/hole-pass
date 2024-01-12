import { render, screen } from '@testing-library/react';
import Home from '../../Pages/Home';
import { createRenderer } from 'react-dom/test-utils';

describe('teste', () => {
  test('teste1', () => {
    createRenderer(<Home />);

    const test = screen.getAllByRole('img');
    expect(test).toBeInTheDocument();
  });
});
