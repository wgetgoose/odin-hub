const palindromes = function (string) {
    let input = Array.from(string.toLowerCase().replace(/\W/g, ''));
    let newArray = [];
    let arrayIndex = 1;
    input.forEach(() => {
        newArray.push(input[input.length - arrayIndex]);
        ++arrayIndex;
    });
    for (let i = 0; i < input.length; ++i) {
        if (input[i] !== newArray[i]) return false;
      }
      return true;
};

console.log(palindromes('Racecar!'));

// Do not edit below this line
module.exports = palindromes;
