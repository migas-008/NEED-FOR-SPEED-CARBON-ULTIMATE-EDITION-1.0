// Need for Speed Carbon: Ultimate Edition

window.addEventListener("load", () => {
    console.log("Site carregado com sucesso!");
});

// Efeito ao clicar no botão de download
const botao = document.querySelector("button");

if (botao) {
    botao.addEventListener("click", () => {
        alert("O download da versão 1.0 estará disponível em breve.");
    });
}
