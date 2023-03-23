export const toUppercaseFirstLetterInTextBlock = (text) => {
  const arrOfWords = text.split(" ");
  const firstWord = arrOfWords[0];
  const formattedFirstWord =
    firstWord[0].toUpperCase() + firstWord.substring(1);

  arrOfWords.splice(0, 1, formattedFirstWord);
  const formattedText = arrOfWords.join(" ");

  return formattedText;
};
