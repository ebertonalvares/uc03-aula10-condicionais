// Ler um numero e verificar se ele é par ou impar.
//Quando for par armazenar esse valor em P
//e quando for impar armazena-lo em I 
//Exibir P e I no final do processamento

const readline = require("readline-sync");

const numero = readline.questionInt("Informe um numero: ");

const resto = numero % 2;


let par;
let impar;
// se o resto for igual a zero, é par
// se nao é impar
if (resto == 0){
    par = numero;
} else{
    impar = numero;
}
console.log("Par:", par );
console.log("Impar:", impar );

