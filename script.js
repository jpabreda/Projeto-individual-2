const calcular = document.getElementById('calcular');

function financiamento () {
    const nome = document.getElementById('nome').value;
    const renda = document.getElementById('renda').value;
    const valorDoBem = document.getElementById('valorDoBem').value;
    const entrada = document.getElementById('entrada').value;
    const i = document.getElementById('i').value;
    const n = document.getElementById('n').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && renda !== '' && valorDoBem !== '' && entrada !== '' && i != '' && n != '') {


        const taxa = (i/100)

        const PV = (valorDoBem - entrada) 

        const PMT = (((1+taxa)**n)*taxa*PV)/(((1+taxa)**n-1)).toFixed[2]

        const MAX = (renda * 0,3)

        
        resultado.textContent = `Olá, ${nome}! Seu finaciamento foi aprovado. Pague ${n} parcelas de R$ ${PMT}.`;

    }else {
        resultado.textContent = 'Para simular o valor de seu financiamento, preencha todos os campos.';
    }
}
calcular.addEventListener('click', financiamento);