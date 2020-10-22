// MAGIC NUMBERS
var DICE_MAX = 6;
var DICE_MIN = 1;
// INIZIALIZZAZIONE VARIABILI
var arrayEmail = ["io@mail.it","tu@mail.it","egli@mail.it","noi@mail.it","voi@mail.it","essi@mail.it"];
var submitElement = document.getElementById("submit");
var throwDiceElement = document.getElementById("dado");
var inputEmail;
var exit;
var yourDice;
var computerDice;

// ACCESSO TRAMITE MAIL
submitElement.addEventListener("click",function(){

  inputEmail = document.getElementById("mail").value;
  exit = 0;
  console.log(inputEmail,typeof inputEmail, arrayEmail[0],typeof arrayEmail[0],EXIT);

  // CICLO FOR CHE CONTROLLA OGNI POSIZIONE DELL'ARRAY IN CERCA DI UN INDIRIZZO EMAIL CORRISPONDENTE, ESCE DAL CICLO QUANDO LO TROVA
  for(i=0 ; i<=arrayEmail.length && exit==0; i++){
    if (inputEmail == arrayEmail[i]){
      document.getElementById("message").innerHTML = "Il suo indirizzo email è presente nel database; può accedere!";
      exit=1;
    }else {
      document.getElementById("message").innerHTML = "Il suo indirizzo email non è presente nel database; NON può accedere!";
    }
  }
});

// LANCIO DEL DADO
throwDiceElement.addEventListener("click",function(){

  // CICLO FOR CHE SIMULA DUE LANCI DI DADI E RIPETE IL LANCIO FINCHè NON SONO DIVERSI
  for(i=0;yourDice == computerDice;i++){
    yourDice = Math.floor(Math.random() * DICE_MAX + DICE_MIN);
    computerDice = Math.floor(Math.random() * DICE_MAX + DICE_MIN);
    console.log(yourDice, computerDice);
  }
  // VISUALIZZAZIONE LANCI
  document.getElementById("mio-lancio").innerHTML = "Il tuo lancio: " + yourDice;
  document.getElementById("pc-lancio").innerHTML = "Il lancio del PC: " + computerDice;

  // ELABORAZIONE ESITO DEL LANCIO E VISUALIZZAZIONE
  if(yourDice>computerDice){
    document.getElementById("result").innerHTML = "VITTORIA";
  } else {
    document.getElementById("result").innerHTML = "SCONFITTA, ritenta!";
  }

});
