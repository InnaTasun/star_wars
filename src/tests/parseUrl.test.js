import parseUrl from '../parseUrl';

describe('Function parseUrl', () => {
  test('works with correct data', () => {
    const url1 = 'https://domen/main/5/';
    const url2 = 'https://domen/about/3/';
    expect(parseUrl(url1).id).toBe('5');
    expect(parseUrl(url1).dataType).toBe('main');
    expect(parseUrl(url2).id).toBe('3');
    expect(parseUrl(url2).dataType).toBe('about');
  });

  test('works with incorrect data', () => {
    const url1 = 'https://domen/main/5';
    const url2 = 'https://domen/3/';
    const url3 = '/domen/main/5/';
    expect(parseUrl(url1).id).toBeNull();
    expect(parseUrl(url1).dataType).toBeNull();
    expect(parseUrl(url2).id).toBeNull();
    expect(parseUrl(url2).dataType).toBeNull();
    expect(parseUrl(url3).id).toBeNull();
    expect(parseUrl(url3).dataType).toBeNull();
  });

  test('works without data', () => {
    const url1 = '';
    const url2 = undefined;
    expect(parseUrl(url1).id).toBeNull();
    expect(parseUrl(url1).dataType).toBeNull();
    expect(parseUrl(url2).id).toBeNull();
    expect(parseUrl(url2).dataType).toBeNull();
  });
});
