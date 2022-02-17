import calculator from "../functions/calculator";

test('basic arithmetic operations', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(-2, 33)).toBe(31);
  expect(calculator.add(0, -100)).toBe(-100);

  expect(calculator.subtract(0, -100)).toBe(100);
  expect(calculator.subtract(120, -100)).toBe(220);
  expect(calculator.subtract(50, 25)).toBe(25);

  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.subtract(10, 10)).toBe(0);
  expect(calculator.subtract(1, 0)).toBe(1);

  expect(calculator.divide(1, 0)).toBe(Infinity);
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.divide(15, 2)).toBe(7.5);
});
