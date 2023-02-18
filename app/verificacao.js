function verificaSeOChuteTemUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementChute.innerHTML += '<div>Valor invalido</div>';

        return;
    }

    if (numeroMaiorOuMenor(numero)) {

        elementChute.innerHTML += `<div>Valor invalido: Fale um numero entre ${menorValor} e ${maiorValor}</div>
        `;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Voce acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente"> Jogar Novamente </div>
        `
    } else if(numeroSecreto < numero) {
        elementChute.innerHTML += `
            <div>O numero secreto é menor</div>
        `
    } else {
        elementChute.innerHTML += `
            <div>O numero secreto é maior</div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
