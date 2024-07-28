//Pegando o tbody
const tbody = document.querySelector('tbody');
console.log(tbody);

//cancelando o evento padrao de enviar os dados do submit
document.querySelector('form').addEventListener('submit', function(e){
    //cancelando o evento padrao
    e.preventDefault();

    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];

    // criar a tr - para alocar as informacoes
    const tr = document.createElement('tr');

    //percorrendo o array e recuperando o campo de cada elemento do array e criar o td
    campos.forEach(campo => {

        //criar td
        const td = document.createElement('td');

        //pegar o valor do campo e passar para a td
        td.textContent = campo.value;

        //atribuindo a td ao elemento tr
        tr.appendChild(td);

    });

    //colocando a tr dentro do tbody
    tbody.appendChild(tr);

    //Limpar os campos do form
    this.reset();

});