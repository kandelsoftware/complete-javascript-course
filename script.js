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
console.log(typeof x);
*/

//Operators precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

