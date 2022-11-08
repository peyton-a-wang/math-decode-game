/**
 * Gets the unique characters in a string and removes spaces.
 * @param {int} s String of characters to be counted.
 * @returns {Array} Array of unique characters in s.
 */
export function getUniqueChars(s) {
  return Array.from(new Set(s.toUpperCase().replace(/\s/g, '')));
}

/**
 * Gets the total number of possible expression permutations.
 * @param {int} s String of characters to be counted.
 * @param {int} addBound Upper bound for addition. 
 * @param {int} multBound Upper bound for multiplication.
 * @returns {int} The total number of expression permutations.
 */
export function getNumPerms(addBound = 0, multBound = 0) {
  return addBound ** 2 + multBound ** 2;
}