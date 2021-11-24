import React from 'react';
import { render, screen } from '@testing-library/react';
import DescrInfoList from '../сomponents/DescrInfoList';

const data = [
  'https://domain/vehicles/1/',
  'https://domain/vehicles/2/',
  'https://domain/vehicles/3/',
  'https://domain/vehicles/4/',
  'https://domain/vehicles/5/',
  'https://domain/vehicles/6/',
];

describe('DescrInfoList component', () => {
  test('renders with data', () => {
    render(<DescrInfoList dataArr={data} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('list').childElementCount).toBe(6);
  });

  test('renders without data', () => {
    render(<DescrInfoList />);
    expect(screen.getByRole('list').childElementCount).toBe(0);
  });

  test('renders with or without className', () => {
    let container = render(<DescrInfoList className='main-class' />).container;
    let firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('main-class info-list');

    container = render(<DescrInfoList className='test-class' />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('test-class info-list');

    container = render(<DescrInfoList />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).not.toContain('main-class');
    expect(firstDiv.className).toContain('info-list');
  });
});

test("DescrInfoList snapshot", () => {
  const { container } = render(<DescrInfoList />);
  expect(container).toMatchSnapshot();
});