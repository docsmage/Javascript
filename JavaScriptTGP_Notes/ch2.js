// 2.1 Whitespace
// any amount of space between two things

// 2.2 Names
// a letter optionally followed by one or more letters, digits or underscores.

// 2.3 Numbers
0123456789

// 2.4 Strings
"String"

// 2.5 Statements
// A JavaScript statement is a command to the
// browser. Semicolons separate JS statements.
// Statements are executed in the sequence 
// in which they were written.
// Examples of statements include if & switch.
// While, for, and do are loop statements.
// A block is a set of statements wrapped in
// curly braces.

// A simple var statement
var birthyear = 1988;

// disruptive statement: break, return, throw

// if statement
var creditCheck = function(income)
{ if (income >= 100) 
    { return "You earn a lot of money! You qualify for a credit card.";}
  else (income < 100)
    { return "Alas you do not qualify for a credit card. Capitalism is cruel like that.";}
};

// switch statement
var grade = function(score)
	{ switch (score) {
		case 'score > 90':
			return "A";
			break;
		case 'score > 80':
			return "B";
			break;
		case 'score > 70':
			return "C";
			break;
		case 'score > 60':
			return "D";
			break;
		default:
			return "F";
	}; 
};

// for statement
for (var counter = 1; counter < 6; counter++) {
	console.log(counter);
} 

// while statement
var understand = true;

while(understand) {
	true;
	understand = false;
	}; 

// do statement
loopCondition = false;

do {
	true;	
} while (loopCondition);

// try/catch/throw statement -- 
// I can't code up an example,
// but here is the syntax.
try { 
	// code here
}
catch(error) { 
	// code to handle the error
}

// 2.6 Expressions

// An expression can assign values to one or 
// more variables or members, invoke a method,
// or delete a property from an object.
// The = operator is used for expression assignment.

// Simplest expressions are strings, numbers,
// variables, built-in values such as true/false
// /null/undefined/NaN/Infinity, or an expression
// followed by an operator.
// Operators such as && II and ?: can be used 
// to evaluate an expression.

name = "Renee" // super simple expression
console.log(typeof 8) // another type

// 2.7 Literals

// An object literal is 
// a comma-separated list of name-value pairs 
// wrapped in curly braces. Object literals 
// are used as a means of encapsulating data.
// Example:

var myObject = {
    sProp: 'some string value',
    numProp: 2,
    bProp: false
};

// 2.8 Functions

// From what I can tell, a function literal
// is basically just a function. 
// Syntactically, a function is made up of: 
// - a var statement
// - the function name (in CamelCase)
// - the keyword function
// - the parameters in parenthesis
// - the function body in curly brackets
// A function always ends with a semicolon.
// Example:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// End of notes for chapter 2