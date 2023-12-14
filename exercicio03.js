//Construa um diagrama de blocos para ler uma variável numérica N 
//e imprimi-la somente se a mesma for maior que 100, 
//caso contrário imprimi-la com o valor zero 


const readline = require("readline-sync");
const numero = readline.questionInt("Informe um numero: ");


if (numero < 100){
    console.log(numero);
}