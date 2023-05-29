let hi = alert("Hello Word!");
let userNumberOne = prompt("Digite um número: ");
let userNumberTwo = prompt("Digite um segundo número: ");

userNumberOne = Number(userNumberOne);
userNumberTwo = Number(userNumberTwo);

let sumTwoNumbers = userNumberOne + userNumberTwo;
alert(`A soma dos números digitados é de ${sumTwoNumbers}.`);

let subTwoNumbers = userNumberOne - userNumberTwo;
alert(`A subtração dos números digitados é de ${subTwoNumbers}.`);

let multTwoNumbers = userNumberOne * userNumberTwo;
alert(`A multiplicação dos números digitados é de ${multTwoNumbers}.`);

let divTwoNumbers = (userNumberOne / userNumberTwo).toFixed(2);
alert(`A divisão dos números digitados é de ${divTwoNumbers}.`);

if(userNumberOne %2 == 0){
  alert("O primeiro número digitado é par.");
}else{
  alert("O primeiro número digitado é ímpar");
}

if(userNumberTwo %2 == 0){
  alert("O primeiro número digitado é par.");
}else{
  alert("O primeiro número digitado é ímpar");
}

