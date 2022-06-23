const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.length ? array.reduce((product, nextItem) => product * nextItem) : 0;
};

const power = function(a, b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
  let factorial = 1;
  for (let i=1; i <= a; i++) {
    factorial*=i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
