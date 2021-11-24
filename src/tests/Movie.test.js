import React from 'react';
import { act } from 'react-dom/test-utils';
import Movie from '../сomponents/Movie';
import { render, screen } from '@testing-library/react';

const expected = { title: 'Last hope' };

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(() => {
    const fetchResponse = {
      ok: true,
      json: () => Promise.resolve(expected),
    };

    return Promise.resolve(fetchResponse);
  });
});

afterEach(() => {
  global.fetch.mockRestore();
});

describe('Movie component', () => {
  test('renders and data fetches', async () => {
    await act(async () => {
      render(<Movie />);
    });

    expect(screen.getByText(expected.title)).toBeInTheDocument();
    expect(screen.getByText(/characters/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('renders with className', async () => {
    await act(async () => {render(<Movie className='main' />)});
    expect(screen.getByText(/characters/i).parentElement.className).toContain('main');
  });

  test('renders without className', async () => {
    await act(async () => {render(<Movie />)});
    expect(screen.getByText(/characters/i).parentElement.className).not.toContain('main');
  });
});
