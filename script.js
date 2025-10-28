const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click",mostraPalavrasChaves);

function mostraPalavrasChaves(){
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavrasChave = processaTexto(Texto);

    campoResultado.textContent = palavrasChave.join(", ")
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);

    let frequencias = {};

    for(let i of palavras){
        frequencia[i]=0;

        for (let j of palavras){
            if (i == j){
                frequencias[i]++;
            }
        }
    }

    return palavras;
}