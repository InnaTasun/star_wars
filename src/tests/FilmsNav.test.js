import React from 'react';
import { render, screen } from '@testing-library/react';
import FilmsNav from '../сomponents/FilmsNav';

const data = [
  { title: 'Hero', episode_id: 1, url: 'https://domain/test/1/' },
  { title: 'SuperMan', episode_id: 2, url: 'https://domain/test/2/' },
  { title: 'SuperWoman', episode_id: 3, url: 'https://domain/test/3/' },
];

describe('FilmsNav component', () => {
  test('renders with data', () => {
    render(<FilmsNav dataArr={data} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('list').childElementCount).toBe(3);
  });

  test('renders without data', () => {
    render(<FilmsNav />);
    expect(screen.getByRole('list').childElementCount).toBe(0);
  });

  test('renders with or without className', () => {
    let container = render(<FilmsNav className='main-class' />).container;
    let firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('main-class films-list');

    container = render(<FilmsNav className='test-class' />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('test-class films-list');

    container = render(<FilmsNav />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).not.toContain('main-class');
    expect(firstDiv.className).toContain('films-list');
  });
});

test("FilmsNav snapshot", () => {
  const { container } = render(<FilmsNav />);
  expect(container).toMatchSnapshot();
});