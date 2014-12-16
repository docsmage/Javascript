// Fun fact: objects in JavaScript are class-free.
// However, JavaScript includes a prototype linkage 
// feature that allows one object to inherit the
// properties of another.

// 3.1 Object literals
// An object literal is a pair of curly braces 
// surrounding zero or more name/value pairs.

var empty_object = {};

var human = {
	first_name: "Renee", // a typical variable name
	"last_name": "Schaaf", // ex. of a string name
	age: 26 // values can be diff data types
}

// 3.2 Retrieval
// Values can be retrieved from an object by 
// using [] (for string names) or dot notation
// (for variable names.)

human["last_name"] // "Renee"
human.age // 26

// You can use || to add a default value. 
human.middle_name || "none";

// 3.3 Update
// Updating a value is reassigning it to
// a new object. If the variable doesn't exist
// yet, it is just added in.

human["last_name"] = "Saadeh";
human.middle_name = "Carignan";

// 3.4 Reference
// Objects are passed around (but not copied)
// by reference.

var boy = "Robert";
boy.nickname = "Robbie";
var robbie = boy.nickname;

// 3.5 Prototype
// All objects created from object literals 
// are linked to Object.prototype
// You can select a new object prototype
// using the beget method. 
// The prototype link is used only in retrieval.
// This is useful in the same way that 
// inheritance is useful in Ruby.

// The code below implements the 'beget' tool
// to reassign the object prototype.
// If you comment these lines out and then 
// attempt to run the typeof call, you will
// get an error.
if (typeof Object.beget !== 'function') {
	Object.beget = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}

var another_human = Object.beget(human);
console.log(typeof another_human);

// 3.6 Reflection

// Object reflection is when you inspect
// a class (or object) and return it's 
// attributes and methods. This is useful
// in finding, comparing, and just 
// generally manipulating data.
// You can use typeof and hasOwnProperty 
// to inspect the method.

typeof human.age // 'number'
human.hasOwnProperty('last_name') // true

// 3.7 Enumeration -- pg 62, left off here.

// Enumeration is essentially using a for-in 
// loop to name the type of each object 
// in an array. 
// See example:

// var lists = document.getElementsByTagName("UL");
// for (var i = 0; i < lists.length; i++) {
// 	lists[i].className = "menu";
// }

// for (var i = 0; i < array.length; i++) {
// 	print(array[i]);
// }

// for (var key in object) {
// 	print(object[key]);
// }

// The above code won't run because a document
// isn't defined, so i'm gonna leave it 
// commented out.

// 3.8 Delete

// Deletes an object or a property
// of an object.

delete human.age

// 3.9 Global Abatement

// It is generally good practice to create a 
// single global variable for your application.
// The variable becomes the container for your app.

var HUMANS = {};
HUMANS.chrissel = {
	first_name: "Chrissel",
	last_name: "Orcino",
	age: 25
};

// This significantly reduces the likelhood of
// negative interactions with other applications,
// and also makes your code easier to read.
// This is a common interview question, so 
// remember this!

// end of notes for Chapter 3 - 
// ch4 begins on page 68