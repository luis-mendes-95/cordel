//CAPTURA O BODY INTEIRO
const body = document.querySelector("body");

//CRIA O BACKGROUND DA PÁGINA INICIAL E INSERE DENTRO DO BODY
const imgBackground = document.createElement("img");
imgBackground.classList.add("imgBackground");
imgBackground.src = "./assets/cenario_2.svg";
body.appendChild(imgBackground);

//ALTERA O TAMANHO DO BACKGROUND IMG CONFORME O USUÁRIO ALTERA O TAMANHO DA TELA
window.addEventListener('resize', function(event) {
    imgBackground.style.width = `${window.innerWidth}px`;
});

//RENDERIZA FUNDO DOS ESCRITOS
const lettersBackground = () => {
    const backgroundLetters = document.createElement("img");
    backgroundLetters.classList.add("backgroundLetters")
    backgroundLetters.src = "./assets/painel_texto.svg"
    body.appendChild(backgroundLetters);
}
lettersBackground();

//RENDERIZA O TEXTAREA COM AS INFORMAÇÕES DE COMO SURGIU
const textareaLetters = () => {
    const areaLettersText = document.createElement("p");
    areaLettersText.classList.add("textareaLetters") 
    areaLettersText.innerText = "Os portugueses trouxeram a literatura de cordel para o Brasil no século XVIII. Aos poucos, foi se tornando cada vez mais popular. Ainda são vendidos em lonas ou malas estendidas em feiras populares. De custo baixo, geralmente esses pequenos livros são vendidos pelos próprios autores. Fazem grande sucesso em estados como Pernambuco, Ceará, Alagoas, Paraíba e Bahia. Esse sucesso ocorre em função do preço baixo, do tom humorístico de muitos deles e tambem por retratarem fatos da vida cotidiana da cidade ou da região. O Brasil, como qualquer país, tem riquezas culturais por vezes desconhecidas ou pouco conhecidas por seus próprios habitantes. A literatura de cordel é um exemplo disso. Trata-se de uma espécie de poesia dos estados de nossa cultura, em especial dos estados do Nordeste. São textos impressos e divulgados em folhetos ilustrados pelo processo de xilogravura, técnica de gravura na qual se utiliza madeira como matriz e possibilita a reprodução de imagens e textos sobre papel ou outro suporte adequado. Ganhou esse nome pois, em Portugal, eram expostos ao povo amarrados em cordões, estendidos em pequenas lojas de mercados populares ou até mesmo nas ruas."
    body.appendChild(areaLettersText);
}
textareaLetters()

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

