let numberOne = prompt("Digite um número: ");
let numberTwo = prompt("Digite um segundo número: ")

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

let add = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = numberOne / numberTwo;
let rest = numberOne % numberTwo;

alert(`A soma entre os números digitados foi de: ${add}`);
alert(`A subtração entre os números digitados foi de: ${sub}`);
alert(`A multiplicação entre os números digitados foi de: ${mult}`);
alert(`A divisão entre os números digitados foi de: ${div}`);
alert(`O resto da divisão entre os números digitados foi de: ${rest}`);

if(add %2 == 0){
  alert("Número par.");
}else{
  alert("Número ímpar.");
}

if(numberOne == numberTwo){
  alert("Os números digitados são iguais");
}else{
  alert("Os números digitados são diferentes");
}