const reverseString = function(string) {
    let words = string;
    let characterArray = words.split("");
    let reversed = characterArray.reverse();
    let reversedString = reversed.join("");
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
