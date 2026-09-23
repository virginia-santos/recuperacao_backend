const entrada = require('readline-sync');

const nivelOleo = entrada.questionInt("Digite a porcentagem do nivel de oleo: ");

if (nivelOleo >= 40 && nivelOleo <=80){
    console.log(`${nivelOleo}%`)
    console.log(`NÍVEL NORMAL`);

}else {
    console.log(`${nivelOleo}%`)
    console.log(`INSPEÇÃO NECESSÁRIA`);
};


