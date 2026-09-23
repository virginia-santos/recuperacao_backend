const entrada = require('readline-sync');

const produtosPorCiclo = entrada.questionInt("Digite a quantidade de produtos feitos por ciclo: ");

console.log(`=== PRODUCAO ACUMULADA ===`);
for(let ciclo = 1; ciclo <=12; ciclo++ ){
    const producaoAcumulada = produtosPorCiclo * ciclo;
    console.log(`Ciclo ${ciclo}: valor acumulado = ${producaoAcumulada} `);

};