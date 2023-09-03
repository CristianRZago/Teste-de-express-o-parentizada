const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificaParenteses(expressao) {
    let pilha = [];

    for (let i = 0; i < expressao.length; i++) {
        let sym = expressao[i];
        if (sym === '(') {
            pilha.push(sym);
        } else if (sym === ')') {
            if (pilha.length === 0) {
                return false;
            }
            let left = pilha.pop();
            if (left !== '(' || sym !== ')') {
                return false;
            }
        }
    }
    
    return pilha.length === 0;
}

rl.question("Digite uma expressão com parênteses: ", function(expressao) {
    let resultado = verificaParenteses(expressao);

    if (resultado) {
        console.log("Os parênteses estão balanceados e corretamente aninhados.");
    } else {
        console.log("Os parênteses não estão balanceados ou corretamente aninhados.");
    }

    rl.close();
});
