const entrada = require('readline-sync')

const caixasPorHora = entrada.questionInt("Digite quantas caixas sao produzidas por hora: ");
const horasTrabalhadas = entrada.questionInt("Digite a quantidade de horas trabalhadas por dia: ");

const producaoTotal = caixasPorHora * horasTrabalhadas

console.log(`Sao produzidas ${caixasPorHora} caixas por hora; durante ${horasTrabalhadas} horas trabalhadas. Resultado no total produzido de ${producaoTotal} caixas.   `)

