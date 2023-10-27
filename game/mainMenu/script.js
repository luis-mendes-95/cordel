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


//RENDERIZA AS LETRAS NO VARAL INICIAL
const calculateAnimationTime = (index) => {
    return 1 - (index * 0.05);
};
const renderStartLetters = (index) => {

    const sequenciaLetras = [
        { letra: "B", src: "./game/mainMenu/letra_c.svg" },
        { letra: "ComoFazer", src: "./assets/botao_como_fazer.svg" },
        { letra: "ComoSurgiu", src: "./assets/botao_como_surgiu.svg" },
        { letra: "CriarCordel", src: "./assets/botao_criar_cordel.svg" },

    ]

    const imgLetter = document.createElement("img");
    imgLetter.classList.add(`img_letter_${sequenciaLetras[index].letra}`)
    imgLetter.src = sequenciaLetras[index].src


    setTimeout(() => {
        imgLetter.style.animation = `move${sequenciaLetras[index].letra}fromRightToLeft ${calculateAnimationTime(index)}s ease-in-out`
        body.appendChild(imgLetter);
    }, 300);

};
setTimeout(() => { for(let i = 1; i < 4; i++){ setTimeout(() => { renderStartLetters(i); }, i * 250); }}, 250);


//RENDERIZA O BOTÃO DE INICIAR
const startButton = document.createElement("img");
startButton.classList.add("startButton");
startButton.src = "./game/mainMenu/botao_iniciar.svg";

setTimeout(() => {
    startButton.style.animation = "fadeInButton 2s ease-in-out"
    body.appendChild(startButton);
}, 1000);



