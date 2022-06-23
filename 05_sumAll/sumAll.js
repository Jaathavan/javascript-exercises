const sumAll = function(a, b) {
    let sum=0;
    if (a>0 && b>0 && typeof(a)=="number" && typeof(b)==="number") {
        let x = Math.max(a, b)
        let y = Math.min(a, b)
        for (let i=y; i <= x; i++) {
            sum+=i;
        }
    }
    else {
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
