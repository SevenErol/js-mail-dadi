
const mailList = ["mariorossi@mail.com", "giuliaverdi@mail.com", "marcoblu@mail.com", "mariagialli@mail.com"];

const userMail = prompt("Inserisci qui la tua mail!");

const welcomeUser = document.querySelector("h1");

const randomButton = document.querySelector("button");

let counter = 0;

const playerNumber = document.getElementById("player_result");

const pcNumber = document.getElementById("pc_result");

const winner = document.getElementById("winner");


for (let i = 0; i < mailList.length; i++) {


    if (userMail === mailList[i]) {

        welcomeUser.innerHTML = `Benvenuto nella pagina: ${userMail}`;

    } else if (counter === mailList.length - 1) {

        welcomeUser.innerHTML = `Accesso negato`

    } else if (userMail !== mailList[i]) {

        counter++

    }

}

randomButton.addEventListener("click", function(){

    const playerDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    const pcDice = Math.floor(Math.random () * (6 - 1 + 1) + 1);

    playerNumber.innerHTML = `Il numero casuale per il giocatore è: ${playerDice}`;

    pcNumber.innerHTML = `Il numero casuale per il computer è: ${pcDice}`;

    if (playerDice > pcDice) {

        winner.innerHTML = "Il vincitore è l'utente!";

    } else if (pcDice > playerDice) {

        winner.innerHTML = "Il vincitore è il computer!";

    } else if (pcDice === playerDice) {

        winner.innerHTML = "Il risultato è un pareggio!"
    }


})
