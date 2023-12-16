//1- Ler o valor do salario base 
//2- Ler o valor da gratificação 
//3- Preciso somar ambos os valores em uma variavel chamada salario_bruto
//4- Se o salario for menor que 1000, calcular o valor do IR sobre 15% do salario bruto
//5- Senao, calcular o valor de IR sobre 20% so salario_bruto 
//6- Calcular o salario liquido, que é a diferença entre o salario bruto e o IR
//7- Imprimir o salario liquido 
const readline = require("readline-sync")

const salario_base = readline.questionFloat("Informe seu salario base: ");
const gratificacao = readline.questionFloat("Informe sua gratificacao: ");

let salario_bruto = salario_base + gratificacao 
let ir = 0;
if (salario_bruto < 1000){
    ir = salario_bruto * (15 / 100)
}else {
    ir = salario_bruto * (20/100)
}
let salario_liquido = salario_bruto - ir

console.log(salario_liquido);