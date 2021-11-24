import React from 'react';
import { act } from 'react-dom/test-utils';
import Character from '../сomponents/Character';
import { render, screen } from '@testing-library/react';

const expected = { name: 'Richard' };

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

describe('Character component', () => {
  test('renders and data fetches', async () => {
    await act(async () => {
      render(<Character />);
    });

    expect(screen.getByText(expected.name)).toBeInTheDocument();
    expect(screen.getByText(/movies starring/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('list').length).toBe(3);
  });

  test('renders with className', async () => {
    await act(async () => {render(<Character className='main' />)});
    expect(screen.getByText(/starring/i).parentElement.className).toContain('main');
  });

  test('renders without className', async () => {
    await act(async () => {render(<Character />)});
    expect(screen.getByText(/starring/i).parentElement.className).not.toContain('main');
  });
});
