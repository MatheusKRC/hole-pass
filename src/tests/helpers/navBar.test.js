import { render, screen } from '@testing-library/react';
import Home from '../../Pages/Home';

describe('teste', () => {
  test('teste1', () => {
    render(<Home />);

    const test = screen.getAllByRole('img');
    expect(test).toBeInTheDocument();
  });
});
