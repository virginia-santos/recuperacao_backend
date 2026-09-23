const entrada = require('readline-sync');

const vibracao = entrada.questionFloat("Digite o valor da vibracao em mm/s: ");

if (vibracao <= 3){
    console.log(`${vibracao} mm/s`)
    console.log(`situação ESTAVEL.`)
}else if (vibracao >=3 && vibracao <= 6){
     console.log(`${vibracao} mm/s`)
    console.log(`situação ATENCAO.`)
}else {
     console.log(`${vibracao} mm/s`)
    console.log(`situação CRITICA.`);
}