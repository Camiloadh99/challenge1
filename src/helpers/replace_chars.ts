const replaceUnderscore = (word: string) => {
  return word.replace("_", " ");
};
/**
 *
 * @param word Any string containing numbers
 * @returns
 */
const removeNotNumericAndParse = (word: string) => {
  const parseWord = parseInt(word.replace(/[^0-9]/g, ""));
  if (isNaN(parseWord)) return 0;
  else return parseWord;
};
/**
 *
 * @param word Transform first char in cap
 * @returns
 */
const capitalize = (word: string) => {
  return word[0].toUpperCase() + word.substring(1);
};
/**
 *
 * @param word Remove any accent in a string
 * @returns
 */

const removeAccents = (word: string) => {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export {
  replaceUnderscore,
  removeNotNumericAndParse,
  capitalize,
  removeAccents,
};
