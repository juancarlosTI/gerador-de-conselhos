/*

***LINKS***

- Botao class: "img-dice" - Clicar no botão
- h4 class: "num-conselho" - ID do conselho
- h2 class: "bilhete-conselho" - Box onde será exibido o conselho

***API***

- Pegar o ID do conselho
- Pegar a descrição do conselho


*/

//Variáveis

const exibirConselho = document.querySelector('.bilhete-conselho');
const exibirId = document.querySelector('.num-conselho');
const botaoNovoConselho = document.querySelector('.img-dice').addEventListener('click', () => {
    clickDado();
});

//Código

async function conexaoApi(){
    const url = 'https://api.adviceslip.com/advice';
    const res = await fetch(url);
    return await res.json();
}

async function clickDado(){
    const api = await conexaoApi();
    exibirConselho.innerHTML = `${api.slip.advice}`;
    exibirId.innerHTML = `Conselho #${api.slip.id}`
}

clickDado();