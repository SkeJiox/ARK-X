const fs = require('fs');
const readline = require('readline');
const EventEmitter = require('events');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const eventEmitter = new EventEmitter();


const ATM_EVENTS = {
    deposit: 'deposit',
    withdraw: 'withdraw'
};

let myData = [];
console.log("****** Bienvenue ******");
const choises = () => ['1 : Créer un compte', '2 : Connexion', '3 : Quitter'].forEach((x => console.log(x)))

const trait = () => {
    choises()
    rl.question('Veuillez Choisir une Action : ', (choise) => {
        switch (choise) {
            case '1':
                console.log("****** Création du Compte ******");
                createAcc()
                break;
            case '2':
                console.log("****** Connexion ******");
                login()
                break;
            case '3':
                rl.close();
                console.log("****** Au Revoir ******");
                break;
            default:
                console.log("****** Veuillez Choisir entre (1-2-3) ******");
                trait();
        }
    });
}

let id = 1001;
let balance = 0;
let transactions = [];
let currentAccount;




const choises2 = () => ["****** Bienvenue dans le menu des opérations : ******",'1. Vérifier le solde.', "2. Déposer de l'argent.", "3. Retirer de l'argent.","4. Voir l'historique des transactions?","5. Quitter."]
    .forEach((x => console.log(x)))


let max_per_day=2000;
let max_per_trans=4000;



eventEmitter.on(ATM_EVENTS.deposit, (amount) => {
    console.log(`** Vous avez déposé ${amount}Dh avec succès.`);
    deposit();
});

eventEmitter.on(ATM_EVENTS.withdraw, (amount) => {
    console.log(`** Vous avez retiré ${amount}Dh avec succès.`);
    withdraw()
});

trait();
