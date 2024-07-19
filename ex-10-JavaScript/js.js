//funcao simples

function soma () {
    let n1 = 10;
    let n2 = 40;
    console.log(n1 + n2);
}

soma();

//funcao com parametros
function multiplica(v1 = 0 , v2 = 0) {
    let resultado = v1 * v2;
    console.log(`O resultado e ${resultado}`);
}

multiplica(10, 20)

//funcao com retorno
function divide (n1 = 0, n2 = 0) {
    return n1 / n2;
}

const resultadoFuncao = divide(10, 2);
console.log(resultadoFuncao);

function EncontrarMaior() {
    let maior = 0;
    let menor = 100;

    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random()* 100) + 1;
        console.log(`Numero gerado: ${num}`);

        if (num > maior) {
            maior = num
        }
        if (num < menor) {
            menor = num
        }
    }

    console.log(`O maior numero encontrado foi:${maior}`);
    console.log(`O menor numero encontrado foi:${menor}`);
}

EncontrarMaior()

console.log('------------------------------------');
function calcularRendimento(valor, taxaJuros, tempo) {
    for(let i =1; i <= tempo; i++) {
        valor += valor * taxaJuros;
        console.log(`Rendimento no ${i}o.: R$${valor.toFixed(2)}`);
    }
}
calcularRendimento(1000, 0.05, 5)

console.log('----------------------------------');

function calcularPrecoUber(distancia, tempo) {
    const valorBase = 2.5;
    const valorKm = 1.3;
    const valorMin = 0.26;

    const precoDistancia = distancia * valorKm;
    const precoTempo = tempo * valorMin;
    const precoTotal = valorBase + precoDistancia + precoTempo

    return precoTotal.toFixed(2);
}

let valorCorrida = calcularPrecoUber(40, 10)
console.log(`Sua viagem ficara em R$:${valorCorrida}`);

//funcao anonima
const valorPassagem = function(adultos, criancas, idaEVolta){
    const PRECO_PASSAGEM = 1000;

    const valorAdulto = PRECO_PASSAGEM * adultos;
    const valorCrianca = (PRECO_PASSAGEM * criancas) * 0.5;

    if(idaEVolta) {
        return (valorAdulto + valorCrianca) * 2;
    } else {
        return valorAdulto + valorCrianca;
    }
}

let valorPassagemFinal = valorPassagem(2, 3, false);
console.log(`O valor total das passagens sera de R$${valorPassagemFinal.toFixed(2)}`);

valorPassagemFinal = valorPassagem(2, 0, true);
console.log(`O valor total das passagens sera de R$${valorPassagemFinal.toFixed(2)}`);