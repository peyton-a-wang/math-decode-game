import { getUniqueChars, getNumPerms } from '@/lib/inputs.js'
import { getRandInt } from '@/lib/randomData.js'

/**
 * Creates an expression object: 2 constants, 1 operator, and 1 answer.
 * @param {int} num Random number in [0, addBound ** 2 + multBound ** 2).
 * @param {int} addBound Upper bound for addition. 
 * @param {int} multBound Upper bound for multiplication.
 * @returns {Object} The expression object.
 */
function generateExpObj(num, addBound = 0, multBound = 0) {
  let x, y, ans, isAddition;
  const addPerms = addBound ** 2; // all permutations in the addition range

  // make expression vars for addition or multiplication based on random num
  if (num < addPerms) {
    isAddition = true;
    x = Math.floor(num / addBound) + 1;
    y = num % addBound + 1;
    ans = x + y;
  } else {
    num -= addPerms;
    isAddition = false;
    x = Math.floor(num / multBound) + 1;
    y = num % multBound + 1;
    ans = x * y;
  }

  return {
    var1: x,
    var2: y,
    operation: isAddition ? "+" : "x",
    answer: ans,
  };
}

/**
 * Creates an array of expression objects for each unique character in message.
 * @param {int} message Secret message to be "encoded".
 * @param {int} addBound Upper bound for addition. 
 * @param {int} multBound Upper bound for multiplication.
 * @returns {Array} The array of expression objects.
 */
export function generateExpInfo(message, addBound = 0, multBound = 0) {
  const numExps = getUniqueChars(message).length;
  const numPerms = getNumPerms(addBound, multBound); 
  let randNumSet = new Set(), ansSet = new Set();
  let expArr = [];

  // loop until enough expressions have been generated for each character
  while (expArr.length < numExps) {
    // there are numPerms total expression possibilities
    let lowerBound = 0, upperBound = numPerms;
    
    // ensures equal chance of making addition or multiplication expression
    if (addBound != 0 && multBound != 0) {
      let isAdd = getRandInt(0, 2);
      lowerBound = isAdd ? 0 : addBound**2;
      upperBound = isAdd ? addBound**2 : numPerms;
    }
    
    // generate random integer that hasn't been seen yet
    let randNum = getRandInt(lowerBound, upperBound);
    while (randNumSet.has(randNum)) {
      randNum = getRandInt(lowerBound, upperBound);
    }
    randNumSet.add(randNum);
    
    // generate expression with an answer that hasn't been seen yet
    let exp = generateExpObj(randNum, addBound, multBound);
    let ans = exp.answer;
    if (ansSet.has(ans)) {
      continue;
    }
    ansSet.add(ans);
    expArr.push(exp);
  }

  return expArr;
}