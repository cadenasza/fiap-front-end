//funcao simples

// function soma () {
//     let n1 = 10;
//     let n2 = 40;
//     console.log(n1 + n2);
// }

// soma();

// //funcao com parametros
// function multiplica(v1 = 0 , v2 = 0) {
//     let resultado = v1 * v2;
//     console.log(`O resultado e ${resultado}`);
// }

// multiplica(10, 20)

// //funcao com retorno
// function divide (n1 = 0, n2 = 0) {
//     return n1 / n2;
// }

// const resultadoFuncao = divide(10, 2);
// console.log(resultadoFuncao);

// function EncontrarMaior() {
//     let maior = 0;
//     let menor = 100;

//     for (let i = 0; i < 10; i++) {
//         let num = Math.floor(Math.random()* 100) + 1;
//         console.log(`Numero gerado: ${num}`);

//         if (num > maior) {
//             maior = num
//         }
//         if (num < menor) {
//             menor = num
//         }
//     }

//     console.log(`O maior numero encontrado foi:${maior}`);
//     console.log(`O menor numero encontrado foi:${menor}`);
// }

// EncontrarMaior()

// console.log('------------------------------------');
// function calcularRendimento(valor, taxaJuros, tempo) {
//     for(let i =1; i <= tempo; i++) {
//         valor += valor * taxaJuros;
//         console.log(`Rendimento no ${i}o.: R$${valor.toFixed(2)}`);
//     }
// }
// calcularRendimento(1000, 0.05, 5)

// console.log('----------------------------------');

// function calcularPrecoUber(distancia, tempo) {
//     const valorBase = 2.5;
//     const valorKm = 1.3;
//     const valorMin = 0.26;

//     const precoDistancia = distancia * valorKm;
//     const precoTempo = tempo * valorMin;
//     const precoTotal = valorBase + precoDistancia + precoTempo

//     return precoTotal.toFixed(2);
// }

// let valorCorrida = calcularPrecoUber(40, 10)
// console.log(`Sua viagem ficara em R$:${valorCorrida}`);

// //funcao anonima
// const valorPassagem = function(adultos, criancas, idaEVolta){
//     const PRECO_PASSAGEM = 1000;

//     const valorAdulto = PRECO_PASSAGEM * adultos;
//     const valorCrianca = (PRECO_PASSAGEM * criancas) * 0.5;

//     if(idaEVolta) {
//         return (valorAdulto + valorCrianca) * 2;
//     } else {
//         return valorAdulto + valorCrianca;
//     }
// }

// let valorPassagemFinal = valorPassagem(2, 3, false);
// console.log(`O valor total das passagens sera de R$${valorPassagemFinal.toFixed(2)}`);

// valorPassagemFinal = valorPassagem(2, 0, true);
// console.log(`O valor total das passagens sera de R$${valorPassagemFinal.toFixed(2)}`);


//arrow functions

// const calcularValorHospedagem = (diarias, valorDiaria, taxaLimpeza) => {
//     return diarias * valorDiaria + taxaLimpeza;
// }

// const ValorHospedagem = calcularValorHospedagem(9, 500, 300);
// console.log(`O valor total da hospedagem sera de R$${ValorHospedagem.toFixed(2)}`)


// exemplo - validar login
// const validarLogin = (login, senha) => {
//     const usuario = 'leo12';
//     const senhaUsuario = '123';

//     if (login === usuario && senha === senhaUsuario) {
//         console.log('Login realizado com sucesso');
//         return true;
//     } else {
//         console.log('Login ou senha invalidos');
//         return false;
//     }
// };

// const usuario1 = validarLogin('leo12', '123');
// const usuario2 = validarLogin('leoleo', 'leo12345');
// console.log(usuario1, usuario2);


//callback function
// function calcularDesconto(preco, porcentagemDesconto) {
//     const desconto = preco * (porcentagemDesconto / 100);
//     return preco - desconto;
// }

// function calcularPrecoFinal(preco, porcentagemDesconto, callback) {
//     const precoFinal = callback(preco, porcentagemDesconto);
//     console.log(`Preco final: R$${precoFinal.toFixed(2)}`);
// }

// calcularPrecoFinal(200, 10, calcularDesconto)


// Exibindo hora atual

// function exibirhoraAtual(callback) {
//     setInterval(() => {
//         const data = new Date();
//         const hora = data.getHours();
//         const minuto = data.getMinutes();
//         const segundo = data.getSeconds();
//         const horaAtual = `${hora}:${minuto}:${segundo}`;
//         callback(horaAtual);
//     } ,1000);
// }

// function exibirhora(horaAtual) {
//     console.log(horaAtual);
// }

// exibirhoraAtual(exibirhora)


// IIFE
// (function () {
//     let carrinho = '';

//     function adicionarAoCarrinho(item) {
//         carrinho += item + ' ';
//         console.log(item + ' adicionado ao carrinho!');
//     }

