const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click",mostraPalavrasChaves);

function mostraPalavrasChaves(){
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavras = processaTexto(Texto);

    campoResultado.textContent = palavrasChave.join(", ")
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);

    return palavras;
}