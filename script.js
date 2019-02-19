/**
 * Variables and data types


var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job)
job = 'Teacher'
console.log(job);


// Variables mutation and type correction
var firstName = 'John'
var age = 28;
console.log(firstName + '' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + 'is a' + age + 'years old ' + job + 'Is he married? ' + isMarried);
//variable mutation
age = 'twenty eight';

job = 'driver'
console.log(firstName + 'is a' + age + 'years old ' + job + 'Is he married? ' + isMarried);
var lastname = prompt('what is your name');
console.log(firstName + '' + lastname);
* /

/**
 *
 * basic operators

var year, yerarJohn, yaerMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yerarJohn);
console.log(now + 2);
console.log(now + 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "hello");
var x;


//Operators precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assigments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);
//more operators
x *= 2;
x++;
console.log(x);

console.log(typeof x);


//coding challanges -1

var markmass = 38;
var heightMark = 1.69;
var massjohn = 92;
var heightJohn = 1.95;
var markBmi = 38 / (heightMark * heightMark);
var johnBmi = 18 / (heightJohn * heightJohn);
console.log(markBmi, johnBmi);
var isHigher = markBmi > johnBmi;
console.log("Is Mark's Bmi higher than john ?" + isHigher);


var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married') {
    console.log(firstName + " is marriage");
} else {
    console.log(firstName + 'will hopefully marry soon')
}


var isMarried = true
if (isMarried) {
    console.log(firstName + " is marriage");
} else {
    console.log(firstName + 'will hopefully marry soon')
}



var markmass = 38;
var heightMark = 1.69;
var massjohn = 92;
var heightJohn = 1.95;
var markBmi = 38 / (heightMark * heightMark);
var johnBmi = 18 / (heightJohn * heightJohn);
if (markBmi > johnBmi) {
    console.log(" Mark's Bmi higher than john ");
} else {
    console.log(" John's Bmi higher than john")
}
*/

var firstName = 'John';
var age = 29;

if (age < 13) {
    console.log(firstName + "is a Boy")
} else if (age > 13 && age <= 20) {
    console.log(firstName + "is a  Young Man")
} else if (age >= 20 && age < 30) {
    console.log(firstName + " is a Young man")
} else {
    console.log(firstName + " is a Man");
}