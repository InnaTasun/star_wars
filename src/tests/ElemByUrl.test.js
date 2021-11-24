import React from 'react';
import { act } from 'react-dom/test-utils';
import ElemByUrl from '../сomponents/ElemByUrl';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const expected = { name: 'Rickardo' };
const testUrl = 'https://domain/people/1/';

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

describe('ElemByUrl component', () => {
  test('renders with data and data fetches', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <ElemByUrl url={testUrl} elemType='navImg' mainProp='name' />
        </MemoryRouter>
      );
    });

    expect(screen.getByText(expected.name)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('renders without data', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <ElemByUrl />
        </MemoryRouter>
      );
    });
    expect(screen.queryByText(expected.name)).toBeNull();
    expect(screen.queryByRole('link')).toBeNull();
    expect(screen.queryByRole('img')).toBeNull();
  });

  test('renders with className', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <ElemByUrl
            url={testUrl}
            elemType='navImg'
            mainProp='name'
            className='main'
          />
        </MemoryRouter>
      );
    });
    expect(screen.getByRole('link').className).toContain('main');
    expect(screen.getByRole('link').className).toContain('element');
  });

  test('renders without className', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <ElemByUrl url={testUrl} elemType='navImg' mainProp='name' />
        </MemoryRouter>
      );
    });
    expect(screen.getByRole('link').className).not.toContain('main');
    expect(screen.getByRole('link').className).toContain('element');
  });
});
