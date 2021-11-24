import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from '../сomponents/Description';
import * as DATA_TYPES from '../constants/dataTypes';

const dataPeople = {
  name: 'Bob',
  gender: 'male',
  birth_year: '2222',
  planet: 'https://domain/planets/2/',
  height: '185',
  mass: '70',
  skin_color: 'white',
  hair_color: 'white',
  eye_color: 'grey',
  starships: ['ss1', 'ss2', 'ss3'],
  vehicles: ['bike'],
};

const dataFilms = {
  title: 'Hope',
  episode_id: '4',
  release_date: '1970',
  director: 'Luk',
  producer: 'Roy, Pit',
  opening_crawl: 'Bla-bla in far galaxy',
  url: 'https://domain/films/1/',
};

describe('Description component', () => {
  test('renders with peopleData', () => {
    render(<Description dataType={DATA_TYPES.PEOPLE} data={dataPeople} />);
    const lists = screen.getAllByRole('list');
    expect(lists.length).toBe(2);
    expect(screen.getByText(/bob/i)).toBeInTheDocument();
    expect(screen.getByText(/2222/i)).toBeInTheDocument();
    expect(screen.getByText(/grey/i)).toBeInTheDocument();
    expect(lists[0].childElementCount).toBe(3);
    expect(lists[1].childElementCount).toBe(1);
  });

  test('renders with filmsData', () => {
    render(<Description dataType={DATA_TYPES.FILMS} data={dataFilms} />);
    expect(screen.queryByRole('list')).toBeNull();
    expect(screen.getByText(/hope/i)).toBeInTheDocument();
    expect(screen.getByText(/roy/i)).toBeInTheDocument();
    expect(screen.getByText(/bla-bla/i)).toBeInTheDocument();
  });

  test('renders without data', () => {
    render(<Description />);
    expect(screen.queryByText(/bob/i)).toBeNull();
    expect(screen.queryByText(/hope/i)).toBeNull();
    expect(screen.queryByRole('list')).toBeNull();
  });

  test('renders with or without className', () => {
    let container = render(
      <Description className='main-class' dataType='people' data={dataPeople} />
    ).container;
    let firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('main-class');

    container = render(
      <Description className='test-class' dataType='films' data={dataFilms} />
    ).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('test-class');

    container = render(
      <Description dataType='films' data={dataFilms} />
    ).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).not.toContain('main-class');
  });
});
