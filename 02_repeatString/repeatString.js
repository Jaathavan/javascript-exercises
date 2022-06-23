const repeatString = function(s, n) {
    let repeatedString="";
    if (n < 0) {
        return "ERROR"
    }
    else {
        for (let i=0; i < n; i++) {
            repeatedString+=s;
        }
        return repeatedString
    }
};

// Do not edit below this line
module.exports = repeatString;
