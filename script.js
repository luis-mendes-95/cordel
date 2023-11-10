//CAPTURA O BODY INTEIRO
const body = document.querySelector("body");


//CRIA O BACKGROUND DA PÁGINA INICIAL E INSERE DENTRO DO BODY
const imgBackground = document.createElement("img");
imgBackground.classList.add("imgBackground");
imgBackground.src = "./assets/startPage/cenario_1.svg";
imgBackground.style.width = `${window.innerWidth}px`;
body.appendChild(imgBackground);


//ALTERA O TAMANHO DO BACKGROUND IMG CONFORME O USUÁRIO ALTERA O TAMANHO DA TELA
window.addEventListener('resize', function(event) {
    imgBackground.style.width = `${window.innerWidth}px`;
});


//RENDERIZA AS LETRAS NO VARAL INICIAL
const calculateAnimationTime = (index) => {
    return 1 - (index * 0.05);
};
const renderStartLetters = (index) => {

    const sequenciaLetras = [
        { letra: "B", src: "./assets/startPage/letra_c.svg" },
        { letra: "C", src: "./assets/startPage/letra_c.svg" },
        { letra: "O", src: "./assets/startPage/letra_o.svg" },
        { letra: "R", src: "./assets/startPage/letra_r.svg" },
        { letra: "D", src: "./assets/startPage/letra_d.svg" },
        { letra: "E", src: "./assets/startPage/letra_e.svg" },
        { letra: "L", src: "./assets/startPage/letra_l.svg" },

    ]

    const imgLetter = document.createElement("img");
    imgLetter.classList.add(`img_letter_${sequenciaLetras[index].letra}`)
    imgLetter.src = sequenciaLetras[index].src


    setTimeout(() => {
        imgLetter.style.animation = `move${sequenciaLetras[index].letra}fromRightToLeft ${calculateAnimationTime(index)}s ease-in-out`
        body.appendChild(imgLetter);
    }, 300);

};
setTimeout(() => { for(let i = 1; i < 7; i++){ setTimeout(() => { renderStartLetters(i); }, i * 250); }}, 250);


//RENDERIZA O BOTÃO DE INICIAR
const startButton = document.createElement("img");
startButton.classList.add("startButton");
startButton.src = "./assets/startPage/botao_iniciar.svg";
setTimeout(() => {
    startButton.style.animation = "fadeInButton 2s ease-in-out"
    startButton.addEventListener("click", () => {location.href = "./game/MainMenu"})
    body.appendChild(startButton);
}, 1000);



