//DEFINE NÚMERO DE ESTROFES VARIÁVEL
let estrofesQty = 0;

//CAPTURA O BODY INTEIRO
const body = document.querySelector("body");

//CRIA O BACKGROUND DA PÁGINA INICIAL E INSERE DENTRO DO BODY
const renderBackground = () => {
    const imgBackground = document.createElement("img");
    imgBackground.classList.add("imgBackground");
    imgBackground.src = "./assets/cenario_2.svg";
    body.appendChild(imgBackground);
    
}
renderBackground();

//ALTERA O TAMANHO DO BACKGROUND IMG CONFORME O USUÁRIO ALTERA O TAMANHO DA TELA
window.addEventListener('resize', function(event) {
    imgBackground.style.width = `${window.innerWidth}px`;;
    console.log('A largura da janela foi alterada para: ' + window.innerWidth);
});

//RENDERIZA BOTÃO VOLTAR
const buttonBack = () => {
    const backButton = document.createElement("img");
    backButton.src = "./assets/botao_voltar.svg"
    backButton.classList.add("backButton")
    backButton.addEventListener("click", ()=>{
        window.location.href = "../../game/MainMenu"
    })
    body.appendChild(backButton);
}
buttonBack();

//RENDERIZA O VARAL
const renderVaral = () => {
    const varal = document.createElement("img");
    varal.classList.add("varal");
    varal.src = "./assets/varal.png"
    body.appendChild(varal);
}
renderVaral();

//RENDERIZA BOTÃO CONFIRMAR CORDEL CRIADO
const buttonConfirmar = () => {
    const buttonConfirmar = document.createElement("img");
    buttonConfirmar.src = "./assets/botao_confirmar.svg"
    buttonConfirmar.classList.add("buttonConfirmar")
    buttonConfirmar.addEventListener("click", ()=>{
        window.location.href = "../../game/MainMenu"
    })
    body.appendChild(buttonConfirmar);
}
buttonConfirmar();

//RENDERIZA O INDICADOR DE QUANTIDADE DE ESTROFE
const renderEstrofeIndicator = () => {
    const estrofeIndicator = document.createElement("p");
    estrofeIndicator.classList.add("estrofeIndicator");
    estrofeIndicator.innerText = `Estrofe: ${estrofesQty}`;
    body.appendChild(estrofeIndicator)
}
renderEstrofeIndicator();

//RENDERIZA BOTÃO CRIAR ESTROFE
const buttonCriarEstrofe = () => {
    const criarEstrofeButton = document.createElement("img");
    criarEstrofeButton.src = "./assets/botao_criar.svg"
    criarEstrofeButton.classList.add("criarEstrofeButton")
    criarEstrofeButton.addEventListener("click", ()=>{
        estrofesQty += 1;
        let estrofeIndicator = document.querySelector(".estrofeIndicator")
        estrofeIndicator.innerText = `Estrofe: ${estrofesQty}`;
    })
    body.appendChild(criarEstrofeButton);
}
buttonCriarEstrofe();

//RENDERIZA O TÍTULO E AUTOR
const renderTitleAndAuthor = () => {

    const divTitleAndAuthor = document.createElement("div");
    divTitleAndAuthor.classList.add("divTitleAndAuthor");

    const title = document.createElement("p");
    title.innerText = "Título: "
    const insertTitle = document.createElement("input");
    const author = document.createElement("p");
    author.innerText = "Autor: "
    const insertAuthor = document.createElement("input");

    title.classList.add("title");
    insertTitle.classList.add("insertTitle");
    author.classList.add("author");
    insertAuthor.classList.add("insertAuthor");

    divTitleAndAuthor.append(title, insertTitle, author, insertAuthor);
    body.appendChild(divTitleAndAuthor);
}
renderTitleAndAuthor();

