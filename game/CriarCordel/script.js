//DEFINE NÚMERO DE ESTROFES VARIÁVEL
let estrofesQty = 0;
let currentPage = 0;
let currentFrameBackground = 0;

//DEFINE SE ESTÁ NO FINAL OU NÃO
let inTheFinal = false;

//DEFINE TÍTULO E AUTOR
let currentTitle = ""
let currentAuthor = ""
let currentVerses = []

//DEFINE O ARRAY COM OS MODELOS DE PAPEIS
const papersBackground = {
    moldura1: {
        little: "./assets/moldura_01_branca.svg",
        big: "./assets/moldura_01_bege.svg",
    },
    moldura2: {
        little: "./assets/moldura_02_branca.svg",
        big: "./assets/oldmoldura_02_bege.svg",
    },
    moldura3: {
        little: "./assets/moldura_03_branca.svg",
        big: "./assets/moldura_03_bege.svg"
    },
    moldura4: {
        little: "./assets/moldura_04_branca.svg",
        big: "./assets/moldura_04_bege.svg"
    },
    moldura5: {
        little: "./assets/moldura_05_branca.svg",
        big: "./assets/moldura_05_bege.svg"
    },
    moldura6: {
        little: "./assets/moldura_06_branca.svg",
        big: "./assets/moldura_06_bege.svg"
    },
}

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
        checkIfCanConclude();
    })
    body.appendChild(buttonConfirmar);
}
buttonConfirmar();

//RENDERIZA O INDICADOR DE QUANTIDADE DE ESTROFE
const renderEstrofeIndicator = () => {
    const estrofeIndicator = document.createElement("p");
    estrofeIndicator.classList.add("estrofeIndicator");
    estrofeIndicator.innerText = `Estrofe: ${currentPage}`;
    body.appendChild(estrofeIndicator)
}
renderEstrofeIndicator();

