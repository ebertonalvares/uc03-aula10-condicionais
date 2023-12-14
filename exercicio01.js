/*
Elabore um diagrama de blocos que leia um número. 
Se positivo armazene-o em A, se for negativo, em B.
 No final mostrar o resultado
*/

const readline = require("readline-sync");

const numero = readline.questionInt("Informe um numero: ")

let A;
let B;

// Se o número for maior que zero, ou seja positivo armazene em A
//senao, armazene em B

//if/else -  se /senão
//se o numero for maior que zero, 
//a variavel A recebe o numero 
//senao, a varaivel B recebe o numero 
if (numero > 0){
    A = numero;
} else{
    B = numero;
} 
console.log("Valor de A:",A)
console.log("Valor de B:",B)