// MAGIC NUMBERS
var DICE_MAX = 6;
var DICE_MIN = 1;
// INIZIALIZZAZIONE VARIABILI
var arrayEmail = ["io@mail.it","tu@mail.it","egli@mail.it","noi@mail.it","voi@mail.it","essi@mail.it"];
var submitElement = document.getElementById("submit");
var throwDiceElement = document.getElementById("dado");
var addEmailElement = document.getElementById("add");
var inputEmail;
var exit=1;//imposto exit ad uno per evitare di aggiungere indirizzi email non ancora ricercati
var yourDice;
var computerDice;

// ACCESSO TRAMITE MAIL
submitElement.addEventListener("click",function(){

  inputEmail = document.getElementById("mail").value;
  exit = 0; //permetto al ciclo di proseguire finchè non trova un match
  console.log(inputEmail,typeof inputEmail, arrayEmail[0],typeof arrayEmail[0],exit);

  // CICLO FOR CHE CONTROLLA OGNI POSIZIONE DELL'ARRAY IN CERCA DI UN INDIRIZZO EMAIL CORRISPONDENTE, ESCE DAL CICLO QUANDO LO TROVA
  for(i=0 ; i<=arrayEmail.length && exit==0; i++){
    if (inputEmail == arrayEmail[i]){
      document.getElementById("message").innerHTML = "Il suo indirizzo email è presente nel database; può accedere!";
      exit=1; //esco dal ciclo
    }else {
      document.getElementById("message").innerHTML = "Il suo indirizzo email non è presente nel database; NON può accedere!";
    }
  }
});

// REGISTRARSI TRAMITE EMAIL NON PRESENTE
addEmailElement.addEventListener("click",function(){
  if(exit==0){
    arrayEmail.push(inputEmail);
    console.log(arrayEmail);
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
