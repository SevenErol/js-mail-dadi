
const mailList = ["mariorossi@mail.com", "giuliaverdi@mail.com", "marcoblu@mail.com", "mariagialli@mail.com"];

const userMail = prompt("Inserisci qui la tua mail!");

const welcomeUser = document.querySelector("h1");

let counter = 0;


for (let i = 0; i < mailList.length; i++) {


    if (userMail === mailList[i]) {

        welcomeUser.innerHTML = `Benvenuto nella pagina: ${userMail}`;

    } else if (counter === mailList.length - 1) {

        welcomeUser.innerHTML = `Accesso negato`

    } else if (userMail !== mailList[i]) {

        counter++

    }

}
