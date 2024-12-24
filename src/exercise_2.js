/**
 * Counts the number of matchsticks used for the houses.
 * @param {number} numberOfHouses
 * @returns {number}
 * @throws {Error} - Throws an error if numberOfHouses is not a non-negative integer.
 * @example
 * countMatchsticksInHouses(1) => 6
 * countMatchsticksInHouses(2) => 11
 * countMatchsticksInHouses(4) => 21
 * countMatchsticksInHouses(0) => 0
 */
function countMatchsticksInHouses(numberOfHouses) {
  if (!Number.isInteger(numberOfHouses) || numberOfHouses < 0) {
    throw new Error("numberOfHouses must be a non-negative integer");
  }
  return numberOfHouses === 0 ? 0 : numberOfHouses * 5 + 1;
}

/* The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00. */
/* Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. */
/* In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. */
/* The regexp should not match 123:456. */
const TIME_REGEX = /\b\d{2}:\d{2}\b/;

/**
 * Finds a secret word in a string of uppercase letters.
 * @param {string} text - The string to search.
 * @returns {string} - The secret word.
 * @throws {Error} - Throws an error if text is not a string.
 * @example
 * findSecretWord("UcUNFYGaFYFYGtNUH") => "cat"
 * findSecretWord("bEEFGBuFBRrHgUHlNFYaYr") => "burglar"
 * findSecretWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") => "embezzlement"
 */
function findSecretWord(text) {
  if (typeof text !== "string") {
    throw new Error("Input must be a string");
  }
  return text.replace(/[A-Z]/g, "");
}

/**
 * Create a method in the Person class which returns how another person's age compares.
 * Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,
 * return a sentence in the following format:
 * {other person name} is {older than / younger than / the same age as} me.
 */
class Person {
  /**
   * @param {string} name
   * @param {number} age
   */
  constructor(name, age) {
    if (typeof name !== "string" || typeof age !== "number") {
      throw new Error("Invalid arguments for Person constructor");
    }
    this.name = name;
    this.age = age;
  }

  /**
   * Compares the age of another person with this person.
   * @param {Person} other
   * @returns {string}
   * @throws {Error} Throws an error if the 'other' object or its 'name' and 'age' properties are not defined.
   */
  compareAge(other) {
    if (
      !other ||
      typeof other.name !== "string" ||
      typeof other.age !== "number"
    ) {
      throw new Error(
        "Invalid 'other' object: must have 'name' (string) and 'age' (number) properties."
      );
    }

    const comparison =
      this.age < other.age
        ? "older"
        : this.age > other.age
        ? "younger"
        : "the same age as";
    return `${other.name} is ${comparison} than me.`;
  }
}

/**
 * Returns a function that returns the provided string `input`.
 * @param {string} input
 * @returns {Function}
 * @throws {Error} - Throws an error if input is not a string.
 * @example
 * const f1 = redundant("apple");
 * f1(); // ➞ "apple"
 *
 * const f2 = redundant("pear");
 * f2(); // ➞ "pear"
 *
 * const f3 = redundant("");
 * f3(); // ➞ ""
 */
function redundant(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }
  return function () {
    return input;
  };
}

module.exports = {
  countMatchsticksInHouses,
  TIME_REGEX,
  findSecretWord,
  Person,
  redundant,
};
