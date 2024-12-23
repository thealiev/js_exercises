/**
 * Checks if a string is empty
 * @param {string} text
 * @returns {boolean}
 * @example
 * isStringEmpty('abc'); => false
 * isStringEmpty(''); => true
 * isStringEmpty('   '); => true
 * isStringEmpty(); => throws error "text must be defined"
 */
function isStringEmpty(text) {
  if (text === undefined || text === null) {
    throw new Error("text must be defined");
  }
  return text.trim().length === 0;
}

/**
 * Truncates the input string to a specified number of characters.
 * @param {string} inputText - The input string to truncate.
 * @param {number} numberOfCharacters - The number of characters to keep.
 * @returns {string} - The truncated string.
 * @throws {Error} - Throws an error if the inputText is empty or numberOfCharacters is not provided.
 * @example
 * truncateString('Hello World', 2); => 'He'
 */
function truncateString(inputText, numberOfCharacters) {
  if (typeof inputText !== "string" || inputText.length === 0) {
    throw new Error("Input text must have at least one character");
  }

  if (typeof numberOfCharacters !== "number") {
    throw new Error("Please specify number of characters to extract");
  }

  return inputText.substring(0, numberOfCharacters);
}

/**
 * Creates a social media post hashtag from the given text.
 * @param {String} text - The input text to convert into a hashtag.
 * @returns {String} - The generated hashtag in camelCase format.
 * @throws {Error} - Throws an error if the text has fewer than three characters or is invalid.
 */
function createHashTag(text) {
  if (typeof text !== "string" || text.trim().length < 3) {
    throw new Error("Text should have at least three characters");
  }

  return (
    "#" +
    text
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("")
  );
}

/**
 * Write a function to format phone number as '+998 99 777 66 55'
 * @param {number|string} phoneNumber
 * @returns {string}
 * @throws {Error} 'Phone number must be either 9 or 12 characters long'
 * @example
 * formatPhoneNumber(998997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(7776655); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(777665544332211); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(); => throws error "Phone number must be either 9 or 12 characters long"
 */
function formatPhoneNumber(phoneNumber) {
  if (
    !phoneNumber ||
    (typeof phoneNumber !== "number" && typeof phoneNumber !== "string")
  ) {
    throw new Error("Phone number must be either 9 or 12 characters long");
  }

  const phoneNumberString = String(phoneNumber);
  const phoneNumberLength = phoneNumberString.length;

  if (phoneNumberLength === 9) {
    return `+998 ${phoneNumberString.slice(0, 2)} ${phoneNumberString.slice(
      2,
      5
    )} ${phoneNumberString.slice(5, 7)} ${phoneNumberString.slice(7)}`;
  } else if (phoneNumberLength === 12) {
    return `+${phoneNumberString.slice(0, 3)} ${phoneNumberString.slice(
      3,
      5
    )} ${phoneNumberString.slice(5, 8)} ${phoneNumberString.slice(
      8,
      10
    )} ${phoneNumberString.slice(10)}`;
  } else {
    throw new Error("Phone number must be either 9 or 12 characters long");
  }
}

/**
 * Write a function that transforms text to different cases
 * @param {string} inputText - The text to transform
 * @param {'camel'|'kebab'|'snake'} caseType - The type of case to transform to
 * @returns {string}
 * @example
 * changeTextCase('Hello World', 'camel'); => 'helloWorld'
 * changeTextCase('Hello World', 'kebab'); => 'hello-world'
 * changeTextCase('Hello World', 'snake'); => 'hello_world'
 */
function changeTextCase(inputText, caseType) {
  if (typeof inputText !== "string") {
    throw new Error("Input text must be a string");
  }

  const words = inputText.toLowerCase().split(" ");

  if (caseType === "camel") {
    return (
      words[0] +
      words
        .slice(1)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    );
  }
  if (caseType === "kebab") {
    return words.join("-");
  }
  if (caseType === "snake") {
    return words.join("_");
  }
  throw new Error("Invalid case type");
}

/**
 * Replace a given word in the text with the replacement word
 * @param {string} text - Some text
 * @param {string} wordToReplace - A word that needs to be replaced
 * @param {string} replacementWord - A new word that will replace 'wordToReplace' argument in the 'text'
 * @returns {string}
 * @example
 * const text = 'Winnie-the-Pooh is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard.';
 * const wordToReplace = 'Pooh';
 * const replacementWord = 'Puff'
 * replaceWordInText(text, wordToReplace, replacementWord); =>
 * 'Winnie-the-Puff is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard.'
 */
function replaceWordInText(text, wordToReplace, replacementWord) {
  if (
    typeof text !== "string" ||
    typeof wordToReplace !== "string" ||
    typeof replacementWord !== "string"
  ) {
    throw new Error("All arguments must be strings");
  }
  return text.replace(new RegExp(wordToReplace, "g"), replacementWord);
}

/**
 * Extracts a price in number format from the given text
 * @param {string} text the text to extract the price from
 * @returns {number|string} the extracted price or 'No matching price was found'
 * @example
 * extractPriceFromText('Apple price in market is $2.32 per kg now'); => 2.32
 * extractPriceFromText('Apple price in market is $5 per kg now'); => 5
 * extractPriceFromText('There were no apples left in the shop'); => 'No matching price was found'
 */
function extractPriceFromText(text) {
  if (typeof text !== "string") {
    throw new Error("Input must be a string");
  }
  const priceRegex = /\$(\d+(?:\.\d+)?)/;
  const match = text.match(priceRegex);
  return match ? Number.parseFloat(match[1]) : "No matching price was found";
}

module.exports = {
  changeTextCase,
  createHashTag,
  extractPriceFromText,
  isStringEmpty,
  replaceWordInText,
  truncateString,
  formatPhoneNumber,
};
