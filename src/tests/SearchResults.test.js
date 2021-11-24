import React from 'react';
import { act } from 'react-dom/test-utils';
import SearchResults from '../сomponents/SearchResults';
import { render, screen } from '@testing-library/react';

const expected = {
  results: [{ title: 'Last hope' }, { name: 'Lando' }, { name: 'Colamina' }],
};

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

describe('SearchResults component', () => {
  test('renders and data fetches', async () => {
    await act(async () => {
      render(<SearchResults />);
    });

    expect(screen.getByText(/search results/i)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('list').childElementCount).toBe(6);
  });

  test('renders with className', async () => {
    await act(async () => {
      render(<SearchResults className='main' />);
    });
    expect(
      screen.getByText(/search results/i).parentElement.className
    ).toContain('main');
  });

  test('renders without className', async () => {
    await act(async () => {
      render(<SearchResults />);
    });
    expect(
      screen.getByText(/search results/i).parentElement.className
    ).not.toContain('main');
  });
});
