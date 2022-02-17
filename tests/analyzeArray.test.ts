import analyzeArray from "../functions/analyzeArray";

test('analyze an array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([])).toStrictEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
  expect(analyzeArray([1, 3, 3])).toStrictEqual({
    average: 7 / 3,
    min: 1,
    max: 3,
    length: 3,
  });
  expect(analyzeArray([15, -13, 33])).toStrictEqual({
    average: 35 / 3,
    min: -13,
    max: 33,
    length: 3,
  });
});
