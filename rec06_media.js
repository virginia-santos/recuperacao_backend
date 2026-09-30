const entrada = require('readline-sync');

let soma = 0;
for (let i = 1; i <= 6; i++) {

    const acumulador = entrada.questionFloat(`Digite a medicao ${i}: `);

    soma += acumulador;

}



const mediaatendimentos = soma / 6;



console.log("=== MEDIA DOS ATENDIMENTOS ===");

console.log(`A soma dos  tempos é: ${soma}`)
console.log(`A media dos atendimentos é: ${mediaatendimentos}`);

