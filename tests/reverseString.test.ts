import reverseString from '../functions/reverseString';

test('reverse a string', () => {
  expect(reverseString('')).toBe('');
  expect(reverseString('a')).toBe('a');
  expect(reverseString('abcde')).toBe('edcba');

  expect(reverseString('aabbaa')).toBe('aabbaa');
  expect(reverseString('desrever')).toBe('reversed');
});
