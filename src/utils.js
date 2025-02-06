// src/utils.js
function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (word === '') {
      return false; // Handle empty string case
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    const normalizedWord = word.toLowerCase();
    const reversedWord = normalizedWord.split('').reverse().join('');
    
    return normalizedWord === reversedWord;
  }
  
  module.exports = isPalindrome;
  