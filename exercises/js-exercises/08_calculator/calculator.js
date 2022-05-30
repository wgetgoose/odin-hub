const add = function(...args) {
	return (args[0]) + (args[1]);
};

const subtract = function(...args) {
	return (args[0]) - (args[1]);
};

const sum = function(array) {
  const fin = array.reduce (
    (previous, next) => previous + next, 0
  );
  return fin;
};

const multiply = function(arg) {
  const fin = arg.reduce(
    (previous, next) => (previous * next), 1
  );
  return fin;
};

const power = function(...args) {
  return Math.pow((args[0]), (args[1]));
};

const factorial = function(arg) {
  let initial = arg  
  let current = --arg
  let result;
  for (let i=0; i < arg; i++) {
    result = (initial * current);
    initial = result;
    current = --current;
  }
  return result;
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