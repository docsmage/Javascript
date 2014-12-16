// Chapter 4 Notes

// 4.1 The most basic function syntax

var multiply = function (a, b) {
	return a * b;
};

// 4.2 A function has four parts:
// The name, the word 'function',
// the parameters (stored in parens),
// and the statement (in curly braces).

// When a function is invoked,
// it receives two additional parameters:
// this and arguments

// 4.3 Examples of invocation
console.log(multiply(4,5)); // 20
console.log(multiply(4,5,3)); // 20
console.log(multiply(4)); // NaN

// An invocation pattern determines how
// the this keyword us utilized 
// in the function.

// Method invocation: when a function is
// stored as a property of an object

var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc: 1;

	}
};

console.log(myObject.increment(2)); // 3

// from the textbook -- 
// document.writeLn(myObject.value); 
// writeLn writes Javascript code to a document
// since I do not have a document this line
// will not work.