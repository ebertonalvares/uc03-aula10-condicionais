//Tendo como dados de entrada a altura e o sexo de uma pessoa, 
//construa um algoritmo que calcule seu peso ideal, 
//utilizando as seguintes fórmulas: Para homens: (72.7*h) - 58 Para mulheres: (62.1*h) - 44.7(h = altura) 

const readline = require("readline-sync");
//ENTRADA
const altura = readline.questionFloat("Informe sua altura (Ex 1.82): ");
const sexo = readline.question("Informe seu sexo(Masculino ou Feminino): ");
//PROCESSAMENTO
//validar qual é o sexo 
let peso_ideal = 0;
if (sexo.toLowerCase == "masculino"){
    peso_ideal = (72.7 * altura) - 58;
}else {
    peso_ideal = (62.1 * altura) - 44.7;
}
console.log(`O seu peso ideal é${peso_ideal}`)