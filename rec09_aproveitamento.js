const entrada = require('readline-sync');

function calcularAproveitamento(util, total){
    return (util / total) * 100
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return (`EXCELENTE`);
    } else if (percentual >= 75 && percentual <= 90) {
        return (`ADEQUADO`);
    } else {
        return (`REVISAR PROCESSO`);
    }
}

const qtdeTotal = entrada.questionFloat("Informe a quantidade total: ");
const qtdeUtil = entrada.questionFloat("Informe a quantidade util :");

const aproveitamento = calcularAproveitamento(qtdeUtil, qtdeTotal);
const classificacao = classificarAproveitamento(aproveitamento);


console.log(`\n=== RELATORIO DE APROVEITAMENTO === `);
console.log(`Total: ${qtdeTotal} `);
console.log(`Quantidade util: ${qtdeUtil} `);
console.log(`Percentual: ${aproveitamento.toFixed(2)}% `);
console.log(`Classificacao: ${classificacao} `);



