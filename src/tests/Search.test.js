import React from 'react';
import Search from '../сomponents/Search';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Search component', () => {
  test('renders', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search movie/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('works', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();

    render(
      <MemoryRouter>
        <Search onChange={onChange} onClick={onClick} />
      </MemoryRouter>
    );

    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('link');

    fireEvent.change(input, { target: { value: 'yoda' } });
    expect(onChange).toBeCalledTimes(1);
    expect(input.value).toContain('yoda');

    fireEvent.click(button, { bubbles: true });
    fireEvent.click(button, { bubbles: true });
    expect(onClick).toBeCalledTimes(2);
    expect(input.value).toBe('');
  });

  test('renders with or without className', () => {
    let container = render(
      <MemoryRouter>
        <Search className='main-class' />
      </MemoryRouter>
    ).container;
    let firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('main-class');
    expect(firstDiv.className).toContain('search');

    container = render(
      <MemoryRouter>
        <Search className='test-class' />
      </MemoryRouter>
    ).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain('test-class');
    expect(firstDiv.className).toContain('search');

    container = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    ).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).not.toContain('main-class');
    expect(firstDiv.className).toContain('search');
  });
});
