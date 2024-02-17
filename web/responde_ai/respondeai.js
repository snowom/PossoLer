function modifyRESPAI()
{
    enableUrlChangeDetect();
    checkButtonCreation();

    unlockPaidContent();
    window.addEventListener('locationchange',()=>{
        checkButtonCreation();
    });

    try{
        verificaAtualizacaoVersao();
        mainUnlockRESPAI();
    }catch(erro){
        alert(erro.toString());
    }
}


function mainUnlockRESPAI()
{

    let id = window.setInterval(function() {}, 0);
    while (id--) {
        window.clearInterval(id);
    }

    let waitAxios = setInterval(()=>{
        if(typeof(axios) == "function" && typeof(Swal) == 'function') {
            clearInterval(waitAxios);

			axios({
				method: "GET",
				url: `${DOMAIN}/API/paywalldom/respondeaiConfigs`,
				timeout: 10000
			}).then((resp)=>{
                //LOOP Para remover bloqueios caso haja atualização dos iframes
                setInterval(()=>{
                    setSelectableArea();
                    removeBloqueioExercicioLivro(resp.data);
                    removeBlur(resp.data);
                    expandContent(resp.data);
                    removeExpandButtons();
                    removeShowCompleteSolutionButtons();
                    removeAllBtnShowSolucao(resp.data);
                    removeBloqueioTeoria(resp.data);
                    removeBloqueioConteudoExclusivo(resp.data);
                },800);
			}).catch((erro) => {
                if(erro.toString().includes('timeout')){
                    sweetAlert(
                        'error',
                        'Erro',
                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                    );
                }else{
                    sweetAlert(
                        'error',
                        'Erro',
                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                    );
                }

            })
		}
    },800);
}


function unlockPaidContent()
{
    setInterval(()=>{
        if(typeof(_current_user) != 'undefined' && _current_user != null)
        {
            if(_current_user.hasAccess == false)
            {
                try{
                    _current_user.hasAccess = true;
                    document.getElementById("body-wrapper").click()
                }catch(e){
                    console.log("ERRO ATUALIZA FRAME CADEADOS AFTER UNLOCK");
                }
                finally{
                    incrementaConteudoAPI();
                }
            }
        }
    },800);
}


function setSelectableArea()
{
    let divs = document.querySelectorAll('div');
    divs.forEach((div)=>{
        let cssProperties = getComputedStyle(div);
        if(cssProperties.inset == '0px' && cssProperties.cursor == 'pointer')
            div.style.cssText += 'inset: unset !important;';
    });
}


function removeBlur(configs)
{
    let divs = document.querySelectorAll("div");
    divs.forEach((div)=>{
        configs.blur_class.forEach((current_blur_class) => {
            if(div.classList.contains(current_blur_class)){
                div.classList.remove(current_blur_class);
                incrementaConteudoAPI();
            }
        });
    });
}


function removeBloqueioExercicioLivro(configs)
{
    let keys = [false, false, false];
    let divBlock = document.querySelectorAll(`.${configs.unlogged_remove_book_block[0]}`);
    let body = document.querySelectorAll(`.${configs.unlogged_remove_book_block[1]}`);
    let containerBlock = document.querySelectorAll(`.${configs.unlogged_remove_book_block[2]}`);

    body.forEach((b)=>{
        b.classList.remove(`.${configs.unlogged_remove_book_block[1]}`);
        keys[0] = true;
    });

    divBlock.forEach((div)=>{
        div.remove();
        keys[1] = true;
    });

    containerBlock.forEach((container)=>{
        container.remove();
        keys[2] = true;
    });

    if(keys[0] && keys[1] && keys[2]) incrementaConteudoAPI();
}


function removeAllBtnShowSolucao(configs)
{
    let btnSolucaoCompleta = document.querySelectorAll(`#${configs.unlogged_remove_show_solution_button[0]}`);
    let btns = document.querySelectorAll(`.${configs.unlogged_remove_show_solution_button[1]}`);
    let buttons = document.querySelectorAll(`${configs.unlogged_remove_show_solution_button[2]}`);

    btnSolucaoCompleta.forEach((btn)=>{btn.remove();});
    btns.forEach((btn)=>{btn.remove()});
    buttons.forEach((button)=>{if(button.textContent != "Cadastrar" && button.textContent != "Entrar") button.remove();})
}


function removeBloqueioTeoria(configs)
{
    let elementosPaywall = document.querySelectorAll(`.${configs.unlogged_remove_block_theory[0]}`);
    let elementosTheory = document.querySelectorAll(`.${configs.unlogged_remove_block_theory[1]}`);
    let btnExpandir = document.querySelectorAll(`.${configs.unlogged_remove_block_theory[2]}`);

    elementosPaywall.forEach((elem)=>{elem.classList.remove(`.${configs.unlogged_remove_block_theory[0]}`);});
    elementosTheory.forEach((elem)=>{elem.classList.remove(`.${configs.unlogged_remove_block_theory[1]}`);});
    btnExpandir.forEach((elem)=>{elem.remove();});
}


function removeBloqueioConteudoExclusivo(configs)
{
    let bloqueioOverlay = false;
    let bloqueioWrapper = false;

    let loginOverlay = document.querySelectorAll(`.${configs.unlogged_exclusive_content[0]}`);
    if(loginOverlay.length>0){
        for(let i=0; i<loginOverlay.length; i++){

            let elementAttributes = loginOverlay[i].attributes;
            for(let j=0; j<elementAttributes.length; j++){
                if(elementAttributes[j].name == "style"){
                    loginOverlay[i].removeAttribute("style");
                    bloqueioOverlay = true;
                    break;
                }
            }
        }
    }

    let mainWrapper = document.querySelectorAll(`.${configs.unlogged_exclusive_content[1]}`);
    if(mainWrapper.length>0){
        for(let i=0; i<mainWrapper.length; i++){

            let elementAttributes = mainWrapper[i].attributes;
            for(let j=0; j<elementAttributes.length; j++){
                if(elementAttributes[j].name == "style"){
                    mainWrapper[i].removeAttribute("style");
                    bloqueioWrapper = true;
                    break;
                }
            }
        }
    }

    if(bloqueioOverlay && bloqueioWrapper) incrementaConteudoAPI();
}


function expandContent(configs)
{
    let sections = document.querySelectorAll('section');
    sections.forEach((section)=>{
        if(section.offsetHeight == configs.paywall_height_size){
            section.style.height = 'unset';
        }
    });
}


function removeExpandButtons()
{
    let btn = document.querySelectorAll('button');
    btn.forEach((button)=>{
        if((button.textContent).includes('Expandir')){
            button.parentElement.remove();
        }
    });
}


function removeShowCompleteSolutionButtons()
{
    let btn = document.querySelectorAll('button');
    btn.forEach((button)=>{
        if((button.textContent).includes('Mostrar Solução Completa')){
            button.parentElement.remove();
        }
    });
}