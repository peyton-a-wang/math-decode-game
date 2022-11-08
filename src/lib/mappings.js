import { getUniqueChars } from '@/lib/inputs.js'
import { generateExpInfo } from '@/lib/expressions.js'

/**
 * Formats an expression given an object with 2 constants and an operation.
 * @param {Object} expObj Expression object.
 * @returns {String} The formatted expression.
 */
function formatExp(expObj) {
  return `${expObj.var1} ${expObj.operation} ${expObj.var2}`;
}

/**
 * Sorts an object in ascending order of its keys.
 * @param {Object} unorderedObj Unordered object.
 * @returns {Object} The sorted object.
 */
function sortObjAscByKeys(unorderedObj) {
  return Object.keys(unorderedObj).sort().reduce(
    (obj, key) => { 
      obj[key] = unorderedObj[key]; 
      return obj;
    }, 
    {}
  );
}

/**
 * Creates { character: answer } and { character: expression } mappings. 
 * @param {Object} data Input data with the message and operation bounds.
 * @returns {Object} The object of 2 mappings.
 */
export function createMappingsData(data) {
  let charAnsMappings = {}, charExpMappings = {};

  // get data to be included in mappings
  const expArr = generateExpInfo(data.message, data.add_upper, data.mult_upper);
  const charArr = getUniqueChars(data.message);

  // accumulate both mapping objects
  for (let i = 0; i < charArr.length; i++) {
    charAnsMappings[charArr[i]] = expArr[i].answer;
    charExpMappings[charArr[i]] = formatExp(expArr[i]);
  }
  
  return {
    char_ans_mappings: sortObjAscByKeys(charAnsMappings),
    char_exp_mappings: charExpMappings,
  };
}
