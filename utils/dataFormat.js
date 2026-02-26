export const firstLetterToUpperCase = (str) => {
  if (!str) {
    return "";
  }

  const firstLetter = str[0].toUpperCase();
  const restOfTheString = str.slice(1);
  const result = firstLetter + restOfTheString;

  return result;
};
