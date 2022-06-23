const removeFromArray = function(array, ...rem) {
    let arr = array;
    return array.filter(remove => !rem.includes(remove));
};

// Do not edit below this line
module.exports = removeFromArray;
