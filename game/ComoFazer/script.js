//CAPTURA O BODY INTEIRO
const body = document.querySelector("body");

//CRIA O BACKGROUND DA PÁGINA INICIAL E INSERE DENTRO DO BODY
const imgBackground = document.createElement("img");
imgBackground.classList.add("imgBackground");
imgBackground.src = "./assets/cenario_4.svg";
body.appendChild(imgBackground);

//ALTERA O TAMANHO DO BACKGROUND IMG CONFORME O USUÁRIO ALTERA O TAMANHO DA TELA
window.addEventListener('resize', function(event) {
    imgBackground.style.width = `${window.innerWidth}px`;
});

//DEFINE A PÁGINA ATUAL
let page = 4;


//RENDERIZA BOTÃO VOLTAR
const buttonBack = () => {
    const backButton = document.createElement("img");
    backButton.src = "./assets/botao_voltar.svg"
    backButton.classList.add("backButton")
    backButton.addEventListener("click", ()=>{
        if(page > 4){
            imgBackground.src = `./assets/cenario_${page-1}.svg`;
            page -= 1;
        } else if (page === 4){
            window.location.href = "../../game/MainMenu"
        }

    })
    body.appendChild(backButton);
}
buttonBack();

//RENDERIZA BOTÃO AVANÇAR

const buttonNext = () => {
    const nextButton = document.createElement("img");
    nextButton.src = "./assets/botao_continuar.svg"
    nextButton.classList.add("nextButton")
    nextButton.addEventListener("click", ()=>{
        if(page === 4 || page === 5| page === 6){
            imgBackground.src = `./assets/cenario_${page+1}.svg`;
            page += 1;
            if (page === 7){
                window.location.href = "../../game/MainMenu"
            }
        } 

    })
    body.appendChild(nextButton);
}
buttonNext();


