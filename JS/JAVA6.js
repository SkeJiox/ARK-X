console.log("a");
console.log("b");
console.log("c");
// Output: a b c

console.log("a");
setTimeout(function (){
    console.log("b");
}, 2000); 
console.log("c");
// Output: a c b

/*setTimeout(callback, ms):is a function that
calls the callback function given after the 
amount of miliseconds specified as the second parameter.*/
 
const readline = require('readline');
// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Ask a question and handle the answer using a callback
function askQuestion(question, callback) {
  rl.question(question, (answer) => {
    callback(answer); // Execute the callback with the user's answer
  });
}
// Usage example
askQuestion("What's your name? ", function (name) {
  console.log(`Hello, ${name}!`);
  rl.close(); // Close the Readline interface
});

///////////////////
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question and handle the answer using a callback
function askQuestion(question, callback) {
  rl.question(question, (answer) => {
    callback(answer); // Execute the callback with the user's answer
  });
}

// Usage example
askQuestion("What's your name? ", function (name) {
  console.log(`Hello, ${name}!`);
  rl.close(); // Close the Readline interface
});

///////Promises 
//Creating Promises:
const myPromise = new Promise(function (resolve, reject) {
  const alright = true;
      setTimeout(function () { 
          if (alright) resolve("Everything went well");
          else reject("Encountered an error");
      }, 2000)
  }); 

//Consuming Promises & chaining
console.log("1");
myPromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Promise completed");
  });
console.log("2");
// output: 
// 1
// 2
// Everything went well
// Promise completed

//Chaining
function myPromise(text, alright) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (alright) resolve(text);
      else reject("Encountered an error");
    }, 2000);
  });
}
myPromise("Hello", true)
  .then(function (value) {
    console.log(value);
    return myPromise("World", true);
  })
  .then(function (value) {
    console.log(value);
  }) 
  .catch(function (error) {    
    console.log(error);
  })
  .finally(function () {
    console.log("Promise completed");
  });

  /////Error Handling
  try {
    console.log("BEGIN");
    const res = divide(1, 0);
    console.log("Result = " + res); // won't execute
} catch(error) {
    console.log("An error has occured: " + error.message);
} finally {
    console.log("END");
}
// OUTPUT:
// BEGIN