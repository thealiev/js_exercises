/**
 * Counts the number of matchsticks used for the houses.
 * @param {number} numberOfHouses
 * @returns {number}
 * @example
 * countMatchsticksInHouses(1) => 6
 * countMatchsticksInHouses(2) => 11
 * countMatchsticksInHouses(4) => 21
 * countMatchsticksInHouses(0) => 0
 * See image here: https://edabit-challenges.s3.amazonaws.com/matchstick_houses.png
 */
function countMatchsticksInHouses(numberOfHouses) {
  if (numberOfHouses <= 0) return 0;
  return numberOfHouses * 5 + 1;
}

/* The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00. */
/* Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. */
/* In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. */
/* The regexp should not match 123:456. */
const TIME_REGEX = /\b\d{2}:\d{2}\b/;

/**
 * Finds a secret word in a string of uppercase letters.
 * The secret word is in lowercase and its letters are spread out in the string
 * @param {String} text
 * @returns {String}
 * @example
 * findSecretWord("UcUNFYGaFYFYGtNUH") => "cat"
 * findSecretWord("bEEFGBuFBRrHgUHlNFYaYr") => "burglar"
 * findSecretWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") => "embezzlement"
 * */
function findSecretWord(text) {
  let result = "";
  for (let char of text) {
    if (char === char.toLowerCase()) {
      result += char;
    }
  }
  return result;
}

/**
 * Create a method in the Person class which returns how another person's age compares.
 * Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,
 * return a sentence in the following format:
 * {other person name} is {older than / younger than / the same age as} me.
 * */
class Person {
  constructor(name, age) {
    this.#name = this.#validateName(name);
    this.#age = this.#validateAge(age);
  }

  #validateName(name) {
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Name must be a valid non-empty string.");
    }
    return name;
  }

  #validateAge(age) {
    if (typeof age !== "number" || Number.isNaN(age)) {
      throw new Error("Age must be a valid number.");
    }
    return age;
  }
  /**
   * Compares the age of another person and returns a sentence describing the comparison.
   * @param {Person} other - The other person object to compare against.
   * @returns {String} - A sentence indicating how the other person's age compares.
   */
  compareAge(other) {
   
}

/**
 * Returns a function that returns the provided string.
 * @param {String} inputString
 * @returns {Function}
 * @example
 * const getString1 = redundant("apple");
 * getString1() ➞ "apple"
 *
 * const getString2 = redundant("pear");
 * getString2() ➞ "pear"
 *
 * const getString3 = redundant("");
 * getString3() ➞ ""
 */
function redundant(inputString) {
  return function () {
    return inputString;
  };
}

module.exports = {
  countMatchsticksInHouses,
  TIME_REGEX,
  findSecretWord,
  Person,
  redundant,
};