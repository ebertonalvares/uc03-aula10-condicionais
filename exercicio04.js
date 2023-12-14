//Tendo como dados de entrada a altura e o sexo de uma pessoa, 
//construa um algoritmo que calcule seu peso ideal, 
//utilizando as seguintes fórmulas: Para homens: (72.7*h) - 58 Para mulheres: (62.1*h) - 44.7(h = altura) 

const readline = require("readline-sync");

const altura = readline.questionInt("Informe sua altura: ")
const sexo = readline.questionInt("Informe seu sexo: ")