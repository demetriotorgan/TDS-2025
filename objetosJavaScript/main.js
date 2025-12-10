//tipo de dados primitivos
var idade = 30;
var sexo = 'f';
var nome = 'Demetrio';
var existe = false;
var endereco = null;

console.log(typeof idade);
console.log(typeof sexo);
console.log(typeof nome);
console.log(typeof existe);
console.log(typeof endereco);

//pegando a primeira letra
var primeiraLetra = nome.charAt(0);
console.log(primeiraLetra);

//Tipos de Referencia
var pessoa = new Object({
    'nome':'Junior',
    'idade': 18,
    'Cidade': 'Nova Londrina'
});
console.log(pessoa);
console.log(typeof pessoa);

var carros = {
    'carro': 'Celta',
    'Ano': 2014,
    'Montadora': 'Chevrolet',
    'Modelo':'Duas portas'
}

console.log(typeof carros);
console.log(carros);


//funçoes
var mostraNome = new Function("console.log('Minha função')");
mostraNome();

var pessoas = new Array('João', 'José', 'Maria');
console.log(pessoas);

var alunos = ['Marta', 'Martinha', 'Martona'];
console.log(alunos);

function mostraIdade(){
    console.log(idade);
};
mostraIdade();  