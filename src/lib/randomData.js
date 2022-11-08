/**
 * Generates a random integer in [min, max).
 * @param {int} min Minimum bound of the range (inclusive).
 * @param {int} max Maximum bound of the range (exclusive).
 * @returns {int} The random integer.
 */
export function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

/**
 * Randomly generates data if the user didn't customize the game.
 * @returns {Object} The object of random data.
 */
export function generateRandomData() {
  let secret = "Hello world!";

  return {
    // TODO: make add_upper and mult_upper random,
    add_upper: 100,
    mult_upper: 15,
    message: secret,
  };
}

// TODO get random message
// export function getRandomMessage() {

// }