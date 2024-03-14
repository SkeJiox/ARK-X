var firstName = "Zahir";
console.log("my first name is:" + firstName);
var lastName = "Youssef";
console.log("my last name is:" + lastName);

const PI = 3.14;
var radius = 10;

var favoriteSuperhero = "Guts";

var favoriteQuote = "Dreams Breathe Life Into Men & Can Cage Them In Suffering.";
console.log('my favorite quote is:"' + favoriteQuote + '"');

var fullName = firstName + " " + lastName;
console.log('my full name is:' + fullName);

var area = PI * Math.pow(radius, 2);
var perimeter = 2 * PI * radius;
console.log("The area of the circle is: " + area);
console.log("The perimeter of the circle is: " + perimeter);

var motivation = "A wise man named" +favoriteSuperhero + ":" +favoriteQuote;
console.log(motivation);

var number = 15;
if (number % 2 === 0) {
    console.log(number + ' is even.');
} else {
    console.log(number + ' is odd.');
} 

let a = 3;
let b = 10;
let temp;

temp = a;
a = b;
b = temp;
console.log("After swapping: a = ", a, " and b = ", b);

let day = 4;
switch (day) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        console.log("Unvalid Day");
}
console.log("Today is:" + day);

/*
let a = -15;    
let b = 6;   
let c = 2.6;   
let maximum ;
if (a >= b && a >= c) {
    maximum = a;
} else if (b >= a && b >= c) {
    maximum = b;
} else {
    maximum = c;
}
console.log("The max number is:" + maximum );
/Grade */

let score = 83;
let grade;
if (score > 85) {
    grade = 'A';
} else if (score > 70 && score <= 85 ) {
    grade = 'B';
} else if (score > 55 && score <= 70) {
    grade = 'C';
} else if (score > 40 && score <= 55) {
    grade = 'D';
} else if (score > 15 && score <= 40) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log("The student's grade is: "+ grade); 





