import React from 'react';
import { render, screen } from '@testing-library/react';
import StarringNav from '../сomponents/StarringNav';

const data = [
  'https://films/test/1/',
  'https://films/test/2/',
  'https://films/test/3/',
  'https://films/test/4/',
];

describe('StarringNav component', () => {
  test('renders with data', () => {
    render(<StarringNav dataArr={data} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('list').childElementCount).toBe(4);
  });

  test('renders without data', () => {
    render(<StarringNav />);
    expect(screen.getByRole('list').childElementCount).toBe(0);
  });

  test('renders with or without className', () => {
    let container = render(<StarringNav className='main-class' />).container;
    let firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('main-class starring-list');

    container = render(<StarringNav className='test-class' />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('test-class starring-list');

    container = render(<StarringNav />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).not.toContain('main-class');
    expect(firstDiv.className).toContain('starring-list');
  });
});

test("StarringNav snapshot", () => {
  const { container } = render(<StarringNav />);
  expect(container).toMatchSnapshot();
});