const entrada = require('readline-sync')


const ferramentas = [];



for (let i = 0; i <= 3; i++) {



console.log(`\nCadastro ferramentas ${i + 1}`);



    const nome = entrada.question("Nome: ");

    const quantidade = entrada.questionInt("Quantidade em estoque: ");

    const estoqueMinimo = entrada.questionInt("Estoque minimo: ");



    const componente = {
        nome,
        quantidade,
        estoqueMinimo,
    

    };



   ferramentas.push(componente);

}



console.log("\n=== RELATÓRIO DE ESTOQUE ===");



for (let i = 0; i < ferramentas.length; i++) {
    const item = ferramentas[i];



    console.log(`\nComponente: ${item.nome}`);
    console.log(`Quantidade: ${item.quantidade}`);
    console.log(`Estoque mínimo: ${item.estoqueMinimo}`);

    



    if (item.quantidade < item.estoqueMinimo) {
        console.log("Situação: REPOR");

    } else {

        console.log("Situação: ESTOQUE SUFICIENTE");

    }

}