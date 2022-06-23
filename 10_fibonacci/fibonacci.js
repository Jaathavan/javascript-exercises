const fibonacci = function(num) {
    if (typeof(num) !== "number") {
        num = Number(num);
    }

    if (num === 1) return 1;
    else if (num < 0) return "OOPS";
    
    memo = memo || {};
    if (memo[num]) return memo[num];
    
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
};

// Do not edit below this line
module.exports = fibonacci;
