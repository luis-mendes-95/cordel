//CAPTURA O BODY INTEIRO
const body = document.querySelector("body");

//CRIA O BACKGROUND DA PÁGINA INICIAL E INSERE DENTRO DO BODY
const imgBackground = document.createElement("img");
imgBackground.classList.add("imgBackground");
imgBackground.src = "./assets/cenario_2.svg";
imgBackground.style.width = `${window.innerWidth}px`;
body.appendChild(imgBackground);

//ALTERA O TAMANHO DO BACKGROUND IMG CONFORME O USUÁRIO ALTERA O TAMANHO DA TELA
window.addEventListener('resize', function(event) {
    imgBackground.style.width = `${window.innerWidth}px`;;
    console.log('A largura da janela foi alterada para: ' + window.innerWidth);
});

//RENDERIZA O VARAL
const varal = document.createElement("img");
varal.classList.add("varal");
varal.src = "./assets/varal.png"
body.appendChild(varal);

//RENDERIZA AS NOTAS NO VARAL
const calculateAnimationTime = (index) => {
    return 1 - (index * 0.05);
};
const renderNotes = (index) => {
    const sequenciaNotas = [
        { nota: "ComoSurgiu", src: "./assets/botao_como_surgiu.svg" },
        { nota: "ComoFazer", src: "./assets/botao_como_fazer.svg" },
        { nota: "Curiosidades", src: "./assets/botao_curiosidades.svg" },
        { nota: "CriarCordel", src: "./assets/botao_criar_cordel.svg" },
    ]

    const imgnote = document.createElement("img");
    imgnote.classList.add(`img_note_${sequenciaNotas[index].nota}`)
    imgnote.src = sequenciaNotas[index].src

    setTimeout(() => {
        console.log(`Renderizando ${sequenciaNotas[index].nota}`);
        imgnote.style.animation = `move${sequenciaNotas[index].nota}fromRightToLeft ${calculateAnimationTime(index)}s ease-in-out`
        body.appendChild(imgnote);
    }, 300);
};

setTimeout(() => {
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            renderNotes(i);
        }, i * 250);
    }
}, 250);


const addEventListeners = () => {

    let img_note_ComoSurgiu = document.querySelector(".img_note_ComoSurgiu");
    let img_note_ComoFazer = document.querySelector(".img_note_ComoFazer");
    let img_note_Curiosidades = document.querySelector(".img_note_Curiosidades");
    let img_note_CriarCordel = document.querySelector(".img_note_CriarCordel");

    img_note_ComoSurgiu.addEventListener("click", ()=>{
        window.location.href = "../../game/ComoSurgiu"
    })

    img_note_ComoFazer.addEventListener("click", ()=>{
        window.location.href = "../../game/ComoFazer"
    })

    img_note_Curiosidades.addEventListener("click", ()=>{
        window.location.href = "../../game/Curiosidades"
    })

    img_note_CriarCordel.addEventListener("click", ()=>{
        window.location.href = "../../game/CriarCordel"
    })

}

setTimeout(() => {
    addEventListeners();
}, 2000);


