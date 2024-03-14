/////Event driven architecture
///Event
const EventEmitter = require('events');
const emitter = new EventEmitter();
//Register a listener
emitter.on('messageLogged',fucntion(){
    console.log('listener called');
})
//Raise an event
emitter.emit('messageLogged');


////Readline
const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for their name
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);

  // Close the readline interface
  rl.close();
});


