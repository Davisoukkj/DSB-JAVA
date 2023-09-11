//------------------------------------------------
//daqui pra baixo começa o js do site


//mudanças no titulo
//busca no site pelo titulo e armazena ele dentro da variavel "titulo"
let titulo = (document.querySelector(".titulo"));
//mostra no console o texto que esta dentro da variavel "titulo"
console.log(titulo.textContent);
//altera o conteudo da variavel "titulo" para o texto desejado
titulo.textContent = "Fica Grande Nutrição"

//mudanças na tabela
//armazena na variavel paciente os dados do primeiro-paciente
let paciente = document.querySelector("#primeiro-paciente")
//mostra no console o valor da variavel "paciente"
console.log(paciente);

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");


let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura*altura);
console.log(imc);

let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

//validações de dados
if (peso <= 0 || peso >= 1000) {
    tdImc.textContent = "peso invalido"
}
if (altura <= 0 || altura >= 3) {
    tdImc.textContent = "Altura invalido"
}
//DESAFIO!!
//FAZER APARECER O ERRO "PESO INVALIDO"
//NA CÉLULA DO IMC NA TABELA