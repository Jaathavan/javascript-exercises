const palindromes = function (str) {
    str.reduce((palindrome, currentLetter, currentIndex, str) => {
        currentLetter.match(/[a-z]/i);
    }, "")
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
