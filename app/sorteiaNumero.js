const menorValor = 1;
const maiorValor = 1000;
const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

elementoMaiorValor.innerHTML = maiorValor
elementoMenorValor.innerHTML = menorValor


const numeroSecreto = gerarNumeroAleatorio()
function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1)
}