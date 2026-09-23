const entrada = require('readline-sync');

const nivelOleo = entrada.questionInt("Digite a porcentagem do nivel de oleo: ");

if (nivelOleo >= 40 && nivelOleo <=80){
    console.log(`NÍVEL NORMAL`);

}else {
    console.log(`INSPEÇÃO NECESSÁRIA`);
};

console.log(`O nivel do oleo e de: ${nivelOleo}%`);