//RENDERIZA BOTÃO CRIAR ESTROFE
const buttonCriarEstrofe = () => {

    const criarEstrofeButton = document.createElement("img");
    criarEstrofeButton.src = "./assets/botao_criar.svg"
    criarEstrofeButton.classList.add("criarEstrofeButton")

    criarEstrofeButton.addEventListener("click", ()=>{

        let divParagraphs = document.querySelector(".divParagraphs");
        if(divParagraphs) { divParagraphs.parentElement.removeChild(divParagraphs)};

        //let existingButton = document.querySelector(".returnButton")
        //if(existingButton) {body.removeChild(existingButton)};

        estrofesQty += 1;
        currentPage = estrofesQty;

        let estrofe = [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
        currentVerses.push(estrofe);

        let paper = document.querySelector(".paper");
        let clip = document.querySelector(".clip");
        let pAuthor = document.querySelector(".pAuthor");
        let pTitle = document.querySelector(".pTitle");
        paper.classList.add("paper-animacao-from-center-to-left");
        clip.classList.add("clip-animacao-from-center-to-left");
        pAuthor.style.display = "none";
        pTitle.style.display = "none";
        setTimeout(() => {
            paper.parentElement.removeChild(paper);
            clip.parentElement.removeChild(clip);

            changePage();
            renderEstrofesCreator();
        }, 1000);

    })

    body.appendChild(criarEstrofeButton);

}
buttonCriarEstrofe();

//RENDERIZA O TÍTULO E AUTOR
const renderTitleAndAuthor = () => {

    const divTitleAndAuthor = document.createElement("div");
    divTitleAndAuthor.classList.add("divTitleAndAuthor");

    const divTitleAndInput = document.createElement("div");
    divTitleAndInput.classList.add("divTitleAndInput");
    const divAuthorAndInput = document.createElement("div");
    divAuthorAndInput.classList.add("divAuthorAndInput");


    const title = document.createElement("p");
    title.innerText = "Título: "

    const insertTitle = document.createElement("input");
    insertTitle.maxLength = 24;
    const author = document.createElement("p");
    insertTitle.addEventListener("input", () => {
        let pTitle = document.querySelector(".pTitle");
        pTitle.innerText = insertTitle.value;
        currentTitle = insertTitle.value;
    })

    author.innerText = "Autor: "
    const insertAuthor = document.createElement("input");
    insertAuthor.maxLength = 24;
    insertAuthor.addEventListener("input", () => {
        let pAuthor = document.querySelector(".pAuthor");
        pAuthor.innerText = insertAuthor.value;
        currentAuthor = insertAuthor.value;
    })

    title.classList.add("title");
    insertTitle.classList.add("insertTitle");


    author.classList.add("author");
    insertAuthor.classList.add("insertAuthor");

    divTitleAndInput.append(title, insertTitle)
    divAuthorAndInput.append(author, insertAuthor)
    divTitleAndAuthor.append(divTitleAndInput, divAuthorAndInput);
    body.appendChild(divTitleAndAuthor);
}
renderTitleAndAuthor();

//RENDERIZA O PRENDEDOR E PAPEL DO VARAL
const renderPaperAndClip = () => {
    const clip = document.createElement("img");
    clip.classList.add("clip")
    clip.src = "./assets/prendedor.svg"

    const paper = document.createElement("img");
    paper.classList.add("paper")

    const pTitle = document.createElement("p");
    pTitle.classList.add("pTitle");

    const pAuthor = document.createElement("p");
    pAuthor.classList.add("pAuthor");

    paper.src = papersBackground.moldura1.big

    body.append(clip, paper, pTitle, pAuthor)

}
renderPaperAndClip()

//RENDERIZA AS OPÇÕES DE BACKGROUND PARA SEREM ESCOLHIDAS
const renderBackgroundOptions = () => {
    const divBackgroundOptions = document.createElement("div");
    divBackgroundOptions.classList.add("divBackgroundOptions");

    for(let i = 0; i < 6; i++){
        let currentOption = document.createElement("img");
        currentOption.classList.add("currentOption");
        if(i === 0){currentOption.src = papersBackground.moldura1.little} else 
        if(i === 1){currentOption.src = papersBackground.moldura2.little} else 
        if(i === 2){currentOption.src = papersBackground.moldura3.little} else 
        if(i === 3){currentOption.src = papersBackground.moldura4.little} else 
        if(i === 4){currentOption.src = papersBackground.moldura5.little} else 
        if(i === 5){currentOption.src = papersBackground.moldura6.little}

        currentOption.addEventListener("click", ()=>{
            const paper = document.querySelector(".paper");
            if(i === 0){paper.src = papersBackground.moldura1.big; currentFrameBackground = 0;} else 
            if(i === 1){paper.src = papersBackground.moldura2.big; currentFrameBackground = 1;} else 
            if(i === 2){paper.src = papersBackground.moldura3.big; currentFrameBackground = 2;} else 
            if(i === 3){paper.src = papersBackground.moldura4.big; currentFrameBackground = 3;} else 
            if(i === 4){paper.src = papersBackground.moldura5.big; currentFrameBackground = 4;} else 
            if(i === 5){paper.src = papersBackground.moldura6.big; currentFrameBackground = 5;}
        })
        
        divBackgroundOptions.appendChild(currentOption);
    }

    body.appendChild(divBackgroundOptions);
}
renderBackgroundOptions();

//FUNÇÃO QUE TROCA DE PÁGINA
const changePage = () => {

    //CRIA UM NOVO PAPER E CLIP PARA INSERIR
    const createNewClipAndPaper = () => {
        let newClip = document.createElement("img");
        newClip.classList.add("clip");
        newClip.src = "./assets/prendedor.svg"
    
        let newPaper = document.createElement("img");
        newPaper.classList.add("paper");
        if(currentFrameBackground === 0) { newPaper.src = papersBackground.moldura1.big} else
        if(currentFrameBackground === 1) { newPaper.src = papersBackground.moldura2.big} else
        if(currentFrameBackground === 2) { newPaper.src = papersBackground.moldura3.big} else
        if(currentFrameBackground === 3) { newPaper.src = papersBackground.moldura4.big} else
        if(currentFrameBackground === 4) { newPaper.src = papersBackground.moldura5.big} else
        if(currentFrameBackground === 5) { newPaper.src = papersBackground.moldura6.big}
    
        body.appendChild(newPaper);
        body.appendChild(newClip);
    }
    createNewClipAndPaper();

    //ATUALIZA INDICADOR DA PÁGINA MOSTRANDO EM QUE PÁGINA ESTÁ
    const updatePageIndicator = () => {
        let estrofeIndicator = document.querySelector(".estrofeIndicator");
        estrofeIndicator.innerText = "Estrofe: " +currentPage;
    }
    updatePageIndicator();

    //REATIVA O TÍTULO E AUTOR QUANDO NA PÁGINA 0
    const reactivateTitleAndAuthor = () => {
        if (currentPage === 0) {
            let pAuthor = document.querySelector(".pAuthor");
            let pTitle = document.querySelector(".pTitle");
            pAuthor.style.display = "block";
            pTitle.style.display = "block";
        }
    }
    reactivateTitleAndAuthor();

    //INSERE BOTÕES DE VOLTAR E AVANÇAR ESTROFE COM BASE NA PÁGINA EM QUE SE ESTÁ
    const renderButtonsByPage = () => {

        const renderReturnButton = () => {
            if (currentPage > 0) {



                let existingButton = document.querySelector(".returnButton");
                if(!existingButton) {
                    let returnButton = document.createElement("img");
                    returnButton.classList.add("returnButton");
                    returnButton.src = "./assets/botao_seta_para_cima.svg";
                    body.appendChild(returnButton);
                    returnButton.addEventListener("click", () => {

                        let divParagraphs = document.querySelector(".divParagraphs");
                        if(divParagraphs) { divParagraphs.parentElement.removeChild(divParagraphs)};

                        if(currentPage > 0) {
                            currentPage -= 1;
                            let paper = document.querySelector(".paper");
                            let clip = document.querySelector(".clip");
                            paper.classList.add("paper-animacao-from-center-to-right");
                            clip.classList.add("clip-animacao-from-center-to-right");
                            setTimeout(() => {
                                if(paper) {paper.parentElement.removeChild(paper);};
                                if(clip) {clip.parentElement.removeChild(clip);};
                                
                                
                                changePage();
                                renderEstrofesCreator();
                            }, 1000);
                        }

                    })
                }
                
            } else if (currentPage === 0) {
                let existingButton = document.querySelector(".returnButton");
                existingButton.parentElement.removeChild(existingButton);
            }
        };
        renderReturnButton();

        const renderNextButton = () => {



            if (currentPage < estrofesQty) {

                let existingButton = document.querySelector(".nextButton");
                if(!existingButton) {
                    let nextButton = document.createElement("img");
                    nextButton.classList.add("nextButton");
                    nextButton.src = "./assets/botao_seta_para_cima.svg";
                    body.appendChild(nextButton);
                    nextButton.addEventListener("click", () => {

                        let divParagraphs = document.querySelector(".divParagraphs");
                        if(divParagraphs) { divParagraphs.parentElement.removeChild(divParagraphs)};

                        if(currentPage < estrofesQty) {

                            let pAuthor = document.querySelector(".pAuthor");
                            let pTitle = document.querySelector(".pTitle");
                            pAuthor.style.display = "none";
                            pTitle.style.display = "none";
    
                            currentPage += 1;
                            let paper = document.querySelector(".paper");
                            let clip = document.querySelector(".clip");
                            paper.classList.add("paper-animacao-from-center-to-left");
                            clip.classList.add("clip-animacao-from-center-to-left");
                            setTimeout(() => {
                                paper.parentElement.removeChild(paper);
                                clip.parentElement.removeChild(clip);
                                changePage();
                                renderEstrofesCreator();
                            }, 1000);

                        }
                        

                    })
                }
                
            } else if (currentPage === estrofesQty) {
                let existingButton = document.querySelector(".nextButton");
                if(existingButton){ existingButton.parentElement.removeChild(existingButton); }

            }
        };
        renderNextButton();




    }
    renderButtonsByPage();
    
    manageButtonsByPageQty();
}

//FUNÇÃO QUE ALTERA OS BOTÕES QUANDO EXISTE MAIS DE UMA PÁGINA
const manageButtonsByPageQty = () => {

    //SE EXISTIR MAIS DE UMA ESTROFE, ALTERA O BOTÃO DE CRIAR ESTROFE PARA NOVA ESTROFE
    const changeButtonByEstrofeQty = () => {
        if (estrofesQty > 0) {
            let existingButton = document.querySelector(".criarEstrofeButton");
            existingButton.src = "./assets/botao_nova_estrofe.svg"
        } else if (estrofesQty === 0) {
            let existingButton = document.querySelector(".criarEstrofeButton");
            existingButton.src = "./assets/botao_criar.svg"
        }
    }
    changeButtonByEstrofeQty();

    //ADICIONA BOTÃO DE EXCLUIR QUANDO TEM MAIS DE UMA ESTROFE
    const createDeleteEstrofeButton = () => {
        
        if (currentPage > 0) {
            const existingButton = document.querySelector(".deleteEstrofeButton");
            if(!existingButton){
                const deleteEstrofeButton = document.createElement("img");
                deleteEstrofeButton.classList.add("deleteEstrofeButton");
                deleteEstrofeButton.src = "./assets/botao_excluir_folha.svg";
                body.appendChild(deleteEstrofeButton)

                //FUNÇÃO QUE DELETA A ESTROFE ATUAL
                deleteEstrofeButton.addEventListener("click", () => {

                    let divParagraphs = document.querySelector(".divParagraphs");
                    if(divParagraphs) { divParagraphs.parentElement.removeChild(divParagraphs)};

                    let paper = document.querySelector(".paper");
                    let clip = document.querySelector(".clip");
                    paper.classList.add("paper-animacao-from-center-to-bottom");
                    clip.classList.add("clip-animacao-from-center-to-bottom");
                    setTimeout(() => {
                        currentVerses.splice(currentPage - 1, 1);
                        if(estrofesQty > 0) {estrofesQty -= 1;}
                        if(currentPage > 0) {currentPage -= 1;}

                        if(paper) {paper.parentNode.removeChild(paper);};
                        if(clip) {clip.parentNode.removeChild(clip);};
                        
                        manageButtonsByPageQty();
                        changePage();
                        renderEstrofesCreator();
                    }, 1000);
                })
            }
;





        } else if (currentPage === 0) {
            const existingButton = document.querySelector(".deleteEstrofeButton");
            if(existingButton){existingButton.parentElement.removeChild(existingButton);};
        }
    }
    createDeleteEstrofeButton();
}
manageButtonsByPageQty();

//FUNÇÃO QUE CRIA A CAIXA DE ESTROFES E RENDERIZA ELAS NAS PÁGINAS.
const renderEstrofesCreator = () => {

    let existingEstrofeDiv = document.querySelector(".divEstrofeInputs");
    if (existingEstrofeDiv) { existingEstrofeDiv.parentElement.removeChild(existingEstrofeDiv)};

    //VERIFICA EM QUAL PÁGINA ESTÁ E SE DEVE SER RENDERIZADO
    if(currentPage > 0) {

        const renderEstrofeInputs = () => {

            //RENDERIZA A DIV BASE
            const divEstrofeInputs = document.createElement("div");
            divEstrofeInputs.classList.add("divEstrofeInputs");
            body.appendChild(divEstrofeInputs);

            //RENDERIZA TODOS OS 6 INPUTS
            const renderAllSixInputs = () => {
                
                //RENDERIZA A DIV QUE CONTERÁ OS PARÁGRAFOS
                const divParagraphs = document.createElement("div");
                divParagraphs.classList.add("divParagraphs");

                for (let i = 0; i < 6; i++){

                    //CRIA A DIV BASE DO LABEL E INPUT
                    let currentDivEstrofeCreate = document.createElement("div");
                    currentDivEstrofeCreate.classList.add("currentDivEstrofeCreate");

                    //CRIA O LABEL E INPUT
                    let labelEstrofeCreate = document.createElement("label")
                    labelEstrofeCreate.classList.add("labelEstrofeCreate");
                    labelEstrofeCreate.innerText = i + 1;
                    let inputEstrofeCreate = document.createElement("input")
                    inputEstrofeCreate.classList.add("inputEstrofeCreate");
                    inputEstrofeCreate.value = currentVerses[currentPage -1][i];
                    inputEstrofeCreate.maxLength = 40;

                    //INSERE-OS DENTRO DA DIV BASE DO LABEL E INPUT
                    currentDivEstrofeCreate.append(labelEstrofeCreate, inputEstrofeCreate)

                    //INSERE A DIV COM LABEL E INPUT DENTRO DA DIV BASE GERAL
                    divEstrofeInputs.appendChild(currentDivEstrofeCreate);

                    //CRIA OS PARÁGRAFOS QUE TAMBÉM IRÃO RECEBER AS INFORMAÇÕES
                    let pEstrofeVerse = document.createElement("p");
                    pEstrofeVerse.classList.add("pEstrofeVerse");
                    pEstrofeVerse.innerText = currentVerses[currentPage - 1][i]


                    //FUNÇÃO PARA ALTERAR A VARIÁVEL COM OS NOVOS VALORES INSERIDOS
                    inputEstrofeCreate.addEventListener("input", () => {

                        currentVerses[currentPage - 1][i] = inputEstrofeCreate.value;
                        pEstrofeVerse.innerText = currentVerses[currentPage - 1][i];
                        
                    })

                    divParagraphs.appendChild(pEstrofeVerse);

                }

                body.append(divParagraphs);

            }
            if(inTheFinal === false) {
                renderAllSixInputs();  
            }

        }
        renderEstrofeInputs();
    }


    //ATUALIZA TODAS AS INFORMAÇÕES CONFORME O INPUT É PREENCHIDO



}
renderEstrofesCreator();

//FUNÇÃO QUE VERIFICA SE PODE CONCLUIR O CORDEL
const checkIfCanConclude = () => {

    if(estrofesQty === 0) {
       renderModal("É necessário preencher ao menos uma estrofe!");
    } else {
        let correct = 0;

        currentVerses.forEach((versos)=>{
            versos.forEach((verso)=>{
                if(verso !== ""){
                    correct += 1;
                }
            })
        });
    
        if(correct < 2) {
            renderModal("É necessário preencher ao menos dois versos!");
        } else {
            let pAuthor = document.querySelector(".pAuthor");
            let pTitle = document.querySelector(".pTitle");

            if(pAuthor.innerText !== "" && pTitle.innerText !== "") {
                renderFinal();
            } else {
                renderModal("Título e autor não podem estar em branco");
            }

        }
    }


}

//FUNÇÃO QUE RENDERIZA MODAL
const renderModal = (string) => {

    //DIV DE FUNDO DO MODAL PARA BLOQUEAR OS CLIQUES DE FUNDO
    const divBackgroundModal = document.createElement("div");
    divBackgroundModal.classList.add("divBackgroundModal");

    //IMG QUE TEM A MOLDURA
    const imgMoldura = document.createElement("img");
    imgMoldura.classList.add("divMoldura");
    imgMoldura.src = "./assets/cenario_8.svg"

    //ESCRITOS DO MODAL
    const pModal = document.createElement("p");
    pModal.classList.add("pModal");
    pModal.innerText = string;

    //BOTAO PARA FECHAR MODAL
    const buttonCloseModal = document.createElement("img");
    buttonCloseModal.classList.add("buttonCloseModal");
    buttonCloseModal.src = "./assets/botao_voltar.svg"
    

    body.append(divBackgroundModal, imgMoldura, pModal, buttonCloseModal);

    buttonCloseModal.addEventListener("click", () => {
        body.removeChild(divBackgroundModal);
        body.removeChild(imgMoldura);
        body.removeChild(pModal);
        body.removeChild(buttonCloseModal);
    })


}

//RENDERIZA TELA FINAL
const renderFinal = () => {

    inTheFinal = true;

    let divEstrofeInputs = document.querySelector(".divEstrofeInputs");
    if(divEstrofeInputs){divEstrofeInputs.parentElement.removeChild(divEstrofeInputs)}

    let divBackgroundOptions = document.querySelector(".divBackgroundOptions");
    if(divBackgroundOptions){divBackgroundOptions.parentElement.removeChild(divBackgroundOptions)}

    let estrofeIndicator = document.querySelector(".estrofeIndicator");
    estrofeIndicator.style.display = "none";

    let divTitleAndAuthor = document.querySelector(".divTitleAndAuthor");
    if(divTitleAndAuthor){divTitleAndAuthor.parentElement.removeChild(divTitleAndAuthor)}

    let imgBackground = document.querySelector(".imgBackground");
    imgBackground.src = "./assets/cenario_11.svg"
}