//     function obterCarrinho() {
//         return carrinho;
//     }

//     adicionarAoCarrinho('Livro de HTML');
//     adicionarAoCarrinho('Livro de CSS');
//     adicionarAoCarrinho('Licro de JS');

//     console.log('Itens no carrinho: ' + obterCarrinho());
// })();


// let calcularPrecoLocacao = (function () {
//     let precoDiaria = 100;
//     let precoKm = 0.5;

//     function calcularPreco(dias, distancia) {
//         return (precoDiaria * dias) + (precoKm * distancia);
//     }

//     return calcularPreco;
// })();

// console.log('Preco da locacao: R$' + calcularPrecoLocacao(5, 100));


//ARAYS
// metodo contrutor
// const arr = new Array('TV', 'Celular', 'Notebook', 15, 30);
// console.log(arr[1]);
// console.log(arr[3]);


// declaracao literal
// const arr2 = ['TV', 'Celular', 'Notebook', 15, 30]
// console.log(arr2[1]);
// console.table(arr2);
// console.log(arr2.length);


// manipulando o array
const produtos = ['PlayStation 5' , 'Celular', 'TV', 'videogame', 'teclado', 'mouse', 'webcam'];

// adicionando no array
//inicio - unshift
// produtos.unshift('Notebook');
// console.log(produtos);
// //final - push
// produtos.push('smartwatch');
// console.log(produtos);

// // retirando do array
// //inicio - shift
// produtos.shift();
// console.log(produtos);
// //meio - define o indice, quantos elementis serao excluidos e o que voce quer adicionar
// produtos.splice(1, 0, 'tablet', 'bola');
// console.log(produtos);
// //exclusao com splice
// produtos.splice(1, 2);
// console.log(produtos);

// //final - pop
// produtos.pop();
// console.log(produtos);

// //cria uma copia do array
// // - slice
// const produtos2 = produtos.slice(); //se passar um indice no slice ele copiara a partir do indice escolhido
// console.log(produtos2);

//encontra a posicao de determinado elemento
 // - indexOf - retorna -1 se nao tiver, retorna o primeiro apenas
// const posicao = produtos.indexOf('Celular');
// console.log(posicao);

// - lastIndexOf retorna -1 se nao tiver, retorna o ultimo apenas
// const posicao2 = produtos.lastIndexOf('Celular');
// console.log(posicao2);

//Concatenar Array
// const produtos2 = ['Atari', 'X-box', 'Nintendo DS'];
// // - concat
// const novosProdutos = produtos.concat(produtos2);
// console.table(novosProdutos);


// //colocando em ordem alfabetica - mudara o index de cada elemento
// // - sort
// produtos.sort()
// console.table(produtos);

// //- reverse - inverte a ordem
// produtos.reverse()
// console.table(produtos);

// //criar uma string com os elementos do array
// // - join
// const string = produtos.join(' - ')
// console.log(string);

// //buscar conteudo
// // - includes - verifica se existe determinado elemento no array. Retorna true ou false
// const existe = produtos.includes('Celular');
// console.log(existe);

// // - every - verificar se todos os elementos obdecem alguma condicao, precisa de uma funcao callback, retorna true ou false
// let todosComLetraA = produtos.every(produto => {
//     return produto.includes('a');
// });
// console.log('Todos os produtos tem a letra A?' + todosComLetraA);

// // - some - verifica se pelo menos 1 elemento tem determinada condicao, tem funcao de callback tambem, retorna true e false
// let total = 0;
// const tamanhoMaximo10 = produtos.some((produtos)=> {
//     return produtos.length <= 10;
// })
// console.log('Algum produto tem menos de 10 caracteres? ' + tamanhoMaximo10);

// //find - busca e retorna o primeiro produto encontrado, tem funcao de callback
// const tamanhoMaior6 = produtos.find((produto) => {
//     return produto.length > 9;
// });
// console.log(tamanhoMaior6);

// gerar um novo array - nao alteram o array primario
// Filter e map

// const precos = [6888, 9800, 3233, 1000, 1200]
// console.log(produtos);
// console.log(precos);

// //filter - vai pegar todos que tem a palavra smart e jogar em outro array
// const produtosComSmart = produtos.filter((produto)=> {
//     return produto.includes('Cel');
// });
// console.log(produtosComSmart);

// const precosMaiores = precos.filter((precos) => {
//     return precos > 3000;
// })
// console.log(precosMaiores);

// //map - Aplica uma funcao a cada elemento e retorna um novo array

// const produtosEmMaiuscula = produtos.map((produtos)=> {
//     return produtos.toUpperCase();
// });
// console.log(produtosEmMaiuscula);


// //reduce - nao retorna um array completo, apenas um unico valor

