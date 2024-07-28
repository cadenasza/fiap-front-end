
//pegando pelo id
const getId1 = document.getElementById('vingadores');

//ou com querySelcetor
const getId2 = document.querySelector('#vingadores');


//pegando pela class
const getClass = document.getElementsByClassName('nome');
console.log(getClass[2].textContent);

//com o query selector - retorna um elemento e para o  primeiro, para pegar todos utilizar o querySelectorAll
const getClass2 = document.querySelector('.nome');
console.log(getClass2);

const getAllClass = document.querySelectorAll('.nome');
console.log(getAllClass);


//Pegando pela tag
const getTag = document.getElementsByTagName('td');
console.log(getTag);

//query Selector
const getTag2 = document.querySelectorAll('tr');
console.log(getTag2);


