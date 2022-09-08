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

//---------------------------------------------------------------
// FUNCTIONS 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = ""; 
    result += "The "+myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb+".";
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike","slow","flew","quickly"));

//---------------------------------------------------------------
// Arrays

// any data type in an array
var ourArray = ["John", 23];
var ourArray2 = [["John", 23], ["everything", 101010]];

var myArray = [["Quincy", 1],["string", 23]];


// arrays can be changed
var numArr = [18, 12, 32];
numArr[1] = 123;
console.log(numArr);

var myArr = [[1,2,3],[4,5,6],[[12,13,14],12]];
console.log(myArr[3][0]);

// appending in an array to the end: use push()
var thatArr = [["string", 12],["that", 13]];
thatArr.push(["what", 14]);
console.log(thatArr[2]);


// remove items from the array from the end: use pop()
thatArr = [["John",23],["jordan", 7]];
var removedElement = thatArr.pop();
console.log(thatArr);
console.log(removedElement);


// removing the first element instead of the last one: use shift()
thatArr = [["John",23],["jordan", 7]];
var removedElement = thatArr.shift();
console.log(thatArr);
console.log(removedElement);

// adding elements to the beginning of the array: use unshift()
thatArr = [["John",23],["jordan", 7]];
thatArr.shift();
thatArr.unshift(["Ronaldo", 11]);
console.log(thatArr);

//---------------------------------------------------------------
// NESTED ARRAY
var myList = [["cereal", 3],["milk",2],["banana", 3],["juice", 2], ["eggs", 12]];

//---------------------------------------------------------------
// FUNCTIONS

function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();


//---------------------------------------------------------------
// SCOPE OF VARIABLES

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;     // NOTE:::::::: if no use of "var" keyword in a function, then the variable becomes global automatically
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();


// LOCAL SCOPE
var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit());    // returns "sweater"
console.log(outerWear);     // returns "T-Shirt"

// RETURNING A VALUE FROM A FUNCTION
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

//---------------------------------------------------------------
// UNDERSTANDING "undefined" VALUE RETURNED FROM A FUNCTION




//---------------------------------------------------------------
//---------------------------------------------------------------
