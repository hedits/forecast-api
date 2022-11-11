import { concat, double } from '../src/index';

describe('testing index file', () => {
  test('double function', () => {
    expect(double(5)).toBe(10);
  });

  test('test concat function', () => {
    expect(concat('Paul', ' ', 'McCartney')).toBe('Paul McCartney');
  });
});
