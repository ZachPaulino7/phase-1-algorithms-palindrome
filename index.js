//function reverseString(word) {
  
  //const wordArray = word.split("");
  //const reversedWordArray = wordArray.reverse();
  //const reversedWord = reversedWordArray.join("");
 
  //return reversedWord;

  //return word.split("").reverse().join("");
//}

//function isPalindrome(word) {
  //const reversedWord = reverseString(word);
  //if (word ===reversedWord){
 //   return true;
  //} else {
  //  return false;
 // }
//}


//function isPalindrome(word) {
  
 // const reversedWord = reverseString(word);
 // return word === reversedWord;
//}

//function isPalindrome(word) {
 // for (let i = 0; i < word.length / 2; i++) {
//    const j = word.length - 1 - i;
 //   if (word[i] !== word[j]) {
//      return false;
 //   }
// }
// return true;
//}

function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;