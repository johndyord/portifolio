// Define a função cliqueiNoBotao no escopo global
function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value;
    buscarCidade(cidade);
}

// Define a função buscarCidade no escopo global
async function buscarCidade(cidade) {
    try {
        const key = "4aaa88d921b73713c61b0be1745509fb";
        const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

        console.log(dados);

        colocarDadosNaTela(dados); // Exibe os dados na tela após buscar
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

// Define a função para colocar os dados na tela
function colocarDadosNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = `Umidade ${dados.main.humidity}%`;
}

document.addEventListener("DOMContentLoaded", function () {
    const botaoBusca = document.querySelector(".find");
    botaoBusca.addEventListener("click", cliqueiNoBotao);
});
