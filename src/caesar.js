const caesarModule = (function () {
  //create array of 26 letters in alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function caesar(input, shift, encode = true) {
    //return false if shift is 0, <-25, or >25
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    //create array of characters from input and ignore capital letters
    const inputArray = input.toLowerCase().split("");
    
    //map new array that contains the coded characters of input string
    const codedMessage = inputArray.map((char) => {
      //index of input char as it appears in alphabet array
      const charIndex = alphabet.indexOf(char);
      //index of coded char as it appears in alphabet array
      const toIndex = encode ? charIndex + shift : charIndex - shift;

      //do nothing to spaces and any other non-alphabet character
      if (!alphabet.includes(char)) {
        return char;
      };
      //if toIndex is past the end of alphabet, subtract 26 to wrap to start of alphabet
      if (toIndex > 25) {
        return alphabet[toIndex - 26];
      };
      //if toIndex is before beginning of alphabet, add 26 to wrap to end of alphabet
      if (toIndex < 0) {
        return alphabet[toIndex + 26];
      }; 
      //if none of above cases apply, return the coded letter at alphabet index [toIndex]
      return alphabet[toIndex]
    });
    //finally, return joined string of chars in codedMessage array
    return codedMessage.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
