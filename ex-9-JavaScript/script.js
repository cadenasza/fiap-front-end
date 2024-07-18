const usuario = prompt('Digite o seu usuario');
const senha = prompt('Digite a sua senha');

if(usuario === 'user' && senha === '123') {
    console.log('login efetuado com sucesso!');

    const numeroProduto = Math.floor(Math.random() * 4) + 1;
    let nomeProduto;

    switch (numeroProduto) {
        case 1:
            nomeProduto = 'Notebook';
            break;
        case 2: 
            nomeProduto = 'Celular';
            break;
        case 3:
            nomeProduto = 'Impressora';
            break;
        case 4:
            nomeProduto = 'VideoGame';
            break;
        case 5:
            nomeProduto = 'Smartwatch';
            break;
        default:
            console.log('Produto Invalido');    
    }

    let precoProduto = Math.ceil(Math.random() * 5000);
    while(precoProduto < 1200) {
        precoProduto = Math.ceil(Math.random() * 5000);
    }
    
    let precoFrete = 0;
    if (precoProduto < 1600) {
        precoFrete = 37.50;
    }

    const percentualDesconto = (Math.floor(Math.random() * 9)) + 1;
    const desconto = (precoProduto * percentualDesconto) / 100;

    let precoFinal = precoProduto - desconto + precoFrete;

    console.log(`Produto: ${nomeProduto}`);
    console.log(`Preco do produto: ${precoProduto.toFixed(2)}`);
    console.log(`Desconto de: ${percentualDesconto}%: R$${desconto.toFixed(2)}`);
    console.log(`Valor do frete: R$${precoFrete.toFixed(2)}`);
    console.log(`Valor final: R$${precoFinal.toFixed(2)}`);

    for(let i = 1; i <=4; i++) {
        const parcela = precoFinal / 4
        console.log(`Parcela ${i}: R$${parcela.toFixed(2)}`);
    }
    console.log('Obrigado por comprar conosco!!');

} else {
    console.log('login invalido!');
}



