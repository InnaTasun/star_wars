import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../сomponents/Main';

describe('Main component', () => {
  test('renders', () => {
    render(<Main />);
    expect(screen.getByText(/movies/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('renders with or without className', () => {
    let container = render(<Main className='main-class' />).container;
    let firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('main-class');

    container = render(<Main className='test-class' />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('test-class');

    container = render(<Main />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).not.toContain('main-class');
  });
});

test("Main snapshot", () => {
  const { container } = render(<Main />);
  expect(container).toMatchSnapshot();
});