// const totalLetrasProdutos = produtos.reduce((acumulador, produtos)=> {
//     return acumulador + produtos.length;
// }, 0);
// console.log(totalLetrasProdutos);

// //valor do estoque
// const totalValores = precos.reduce((acumulador, preco)=> {
//     return acumulador + preco;
// }, 0);
// console.log(totalValores);


// PERCORRERNDO Arrays
// console.table(produtos)
// Estruturas de repeticao
// for - for in - for of - forEach 

// for(let i = 0; i < produtos.length; i++) {
//     console.log(`Indice ${i} do Array = ${produtos[i]}`);
// }

// console.log('---------------------------');
// for (let index in produtos) {
//     console.log(`Indice ${index} do Array = ${produtos[index]}`);
// }


// console.log('---------------------------');
// for (let produto of produtos) {
//     console.log(`nome do produto: ${produto.toUpperCase()}`);
// }


// let produtoMaiorQtd = 0;
// let maiorQtd = 0;
// produtos.forEach(function (produto) {
//     console.log(`${produto} - ${produto.length}`);
//     if (produto.length > maiorQtd) {
//         maiorQtd = produto.length;
//         produtoMaiorQtd = produto;
//     }
// });
// console.log(`O produto com maior quantidade de letras é ${produtoMaiorQtd} - Total: ${maiorQtd} caracteres`);


//objetos
    //formas de declarar
//         const produto = { 
//             id: 213, 
//             tipo: 'Celular', 
//             preco: 1230
//         }
//         console.log(produto);
//         console.log(produto.tipo);

//      // declarando com construtor - this
//      function Produto(id, tipo, preco) {
//         this.id = id;
//         this.tipo = tipo;
//         this.preco = preco;
//      }
//      const produto1 = new Produto(123, 'Notebook', 1230);
//      const produto2 = new Produto(234, 'Celular', 3000);
//      console.log(produto1, produto2);
//      console.log(produto1.preco);

//      //usando factory function
//      function criarProduto(id, tipo, preco) {
//         return { 
//             id, 
//             tipo, 
//             preco 
//         };
//      }
//     const criarProduto1 = criarProduto(1234, 'computador', 2000)
//     console.log(criarProduto1);

//     //criando metodos
//     function Pessoa(nome, idade, altura, cidade) {
//         return {
//             nome,
//             idade,
//             altura,
//             cidade,
//             exibirPessoa: function() {
//                 console.log(`Nome: ${nome}`);
//                 console.log(`idade: ${idade}`);
//                 console.log(`altura: ${altura}`);
//                 console.log(`cidade: ${cidade}`);
//         }
//     }
// }
// const pessoa1 = new Pessoa('leonardo', 18, 1.64, 'sp');
// pessoa1.exibirPessoa();

// //adicionando ou excluindo propriedades
// console.log('Adicionando a propriedade'); 
// pessoa1.endereco = 'sp';
// console.log(pessoa1);

// console.log('Excluindo propriedade');
// delete pessoa1.altura;
// console.log(pessoa1);


// spread operator - espalha informacao de um array para outro
// const numeros1 = [1, 2, 3];
// const numeros2 = [4, 5, 6];
// const numerosTotais = [...numeros1, ...numeros2];
// console.log(numerosTotais);

// const novoArray = [12, 30, 18, ...numerosTotais, 39, 190]
// console.log(novoArray);

// //com objetos
// const carrinho = {
//     'camisa':200.00,
//     'calca': 190.00,
//     'sapato': 123.43
// };

// const carrinhoCopia = {...carrinho};
// console.log(carrinho);
// console.log(carrinhoCopia);


//rest operator - recebe argumento dentro de uma funcao - tbm utiliza os ...  , ira retornar a soma independente da qtd de numeros

// function calcularSoma(...numeros) {
//     let soma = 0;
//     for (let numero of numeros) {
//         soma += numero;
//     }
//     return soma;
// }
// console.log(calcularSoma(1, 2, 3, 4, 5));


// function calcularMedia(...arr) {
//     let soma = 0;
//     for (let numero of arr) {
//         soma += numero;
//     }
//     return soma / arr.length;
// }
// const arr = [20, 30 ,10, 20];
// const media = calcularMedia(...arr);
// console.log(`A media dos numeros do array e = ${media}`);


//Desestruturacao - permite acessar valores existentes em objetos e arrays e atribuilos de forma facil e direta em qualquer variavel

// const numeros = [1, 3, 5, 7, 9, 20, 40];
// const [a, b, c, ...restanteNumeros] = numeros; // o js entendera que o a, b e c equivalem aos 3 primeiros numeros
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(restanteNumeros);

// // Com OBJETOS
// console.log('------------------------');
// const livro = { 
//     titulo: 'O Senhor dos Anéis',
//     autor: 'J.R.R. Tolkien',
//     ano: 1954,
//     preco: 45.90
// }
// const {titulo, autor, ano, preco} = livro;
