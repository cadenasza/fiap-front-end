// Comentario em JS

// de uma linha so

/*
Comentario de varias linhas
*/

// Usando o console
// console.log('utilizando o console');
// console.log("Aspas duplas podem ser usadas");
// console.log(`Crase tambem porem o uso dela serve para outras coisas`);

//variaveis e constante
// let nome = 'leonardo';
// let idade = 18;
// let email = 'leonardocadena@gmail.com';
// let estaLogado = true;
// const DATA_NASCIMENTO = '29/11/2005';

// console.log(`${nome} nasceu em ${DATA_NASCIMENTO}, logo tem ${idade} anos, seu email e ${email} e seu status de logado e ${estaLogado}`);

// console.log(typeof DATA_NASCIMENTO); //dessa forma mostrara o tipo da variavel

// console.log(typeof(nome), nome); //pode ser usado tbm dessa forma

//conversao de tipos
// valorInicial = String(valorInicial)
// valorInicial = Boolean(valorInicial)
// valorInicial = Number(valorInicial)

// let valorInicial = true
// console.log(valorInicial, typeof(valorInicial));

// valorInicial = String(valorInicial)  //convertendo para string
// console.log(valorInicial, typeof(valorInicial));


// Caixas de dialogo
// let userName = 'Leo';
// alert( `Bem vindo ${userName}`);
// confirm('Esta bem?')
// prompt('Qual sua cor favorita?')

// let mensagem = prompt('Qual sua cor favorita') da pra armazenar em uma variavel
// alert(mensagem)

// deixando em uma variavel
// let resposta = confirm('Deseja finalizar o aplicativo?')
// console.log(resposta);

// operadores aritmetico
// let a = 10;
// let b = 2;
// let c = a + b;
// let d = a * 3;
// let e = a / b;
// let f = a % b;
// console.log(c, d, e, f);

//operadores relacionais
// let a = 10;
// let b = 2;
// let c = a > b;
// let d = a < b;
// let e = a >= b;
// let f = a <= b;
// let g = a == b;
// let h = a != b;
// let i = a === b; uma otima pratica utilizar 3 iguais para comparacoes
// let j = a !== b;
// console.log(c, d, e, f, g, h, i, j);

//operadores logicos
// let a = true;
// let b = false;
// let c = a && b;
// let d = a || b;
// let e = !a;
// console.log(c, d, e);

// operadores de incremento, decremento e atribuicao
// let a = 20;
// let b = a++;
// let c = a--;
// let d = a += 10;
// let e = a -= 10;
// let f = a *= 10;
// let g = a /= 10;
// console.log(a, b, c, d, e, f, g);

// pos-fixada resolve o calculo e depois ira incrementar
// let a = 1;
// let b = 2;
// let resultado = a++ + b++;
// console.log(resultado);

// pre-fixada, faz o incremento antes de realizar o calculo
// let a = 1;
// let b = 2;
// let resultado = ++a + ++b;
// console.log(resultado);


// OBJETO Math - metodos matematicos ja preparados pelo js
// Math.funcao()
// let numero = 23.52
// console.log(numero);

//arredondamento
// ceil() - arrendonda para cima
// console.log(`Math.ceil(${numero} = ${Math.ceil(numero)})`);
// floor() - arrendonda para baixo
// console.log(`Math.floor(${numero} = ${Math.floor(numero)})`);
// round() - arrendonda para o numero mais proximo
// console.log(`Math.round(${numero} = ${Math.round(numero)})`);

//Min() e Max() - funciona tambem com numeros negativos
// console.log(Math.max(43, 42, 14, 69, 100));
// console.log(Math.min(43, 42, 14, 69, 100));

// metodo para descartar a parte decimal do numero
// parseInt() 
// console.log(`parseInt(${numero}) = ${parseInt(numero)}`);

//Potencia
//pow()
// console.log(Math.pow(8,3));

// Sortear numeros
// random() - retorna um numero aleatorio entre 0 e 1
// let numeroAleatorio = Math.random();
// console.log(numeroAleatorio);

//sorteando qualquer numero
console.log(Math.floor(Math.random() * 100));


//Raiz quadrada e cubica
// console.log(Math.sqrt(25));
// console.log(Math.cbrt(125));