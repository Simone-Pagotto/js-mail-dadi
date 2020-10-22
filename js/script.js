var arrayEmail = ["io@mail.it","tu@mail.it","egli@mail.it","noi@mail.it","voi@mail.it","essi@mail.it"];
console.log(arrayEmail);
var submitElement = document.getElementById("submit");

submitElement.addEventListener("click",function(){

  var inputEmail = document.getElementById("mail").value;

  console.log(inputEmail,typeof inputEmail, arrayEmail[0],typeof arrayEmail[0]);

  var exit = 0;
  for(i=0 ; i<=arrayEmail.length && exit==0; i++){
    if (inputEmail == arrayEmail[i]){
      document.getElementById("message").innerHTML = "Il suo indirizzo email è presente nel database; può accedere!";
      exit=1;
    }else {
      document.getElementById("message").innerHTML = "Il suo indirizzo email non è presente nel database; NON può accedere!";
    }
    console.log(i);
  }
});


// 777777777777777777777777777777777777777777777777777777777777777777777777

var throwDiceElement = document.getElementById("dado");

throwDiceElement.addEventListener("click",function(){

  for(i=0;yourDice == computerDice;i++){
    var yourDice = Math.floor(Math.random() * 6 + 1);
    var computerDice = Math.floor(Math.random() * 6 + 1);
    console.log(yourDice, computerDice);
  }

  document.getElementById("mio-lancio").innerHTML = "Il tuo lancio: " + yourDice;
  document.getElementById("pc-lancio").innerHTML = "Il lancio del PC: " + computerDice;

  if(yourDice>computerDice){
    document.getElementById("result").innerHTML = "VITTORIA";
  } else {
    document.getElementById("result").innerHTML = "SCONFITTA, ritenta!";
  }

});
