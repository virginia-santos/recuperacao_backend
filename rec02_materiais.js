const entrada = require('readline-sync');

const peca = entrada.question("Digite o nome da peca: ");
const qtdeComprada = entrada.questionInt("Digite a quantidade de pecas compradas: ");
const precoUnitario = entrada.questionFloat("Digite o preco unitario da peca: ");

const total = qtdeComprada * precoUnitario

console.log(`=== RESUMO DA COMPRA ===` );
console.log(`Nome da peca: ${peca}`);
console.log(`Quantidade comprada: ${qtdeComprada}`);
console.log(`Valor final da compra: "R$" ${total.toFixed(2)}`)

