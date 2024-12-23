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
 * @param {string} text - The string to search.
 * @returns {string} - The secret word.
 * @example
 * findSecretWord("UcUNFYGaFYFYGtNUH") "cat"
 * findSecretWord("bEEFGBuFBRrHgUHlNFYaYr") "burglar"
 * findSecretWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") "embezzlement"
 * */
function findSecretWord(text) {
  return text.replace(/[A-Z]/g, "");
}

/**
 * Create a method in the Person class which returns how another person's age compares.
 * Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,
 * return a sentence in the following format:
 * {other person name} is {older than / younger than / the same age as} me.
 * */
class Person {
  /**
   * @param {string} name
   * @param {number} age
   * */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * Compares the age of another person with this person.
   * @param {Person} other
   * @returns {string}
   */

  /**
   * Compares the age of another person with this person.
   * @param {Person} otherPerson
   * @returns {string}
   * @throws {Error} Throws an error if the 'otherPerson' object or its 'name' and 'age' properties are not defined.
   * @example
   * p1 = new Person("Samuel", 24)
   * p2 = new Person("Joel", 36)
   * p3 = new Person("Lily", 24)
   * p1.compareAge(p2) => "Joel is older than me."
   * p2.compareAge(p1) => "Samuel is younger than me."
   * p1.compareAge(p3) => "Lily is the same age as me."
   */
  compareAge(otherPerson) {
    if (
      !otherPerson ||
      typeof otherPerson.name !== "string" ||
      typeof otherPerson.age !== "number"
    ) {
      throw new Error(
        "Invalid 'otherPerson' object: must have 'name' (string) and 'age' (number) properties."
      );
    }

    const comparison =
      this.age < otherPerson.age
        ? "older"
        : this.age > otherPerson.age
        ? "younger"
        : "the same age as";
    return `${otherPerson.name} is ${comparison} than me.`;
  }
}

/**
 * Returns a function that returns the provided string `input`.
 * @param {string} input
 * @returns {Function}
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
