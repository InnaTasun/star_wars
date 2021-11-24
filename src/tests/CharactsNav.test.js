import React from 'react';
import { render, screen } from '@testing-library/react';
import CharactsNav from '../сomponents/CharactsNav';

const data = [
  'https://characts/test/1/',
  'https://characts/test/2/',
  'https://characts/test/3/',
  'https://characts/test/4/',
  'https://characts/test/5',
  'https://characts/test/6/',
  'https://characts/test/7/',
];

describe('CharactsNav component', () => {
  test('renders with data', () => {
    render(<CharactsNav dataArr={data} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('list').childElementCount).toBe(7);
  });

  test('renders without data', () => {
    render(<CharactsNav />);
    expect(screen.getByRole('list').childElementCount).toBe(0);
  });

  test('renders with or without className', () => {
    let container = render(<CharactsNav className='main-class' />).container;
    let firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('main-class characts-list');

    container = render(<CharactsNav className='test-class' />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('test-class characts-list');

    container = render(<CharactsNav />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).not.toContain('main-class');
    expect(firstDiv.className).toContain('characts-list');
  });
});

test("CharactsNav snapshot", () => {
  const { container } = render(<CharactsNav />);
  expect(container).toMatchSnapshot();
});