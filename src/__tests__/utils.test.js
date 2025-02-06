// src/__tests__/utils.test.js
const isPalindrome = require('../utils'); // Import the function

describe('isPalindrome', () => {
  test('should return true for a valid palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should return false for a non-palindrome', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('should return true for a palindrome with mixed case', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('should throw an error for non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar123')).toThrow();
  });

  test('should throw an error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow();
  });
});
