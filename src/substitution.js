const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    //if key alphabet is missing, or its length is not exactly 26, return false
    if (! alphabet || alphabet.length !== 26) return false;
    //create arrays of lower-case key alphabet and standard alphabet
    const keyAlphabet = alphabet.toLowerCase().split("");
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    //return false if a character appears more than once in key alphabet
    //loops through keyAlphabet array
    //filter method makes array of keyAlphabet[i] and .length counts frequency
    for (let i = 0; i < keyAlphabet.length; i++) {
      let currentChar = keyAlphabet[i];
      let currentCharCount = keyAlphabet.filter((char) => currentChar === char).length;
      if (currentCharCount > 1) return false;
    }
    //run this code if encode option is selected
    if (encode) {
      //toLowerCase() to ignore capital letters
      return input.toLowerCase().split("").map((char) => {
        if (char === " ") return char;
        //finds the index of the character in the standard alphabet, and encodes it to the character located at the same index in the key alphabet
        const toKeyIndex = standardAlphabet.indexOf(char);
        return keyAlphabet[toKeyIndex];
      }).join("");
    //run this code if decode option is selected
    } else if (!encode) {
      return input.toLowerCase().split("").map((char) => {
        if (char === " ") return char;
        //finds the index of the character in the key alphabet, and decodes it to the character located at the same index in the standard alphabet
        const toStandardIndex = keyAlphabet.indexOf(char);
        return standardAlphabet[toStandardIndex];
      }).join("");
      //join method concatenates array of decoded characters
    };

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
