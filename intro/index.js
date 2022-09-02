var number = 5;     // in-line comment

/*
this is a multi line 
comment
*/

//---------------------------------------------------------------
/* Data Types:

undefined: anything, null: nothing, boolean, string, symbol: unique val, number, object: key-value pairs
*/

var myName = "Pank"     // used throughout the prog
myName = 9

let ourName = "freeCodeCamp"    // only within the scope

const pi = 3.14     // can never change the values of a const

//---------------------------------------------------------------

var a;  // declaring
var b = 2;  // declaring and assigning

a = 7;  // assign
b = a;  // assign

console.log(a)  // prints in the console on the browser insect element

//---------------------------------------------------------------

// incrementing
var myVar = 87;
myVar++;

// decrementing
myVar--;

//---------------------------------------------------------------
// finding a remainder
var remainder;
remainder = 11 % 3;
console.log(remainder);

//---------------------------------------------------------------
a += 12;
b -= 9;

//---------------------------------------------------------------
var myFirsName = "Pank";
var myLastName= "rit";

// double quoted strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// other method
var myStr = '<a href="http://www.example.com" target="_blank">Link<\a>';

//---------------------------------------------------------------
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";


//---------------------------------------------------------------
// STRING CONCATENATION
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

var myStr = "This is the start " + "This is the end.";
console.log(myStr);

var ourStr = "This is the first sentence. ";
ourStr += "Thiss is a second sentence.";
console.log(ourStr);


var myName = "Pank";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

var myName = "Pank";
var myStr = "My name is "
myStr += myName;
console.log(myStr);

//---------------------------------------------------------------
// STRING LENGTHS

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

//---------------------------------------------------------------
// BRACKET NOTATIONS

var firstLetterOfFirstName = "";
var firstName = "Lovelace";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

