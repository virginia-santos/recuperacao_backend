const entrada = require("readline-sync");

const {
    calcularMaoDeObra,
    calcularTotal,
    verificarGarantia
} = require("./funcoesOrcamento");
const { verificarDesconto } = require("../funcoesOrcamento");

const cliente = entrada.question("Nome do Cliente: ");
const valorMateriais = entrada.questionFloat("Valor dos Materiais: R$ ");
const horas = entrada.questionFloat("Horas de serviço: ");

const maoDeObra = calcularMaoDeObra(horas);
const total = calcularTotal(valorMateriais, horas);
const desconto = verificarDesconto(total);

console.log("\n=== RELATÓRIO DO ORCAMENTO ===");
console.log(`Cliente: ${cliente}`);
console.log(`Materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Mao de obra: ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Desconto: ${desconto}`);