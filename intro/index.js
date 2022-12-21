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

console.log(a)  // prints in the console on the browser inspect element

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

// other method: start the string with single quotes and use the double where needed inside the string. 
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
var myStr = "My name is ";
myStr += myName;
console.log(myStr);

//---------------------------------------------------------------
// STRING LENGTHS

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

//---------------------------------------------------------------
// BRACKET NOTATIONS : find the value at a particular index

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

var myArr = [[1,2,3],[4,5,6],[7,8,9],[[12,13,14],12]];
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

function ourFunct(a, b) {
    console.log(a - b);
}
ourFunct(10,5);     // outputs 5

//---------------------------------------------------------------
// SCOPE OF VARIABLES

var myGlobal = 10;      // global variable

function fun1() {
    oopsGlobal = 5;     // NOTE::: if no use of "var" keyword in a function, then the variable becomes global automatically
}

function fun2() {
    var output = "";    // local variable
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

//---------------------------------------------------------------
// RETURNING A VALUE FROM A FUNCTION

function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));

//---------------------------------------------------------------
// UNDERSTANDING "undefined" VALUE RETURNED FROM A FUNCTION

var sum = 0;
function addThree() {
    sum = sum + 3;
    // we are not returning anything from the function here, so the return value is undefined, can be observed when we console.log this function
}

function addFive() {
    sum += 5;
    // undefined return val
}

//---------------------------------------------------------------
// ASSIGNMENT WITH A RETURN VALUE

var changed = 0;
function change(num){
    return (num + 5) / 3;
}

changed = change(10);   // assigns the return value from the function

//---------------------------------------------------------------
// STAND IN LINE

function nextInLine(arr, item) {
    arr.push(item);     // push to the end of the array
    return arr.shift();     // removes the first element of the array and returns it
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//---------------------------------------------------------------
// BOOLEAN VALUES

function welcomeToBooleans() {
    return true;
}

//---------------------------------------------------------------
// USE CONDITIONALS LOGIC WITH IF STATEMENTS

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));

//---------------------------------------------------------------
// STRICT EQUALITY OPERATOR

// does not do the type conversion like the normal equal operator '=='

/*
3 === 3     // gives true
3 === '3'   // gives false
// NOTE: both would return true if evaluated using the "==" (converted to the same type to compare)
*/

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not equal";
}
console.log(testStrict("7"));   // returns false
console.log(testStrict(7));   // returns true

//---------------------------------------------------------------
// STRICT INEQUALITY OPERATOR

// does not do the type conversion like the normal inequal operator '!='

/*
4 !== 4     // gives true
4 !== '4'   // gives false
// NOTE: both would return true if evaluated using the "!==" (converted to the same type to compare)
*/

//---------------------------------------------------------------
// SWITCH STATEMENTS

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        // not the comparison is val === 1 (strict comparison)
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gama";
            break;
        case 4:
            answer = "delta";
            break;
        default:    // like an else statement
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(caseInSwitch(3));   // prints "gama"


//---------------------------------------------------------------
// OBJECTS IN JS

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Adding new property to objects
ourDog.bark = "bow-wow";
// removing a property
delete ourDog.friends;

var myDog = {
    "name": "Doggo",
    "legs": 3,
    "tails": 2,
    "ifMale true": true,
    "friends": [""]
};

var doggName = myDog.name;      // sets to "Doggo"
var numLegs = myDog.legs;       // sets to 3
var isMale = myDog["ifMale true"];      // need to use the brackets for properties with spaces in their names

var dogName = "name";
var dog = myDog[dogName];       // prints "Doggo"

// change/set object property
myDog.name = "Happy Doggo";

// Adding new property to objects
myDog["bark"] = "woof!";

// deleting a property
delete myDog.legs;

// TESTING IF AN OBJECT HAS A PROPERTY OR NOT
function checkObj(checkProp) {
    if (myDog.hasOwnProperty(checkProp)) {
        return myDog[checkProp];
    }
    return "Not Found";
}

console.log(checkObj("hair"));      // false


//---------------------------------------------------------------
// MANIPULATING COMPLEX OBJECTS : JSON

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "trackts": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "trackts": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        // delete the prop
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];         // if exists, we set it equal to itself OR if it doesn't exist, set equal to an empty array
        collection[id][prop].push(value);       // push the new value to the end of the array
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
