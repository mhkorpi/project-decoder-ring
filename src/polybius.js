const polybiusModule = (function () {

  function polybius(input, encode = true) {
    //create polybius square
    //**NOTE** 
    //what this function refers to as "rows" and "columns" is the inverse of what you see in the polybius square as shown in the instructions
    const polybiusSquare = [
      ["a", "f", "l", "q", "v"],
      ["b", "g", "m", "r", "w"],
      ["c", "h", "n", "s", "x"],
      ["d", "(i/j)", "o", "t", "y"],
      ["e", "k", "p", "u", "z"],
    ];
    //create array of characters in input message and ignore capital letters
    const inputArray = input.toLowerCase().split("");

    //run this code when encode option is selected
    if (encode) {
      //maps new array from array if characters from `input`
      return inputArray.map((char) => {
        //checks for "i" or "j" and returns "42" for both
        if (char === "i" || char === "j") {
          return "42";
        //checks for space and returns space if true (ie., does not change spaces)
        } else if (char === " ") {
          return " ";
        //for all other letters, creats number pair by finding the letter in the polybius square, and returning the column and row adjusted for the 0-indexing
        } else {
          return polybiusSquare.reduce((accum, col) => {
            if (col.includes(char)) {
              const column = polybiusSquare.indexOf(col);
              const row = polybiusSquare[column].indexOf(char);
              accum = `${column + 1}${row + 1}`;
            }
            return accum;
          }, null);
        };
      }).join(""); 
      //since each number pair is stored as a string in an array, the join method concatenates them into a single string result
    };
    //run this code if the decode option is selected
    if (!encode) {
      //calculates number of spaces in the input string, which is a string of numbers and maybe spaces
      const numberOfSpaces = inputArray.reduce((accum, char) => {
        if (char === " ") accum++;
        return accum;
      }, 0);
      //calculates string length not including spaces
      const stringLength = inputArray.length - numberOfSpaces;
      //return false if length of string without spaces is an odd number
      if (stringLength % 2) {
        return false;
      };

      const numberPairs = [];
      let pair = "";
      //loops through array of numbers in input string
      for (let i = 0; i < inputArray.length; i++) {
        let number = inputArray[i];
        //if inputArray element is a space, add it to numberPairs array without pairing it with another number
        if (number === " ") {
          numberPairs.push(number);
        //if inputArray element is not a space and `pair` string is empty, assign the number to the `pair` string
        } else if (pair.length < 1) {
          pair += number;
        //if inputArray element is not a space and `pair` string is not empty, concatenate the number to the end of the `pair` string, push it to the numberPairs array, and reset `pair` string
        } else {
          pair += number;
          numberPairs.push(pair);
          pair = "";
        };
      };
      //return an array of the letters in the polybius square as referenced by each element in numberPairs
      return numberPairs.map((pair) => {
        if (pair === " ") return pair;
        const column = pair[0] - 1;
        const row = pair[1] - 1;
        return polybiusSquare[column][row];
      }).join(""); 
      //join method concatenates all individual letters into one string result
    };
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
