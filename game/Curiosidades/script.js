//CAPTURA O BODY INTEIRO
const body = document.querySelector("body");

//CRIA O BACKGROUND DA PÁGINA INICIAL E INSERE DENTRO DO BODY
const imgBackground = document.createElement("img");
imgBackground.classList.add("imgBackground");
imgBackground.src = "./assets/cenario_2.svg";
body.appendChild(imgBackground);

//ALTERA O TAMANHO DO BACKGROUND IMG CONFORME O USUÁRIO ALTERA O TAMANHO DA TELA
window.addEventListener('resize', function(event) {
    imgBackground.style.width = `${window.innerWidth}px`;;
    console.log('A largura da janela foi alterada para: ' + window.innerWidth);
});

//RENDERIZA FUNDO DOS ESCRITOS
const lettersBackground = () => {
    const backgroundLetters = document.createElement("img");
    backgroundLetters.classList.add("backgroundLetters")
    backgroundLetters.src = "./assets/BackgroundCuriosidades.png"
    body.appendChild(backgroundLetters);
}
lettersBackground();

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

