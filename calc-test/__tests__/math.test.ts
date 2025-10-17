import { add, sub, mul, div } from '../src/utils/math';

test('basic math', () => {
  expect(add(2, 3)).toBe(5);
  expect(sub(5, 2)).toBe(3);
  expect(mul(3, 4)).toBe(12);
  expect(div(10, 2)).toBe(5);
});

test('div by zero', () => {
  expect(() => div(1, 0)).toThrow('Divisão por zero');
});