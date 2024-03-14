let num = 5;

function factorial (){
  let result =1;
  for(let i=0 ; i<num ; i++)
   {
   result=result*i; } 
   return result; }

  console.log("final result is:" + factorial() );

  var num=123542;
  let count=0;
  while (10<=num) {
    num=num/10;
      ++count;} 
       console.log("le numero de digits est :" +count);
    


function countDigits(num) {
  let count = 0;
  while (num >= 10) {
    num = num / 10;
    ++count;
  }
  return count;
}
const num = 123542;
const digitCount = countDigits(num);
console.log("Le nombre de chiffres est : " + digitCount)


  function getDayName(dayNumber) {
  switch (dayNumber) {
      case 1:
          return "Monday";
      case 2:
          return "Tuesday";
      case 3:
          return "Wednesday";
      case 4:
          return "Thursday";
      case 5:
          return "Friday";
      case 6:
          return "Saturday";
      case 7:
          return "Sunday";
      default:
          return "Invalid Day";
  }
}
let dayName = getDayName(day);
console.log("Today is: " + dayName);    
   console.log("final result is:" + count);

let a = -15;
let b = 6;
let c = 2.6;
function findMaxNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
const maxNumber = findMaxNumber(a, b, c);
console.log('The maximum number is: ' + maxNumber); 



function calculateGrade(score) {
  let grade;
  if (score > 85) {
      grade = 'A';
  } else if (score > 70 && score <= 85 ) {
      grade = 'B';
  } else if ( score > 55 && score <= 70) {
      grade = 'C';
  } else if (score > 40 && score <= 55) {
      grade = 'D';
  } else if (score > 15 && score <= 40) {
      grade = 'E';
  } else {
      grade = 'F';
  }
  return grade;
}
let score = 83;
let grade = calculateGrade(score);
console.log("The student's grade is: " + grade);


 function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }
  function combinator(n, p) {
    const nFactorial = factorial(n);
    const pFactorial = factorial(p);
    const nMinusPFactorial = factorial(n - p);
  
    return nFactorial / (pFactorial * nMinusPFactorial);
  }


   function calculator(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      case "%":
        return num2 !== 0 ? num1 % num2 : "Cannot perform modulo with zero";
      case "c":
        const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
        return factorial(num1) / (factorial(num2) * factorial(num1 - num2));
      default:
        return "Invalid operator";
    }
  }
  
  
  



;



  
  

  