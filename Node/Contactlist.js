const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const contacts=[];
// Prompt the user for their name
function addContact(){
rl.question('What is your name? ', (name) => {
    rl.question('What is your phone number? ', (phoneNumber) => {
    contacts.push({name,phoneNumber});
    console.log('contact added lessgo !!\n');
      
     });
    }) ;
    showMenu()
}
function viewContacts(){
    if (contacts.length===0){
        console.log('contacts does not exists');
    } else{
        console.log('Contacts:');
        contacts.forEach(contacts=> {
            console.log(`Name ${contacts.name} , Phone number: ${contacts.phoneNumber}`); 
        });
        console.log('\n');
    }
    showMenu();
}

function searchContact(){
    rl.question('Name ??', (name)=> { 
        const foundContact = contacts.find(contacts => contacts.name ===name);
        if(foundContact) {
            console.log(`Contact found- Name: ${foundContact.name}, Phone: ${foundContact.phoneNumber}\n`) }
            else{
                console.log("There's not such a contact \n")
            }
        showMenu();
    });
}
function exitApp(){
    console.log("Exit this app.");
    rl.close();
}

function showMenu(){
    console.log('1. add contact');
    console.log('2.view contacts');
    console.log('3.Search for contact');
    console.log('4.exit app');


rl.question('Enter your choice: ', (choice) => {
    switch (choice.trim()) {
      case '1':
        addContact();
        break;
      case '2':
        viewContacts();
        break;
      case '3':
        searchContact();
        break;
      case '4':
        exitApp();
        break;
      default:
        console.log('Invalid choice. Please try again.\n');
        showMenu();
        break;
    }
  });
}

console.log('Welcome to the Contact Management System!\n');
showMenu();


