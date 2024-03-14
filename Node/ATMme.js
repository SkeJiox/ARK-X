const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Welcome to our ATM");

 const accountid= rl.question('Enter your AccountID: ');
 const Pin= r1.question('Enter your PIN:' );

  try{
    const data=JSON.parse(fs.readFile('users.json','utf8'))
    const account = data.find(account => account.accountID === accountid);
 
 // if (account== data.accountID && PIN== data.accountID.pin)
 if (account && Pin=== account.pin) {
        console.log("Connexion réussie !");
        console.log("\n Chosir une option:  ");
        OperationMenu();
    } else {
        console.log("Invalide identifiant . Try again.");
  }  } catch (error) {
    console.error("Erreur to read the json file:", error);
}

function OperationMenu(){
    console.log("Bienvenue dans le menu des operations :");
    console.log("1. Checking Balance");
    console.log("2. Depositing Money");
    console.log("3. Withdrawing Money");
    console.log("4. Viewing Transaction History");
    console.log("5. Quitté");
    const choix = rl.question("Veuillez selectioné une option");
    TraiterChoix(choix);
}

function TraiterChoix(choix) {
    switch (choix) {
        case 1:
            console.log("Vous avez sélectionné l'option 1.");
            console.log('votre balance est : ')
        case 2:
            console.log("Vous avez sélectionné l'option 2.");
            console.log('votre deposit est :')
        case 3:
                console.log("Vous avez sélectionné l'option 3");
              
         case 4:
                console.log("Vous avez sélectionné l'option 4");
         case 5 :
               console.log("Merci pour etre un fidele client");    
        default:
            console.log("Option non valide. Veuillez sélectionner une option valide.");
            OperationMenu();
            break;
    }
}