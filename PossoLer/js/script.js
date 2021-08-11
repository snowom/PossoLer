let currentURL = window.location.hostname;


if(currentURL.includes("folha.uol.com.br")){
    saveDataForDashboard(1);
    modifyFLSP();

}else if(currentURL.includes("estadao.com.br")){
    saveDataForDashboard(2);
    modifyESTADAO();

}else if(currentURL.includes("oglobo.globo.com") && !(window.location.href.includes("/epoca"))){
    saveDataForDashboard(3);
    modifyGLOBO();
}
else if(currentURL.includes("gazetadopovo.com.br")){
    saveDataForDashboard(4);
    modifyGAZETA();
}
else if(currentURL.includes("super.abril.com.br")){
    saveDataForDashboard(5);
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("quatrorodas.abril.com.br")){
    saveDataForDashboard(6);
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("veja.abril.com.br") || (currentURL.includes("vejasp.abril"))){
    saveDataForDashboard(7);
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("guiadoestudante.abril.com.br")){
    saveDataForDashboard(10);
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("respondeai.com.br")){
    saveDataForDashboard(8);
    modifyRESPAI();
}
else if(currentURL.includes("exame.com")){
    saveDataForDashboard(9);
    modifyEXAME();
}
else if(currentURL.includes("oglobo.globo.com") && window.location.href.includes("/epoca")){
    //MIGROU PARA O DOMINIO OGLOBO.COM
    saveDataForDashboard(11);
    modifyEPOCA();
}
else if(currentURL.includes("revistagalileu.globo.com")){
    saveDataForDashboard(13);
    modifyGALILEU();
}
else if(currentURL.includes("epocanegocios.globo.com")){
    saveDataForDashboard(12);
    modifyGALILEU();
}
else if(currentURL.includes("revistamarieclaire.globo.com")){
    saveDataForDashboard(14);
    modifyGALILEU();
}
else if(currentURL.includes("revistagloborural.globo.com")){
    saveDataForDashboard(15);
    modifyGALILEU();
}
else if(currentURL.includes("revistapegn.globo.com")){
    saveDataForDashboard(26);
    modifyGALILEU();
}
else if(currentURL.includes("possoler.tech")){
    modifyPossoLer();
}
else if(currentURL.includes("jota.info")){
    saveDataForDashboard(16);
    modifyJOTA();
}
else if(currentURL.includes("nsctotal.com.br")){
    saveDataForDashboard(17);
    modifyNSC();
}
else if(currentURL.includes("nytimes.com")){
    saveDataForDashboard(18);
    modifyNYTIMES();
}
else if(currentURL.includes("elpais.com")){
    saveDataForDashboard(19);
    modifyELPAIS();
}
else if(currentURL.includes("jornalvs.com.br")){
    saveDataForDashboard(20);
    modifyJVS();
}
else if(currentURL.includes("valor.globo.com")){
    saveDataForDashboard(21);
    modifyVLRECON();
}
else if(currentURL.includes("gauchazh.clicrbs.com.br") || currentURL.includes("especiais.zh.clicrbs")){
    modifyGZH();
}
else if(currentURL.includes('jornaldocomercio.com')){
    saveDataForDashboard(23);
    modifyJCMR();
}
else if(currentURL.includes('economist.com')){
    saveDataForDashboard(24);
    modifyECONOMIST();
}
else if(currentURL.includes("brainly.com.br")){
    saveDataForDashboard(25);
    modifyBRAINLY();
}



/* =============================== BRAINLY =============================== */

function modifyBRAINLY()
{
    let r = setInterval(()=>{
        if(verificaElemento('.brn-qpage-next-answer-box-content') && verificaElemento('.js-react-bottom-banner') && typeof(axios) == 'function'){
            clearInterval(r);

            if(Swal.isVisible() == false){
                sweetAlert(
                    'info',
                    'Aguarde um momento...',
                    'Estamos removendo os bloqueios para você...<br><br>'
                );
            }

            const URL_REQUEST = 'https://possoler.tech/API/brainly/index.php?urlTarefa=';
            const METHOD_REQUEST = 'GET';

            axios({
                method: METHOD_REQUEST,
                url: `${URL_REQUEST}${window.location.href}`,
                timeout: 30000
            }).then((resp)=>{

                let r = setInterval(()=>{
                    if(typeof(Swal) == 'function'){
                        clearInterval(r);
                        
                        removeBrainlyBlocks();
                        expandAnswerDiv();
    
                        let answersBlocks_1 = document.querySelectorAll('.brn-qpage-next-answer-box-content');
                        let answersBlocks_2 = document.querySelectorAll('.brn-qpage-next-dummy-unlock-section');
                        let allAnswersBlocks = [...answersBlocks_1, ...answersBlocks_2];
    
                        for(let i=0; i<resp.data.answers.length; i++){
                            allAnswersBlocks[i].innerHTML = resp.data.answers[i];
                            if(i == (resp.data.answers.length)-1){
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Sucesso',
                                    html:  'Ótimo! Conteúdo desbloqueado!',
                                    allowEscapeKey: false,
                                    allowOutsideClick: false,
                                    showConfirmButton: true,
                                    timer: 7000,
                                    timerProgressBar: true,
                                    customClass: {
                                        popup: 'snackZ-index',
                                        container: 'snackZ-index'
                                    }
                                });
                                observerResposta(resp.data.answers);
                                incrementaConteudoAPI();
                                verificaAtualizacaoVersao();
                                //setActionBtnVerRespostaBrainly();
                            }
                        }
                    }
                },800);
            }).catch((erro)=>{
                if(erro.toString().includes('timeout')){
                    sweetAlert(
                        'error',
                        'Erro',
                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`
                    );
                }else{
                    sweetAlert(
                        'error',
                        'Erro',
                        `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`
                    );
                }
            });
        }
    },800);
}


function observerResposta(answers)
{
    setInterval(()=>{
        let btns = document.querySelectorAll("button");
        for(let i=0; i<btns.length; i++){
            let childNodesBtn = btns[i].childNodes;
            for(let j=0; j<childNodesBtn.length; j++){
                if(childNodesBtn[j].textContent == 'Desbloquear'){
                    let answersBlocks_1 = document.querySelectorAll('.brn-qpage-next-answer-box-content');
                    let answersBlocks_2 = document.querySelectorAll('.brn-qpage-next-dummy-unlock-section');
                    let allAnswersBlocks = [...answersBlocks_1, ...answersBlocks_2];

                    for(let i=0; i<answers.length; i++){
                        allAnswersBlocks[i].innerHTML = answers[i];
                    }
                    //setActionBtnVerRespostaBrainly();
                    break;
                }
            }
        }
    },800);
}

function expandAnswerDiv()
{
    //TIRA MAX-HEIGHT DAS DIVS DE RESPOSTA
    let r = setInterval(()=>{
        if(verificaElemento('.brn-qpage-next-answer-box__content--blocked')){
            clearInterval(r);
            let answersBlocks = document.querySelectorAll('.brn-qpage-next-answer-box__content--blocked');
            for(let i=0; i<answersBlocks.length; i++){
                answersBlocks[i].style.maxHeight = 'unset';
                answersBlocks[i].style.position = 'unset';
            }
        }
    },800);
}


function setActionBtnVerRespostaBrainly()
{
    let f1 = findBtnVerResposta();
    let f2 = findFlag();

    let r = setInterval(()=>{
        if(f1 != false && f2 != false){
            clearInterval(r);
            try{
                document.getElementById('btnResposta').addEventListener('click', (event)=>{
                    event.preventDefault();
                    window.location.href = '#FLAG_AQUI';
                });
            }catch(e){
                console.log('Erro ao setar action no botão');
            }
        }
    },800);
}


function findFlag()
{
    let flag = document.querySelector('.js-react-question-box-comments');
    flag.setAttribute('id', 'FLAG_AQUI');
    document.querySelector('html').style.cssText += 'scroll-behavior: smooth;';
    return flag;
}


function findBtnVerResposta()
{
    let btns = document.querySelectorAll('button');

    for(let i=0; i<btns.length; i++){
        if(btns[i].className == 'sg-button sg-button--m sg-button--solid-blue sg-button--full-width'){
            let childrenNodes = btns[i].childNodes;
            for(let j=0; j<childrenNodes.length; j++){
                if(childrenNodes[j].className.includes('sg-button__text') && childrenNodes[j].textContent == 'Ver respostas'){
                    btns[i].setAttribute('id', 'btnResposta');
                    try{
                        document.querySelector('.js-react-authentication-in-modal').remove();
                    }catch(e){
                        console.log('nada para remover');
                    }
                    return true;
                }
            }
        }
    }

    return false;
}


function removeBrainlyBlocks()
{
    //REMOVE BLOQUEIO DE CIMA DAS DIVS
    let r = setInterval(()=>{
        let bannerBlock = document.querySelectorAll('div');
        for(let i=0; i<bannerBlock.length; i++){
            if(bannerBlock[i].hasAttribute('data-testid')){
                if(bannerBlock[i].getAttribute('data-testid') == 'unlock_section_wrapper'){
                    clearInterval(r);
                    bannerBlock[i].remove();
                }
            }
        }
    },800);

    //REMOVE FOOTER DE QUANTIDADE DE RESPOSTAS RESTANTES
    let bannerFooter = document.querySelectorAll('.js-react-bottom-banner');
    for(let i=0; i<bannerFooter.length; i++){
        try{
            bannerFooter[i].remove();
        }catch(erro){
            console.log('nada para excluir');
        }
    }

    //REMOVE FALSE FLAG BLUR RESPOSTA
    let u = setInterval(()=>{
        if(verificaElemento('.brn-qpage-next-answer-box__below-blockade')){
            clearInterval(u);
            if(!document.querySelector('.brn-qpage-next-answer-box__below-blockade').hasChildNodes()){
                document.querySelector('.brn-qpage-next-answer-box__below-blockade').style.display = 'none';
            }
        }
    },800);

    //REMOVE CAMADA QUE IMPEDE INTERAÇÃO DO USUARIO
    let y = setInterval(()=>{
        if(document.head != null){
            clearInterval(y);
            document.head.innerHTML += `<style>*::before{content:none !important;} *::after{content:none !important;}</style>`;
        }
    },800);

    let z = setInterval(()=>{
        if(verificaElemento('.js-register-toplayer')){
            clearInterval(z);
            document.querySelector('.js-register-toplayer').remove();
        }
    },800);
}



/* ======================= THE ECONOMIST ============================== */

function modifyECONOMIST()
{
    //bloqueado por negação de requisição!
    //Olhar em js/background/denyRequests.js
    verificaAtualizacaoVersao();

}

/* ===================== JORNAL DO COMERCIO =================== */

function modifyJCMR()
{
    //bloqueado por negação de requisição!
    //Olhar em js/background/denyRequests.js
    verificaAtualizacaoVersao();
}



/* ====================== GAUCHA ZH =========================== */

function modifyGZH()
{
    //bloqueado por negação de requisição!
    //Olhar em js/background/denyRequests.js

    verificaAtualizacaoVersao();
    let urlBase = document.location.href;

    setInterval(()=>{
        let tmpUrl = document.location.href;
        if(urlBase != tmpUrl){
            urlBase = tmpUrl;
            console.log('MUDEI URL');
            verificaAtualizacaoVersao();
            saveDataForDashboard(22);
        }
    },800);
}



/* ====================== VALOR ECONOMICO ===================== */

function modifyVLRECON()
{
    const LINK = `https://webcache.googleusercontent.com/search?q=cache:${document.location.href}`;
    const URL_REQUEST = `https://possoler.tech/API/cache_api/index.php?link=${LINK}`;

    let rotina = setInterval(()=>{
        if(verificaElemento('.paywall-cpt') || verificaElemento(".barber-barrier-cpnt") || verificaElemento(".paywall")){
            clearInterval(rotina);

            //MONTA SWEET ALERT DE DESBLOQUEIO
            let s = setInterval(()=>{
                if(typeof(Swal) == 'function'){
                    clearInterval(s);
                    console.log('ACHEI SWALL');
        
                    if(Swal.isVisible() == false){
                        sweetAlert(
                            'info',
                            'Aguarde um momento...',
                            'Estamos removendo os bloqueios para você...<br><br>'
                        );
                    }
                }
            },800);

            //AQUI A MAGICA ACONTECE
            setTimeout(()=>{
                axios({
                    method: 'GET',
                    url: URL_REQUEST,
                    timeout: 30000
                }).then((resp)=>{
                    if(typeof(resp.data.status) == 'undefined' && (resp.data != '\r\n') && (resp.data != '\n') && (resp.data.status != 'erro')){
                        console.clear();
                        console.log('SUCESSO GET PAGE CODE');
                        console.log(resp);
    
                        let cacheSourceCode = new DOMParser().parseFromString(resp.data, "text/html");
                        let blocoNoticia = getArticle(cacheSourceCode);
                        let blocoOriginal = getArticle(document);
                        
                        let u = setInterval(()=>{
                            if(blocoNoticia != null && blocoOriginal != null){
                                clearInterval(u);

                                if(blocoNoticia != false && blocoOriginal != false){

                                    blocoOriginal.innerHTML = blocoNoticia.outerHTML;
                                    sweetAlert(
                                        'success',
                                        'Sucesso',
                                        'Ótimo! Conteúdo desbloqueado!'
                                    );
    
                                    setTimeout(()=>{
                                        removeAds();
                                        corrigeImgsCache();
                                    },3000);

                                    //VERIFICA E REMOVE SOFT PAYWALLS
                                    let f = setInterval(()=>{
                                        if(verificaElemento('.paywall-cpt') || verificaElemento(".barber-barrier-cpnt")){
                                            clearInterval(f);
                                            if(verificaElemento('.paywall-cpt')){
                                                removeBloqueioGLOBO();
                                            }else if(verificaElemento(".barber-barrier-cpnt")){
                                                removeBlockCelularVLRECON();
                                            }
                                        }
                                    },800);
                                }else{
                                    sweetAlert(
                                        'warning',
                                        'Atenção',
                                        'Ops, infelizmente não é possível desbloquear essa página. <br>Que tal tentar outra notícia nesse site? <br><br>'
                                    );
                                    return;
                                }
                            }
                        },800);
    
                    }else{
                        console.clear();
                        console.log(`ERRO!\n\n Status = ${resp.data.status}\nMensagem = ${resp.data.resposta}`);
    
                        if(resp.data == '\r\n' || resp.data == '\n' || resp.data.status == 'error_off'){
                            sweetAlert(
                                'error',
                                'Erro',
                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${resp.data.resposta}`
                            );
                            return;
                        }else{
                            if(resp.data.resposta.includes('cache')){
                                sweetAlert(
                                    'warning',
                                    'Atenção',
                                    'Ops, infelizmente não foi possível desbloquear essa página. <br>Que tal tentar um pouco mais tarde ou tentar outra notícia? <br><br>'
                                );
                                return;
                            } else{
    
                                sweetAlert(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${resp.data.resposta}`
                                );
                                return;
                            }
                        }
                    }
    
                }).catch((erro)=>{
                    console.log(erro);

                    if(erro.toString().includes('timeout')){
                        sweetAlert(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`
                        );
                    }else{
                        sweetAlert(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`
                        );
                    }
                });
            }, 2000);
        }
    }, 800);
}


function corrigeImgsCache()
{
    let divs = document.querySelectorAll('div');

    for(let i=0; i<divs.length; i++){
        if(divs[i].classList.contains("glb-skeleton-box")){
            divs[i].classList.remove("glb-skeleton-box");
            divs[i].style.cssText += 'padding-top: 0 !important;';
        }
    }
}


function removeBlockCelularVLRECON()
{
    try{
        let block = document.querySelector(".barber-barrier-cpnt");

        if(block != null || block != undefined)
        {
            block.remove();
            document.body.style.overflow = "auto";
            verificaAtualizacaoVersao();
            incrementaConteudoAPI();
        }
    }catch(erro){
        console.error('ERRO')
    }
}


function sweetAlert(icon, title, msg)
{
    let opt = (icon == 'info') ? false : true;

    Swal.close();

    if(icon == 'success'){
        Swal.fire({
            icon: icon,
            title: title,
            html: msg,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: opt,
            timer: 7000,
            timerProgressBar: true,
            customClass: {
                popup: 'snackZ-index',
                container: 'snackZ-index'
            }
        });
        window.stop();
        return;
    }

    Swal.fire({
        icon: icon,
        title: title,
        html: msg,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: opt,
        customClass: {
            popup: 'snackZ-index',
            container: 'snackZ-index'
        }
    });
}


function getArticle(scope)
{
    let articles = scope.querySelectorAll('article');

    for(let i=0; i<articles.length; i++){
        if(articles[i].hasAttribute("itemprop")){
            if(articles[i].getAttribute("itemprop").includes("articleBody")){
                return articles[i];
            }
        }
    }

    return false;
}


function removeAds()
{
    let divs = document.querySelectorAll('div');

    for(let i=0; i<divs.length; i++){
        if(divs[i].hasAttribute("data-block-type")){
            if(divs[i].getAttribute("data-block-type").includes("ads")){
                divs[i].remove();
            }
        }
    }
}


/* ====================== JORNAL VS =========================== */

function modifyJVS()
{
    let sourceCode;

    if(window.location.href.includes("jornalvs.com.br/multimidia")){
        removeBlockPaywall();
    }else{
        if(sourceCode == null){
            fetch(document.location.href)
            .then(response => response.text())
            .then(pageSource => {
                sourceCode = new DOMParser().parseFromString(pageSource, "text/html");
                montaNoticiaJVS(sourceCode);
            });
        }
    }
}


function montaNoticiaJVS(sourceCode)
{
    let passei = false;

    let r = setInterval(()=>{
        let iframes = document.querySelectorAll("iframe");

        for(let i=0; i<iframes.length; i++){
            if(iframes[i].hasAttribute("src")){
                if(iframes[i].getAttribute("src").includes("jornalvs.com.br/tools/2019/paywall/")){

                    let bodyMateria = document.querySelector("#materia");
                    bodyMateria.innerHTML = sourceCode.querySelector("#materia").outerHTML;
                    restauraImgs(bodyMateria);

                    let r1 = setInterval(()=>{
                        if(verificaElemento("html") && verificaElemento("body")){
                            clearInterval(r1);
                
                            document.querySelector("html").style.overflow = "auto";
                            document.querySelector("body").style.overflow = "auto";
                
                            //REMOVE PAYWALL FOOTER
                            let iframes = document.querySelectorAll("iframe");
                            for(let i=0; i<iframes.length; i++){
                                if(iframes[i].hasAttribute("src")){
                                    if(iframes[i].getAttribute("src").includes("jornalvs.com.br/tools/2019/paywall/")){
                                        iframes[i].remove();
                                        break;
                                    }
                                }
                            }
                
                            //REMOVE BACKGROUND PAYWALL FOOTER
                            let divs = document.querySelectorAll("div");
                            for(let i=0; i<divs.length; i++){
                                if(divs[i].hasAttribute("style")){
                                    if(divs[i].getAttribute("style").includes("z-index:9999997; opacity:0.6")){
                                        divs[i].remove();
                                        break;
                                    }
                                }
                            }

                            if(passei == false){
                                incrementaConteudoAPI();
                                verificaAtualizacaoVersao();
                                passei = true;
                            }
                        }
                    },800);
                    break;
                }
            }
        }
    },800);

    window.addEventListener("load", ()=>{
        setTimeout(()=>{
            clearInterval(r);
            console.log("LIMPEI INTERVAL AFTER 5 SEG");
        }, 5000);
    });
}


function removeBlockPaywall()
{
    let keys = [false, false];

    let r = setInterval(()=>{
        if(verificaElemento("html") && verificaElemento("body")){

            document.querySelector("html").style.overflow = "auto";
            document.querySelector("body").style.overflow = "auto";

            //REMOVE PAYWALL FOOTER
            let iframes = document.querySelectorAll("iframe");
            for(let i=0; i<iframes.length; i++){
                if(iframes[i].hasAttribute("src")){
                    if(iframes[i].getAttribute("src").includes("jornalvs.com.br/tools/2019/paywall/")){
                        iframes[i].remove();
                        keys[0] = true;
                        break;
                    }
                }
            }

            //REMOVE BACKGROUND PAYWALL FOOTER
            let divs = document.querySelectorAll("div");
            for(let i=0; i<divs.length; i++){
                if(divs[i].hasAttribute("style")){
                    if(divs[i].getAttribute("style").includes("z-index:9999997; opacity:0.6")){
                        divs[i].remove();
                        keys[1] = true;
                        break;
                    }
                }
            }
        }
    },800);

    window.addEventListener("load", ()=>{
        setTimeout(()=>{
            clearInterval(r);
            console.log("LIMPEI INTERVAL AFTER 5 SEG");

            if(keys[0] == true && keys[1] == true){
                incrementaConteudoAPI();
                verificaAtualizacaoVersao();
            }
        }, 5000);
    });
}



/* ====================== EL PAIS =========================== */

function modifyELPAIS()
{
    let passei = false;
    let sourceCode;

    fetch(document.location.href)
    .then(response => response.text())
    .then(pageSource => {
        sourceCode = new DOMParser().parseFromString(pageSource, "text/html");
    });

    let r = setInterval(()=>{
        if((verificaElemento("#ctn_closed_article") || verificaElemento(".paywallModal")) && sourceCode != null){
            if(verificaElemento(".paywallModal")) document.querySelector(".paywallModal").remove();
            
            let blocoNoticia = document.querySelector("article");
            blocoNoticia.innerHTML = (sourceCode.querySelector("article")).outerHTML;
            removeSubscriptionBanners();

            if(passei==false){
                incrementaConteudoAPI();
                verificaAtualizacaoVersao();
                passei = true;
            }
        }
    }, 800);

    window.addEventListener("load", ()=>{
        clearInterval(r);
    })
}


function removeSubscriptionBanners()
{
    let subscriptionsDivs = document.querySelectorAll(".suscripcion");
    for(let i=0; i<subscriptionsDivs.length; i++){
        subscriptionsDivs[i].remove();
    }

    window.addEventListener("load", ()=>{
        let bannerPaywallOfferBig = document.querySelector("#paywallOfferBig");
        if(bannerPaywallOfferBig != null) bannerPaywallOfferBig.remove();
    })
}


/* ========================= NEWYORK TIMES =========================== */

function modifyNYTIMES()
{
    let r = setInterval(()=>{
        if(verificaElemento("#gateway-content")){
            clearInterval(r);
            document.querySelector("#gateway-content").remove();

            let article = document.querySelector(".css-mcm29f");
            if(article != null) {
                article.style.cssText += "position: unset !important; overflow: auto !important;";
            }

            let blackDiv = document.querySelector('.css-gx5sib');
            if(blackDiv != null) blackDiv.remove();

            incrementaConteudoAPI();
            verificaAtualizacaoVersao();
        }
    }, 800);
}

/* ========================= NSC TOTAL =============================== */

function modifyNSC()
{
    fetch(document.location.href)
    .then(response => response.text())
    .then(pageSource => {

		let sourceCode = new DOMParser().parseFromString(pageSource, "text/html");

        let r = setInterval(()=>{
            if(sourceCode != null || sourceCode != undefined){
                clearInterval(r);

                let blocoNoticia = sourceCode.querySelector(".paywall-content");

                let rotina = setInterval(()=>{
                    if(verificaElemento("#signwall-template") && verificaElemento(".ContentFadeOut__Wrapper-sc-164tfq8-0") && (blocoNoticia != null || blocoNoticia != undefined)){
                        clearInterval(rotina);

                        let contentNoticia = document.querySelector(".ContentFadeOut__Wrapper-sc-164tfq8-0");
                        contentNoticia.innerHTML = blocoNoticia.outerHTML;
                        contentNoticia.style.maxHeight = "none";
                        document.querySelector("#signwall-template").remove();

                        incrementaConteudoAPI();
                        verificaAtualizacaoVersao();
                    }
                },800);
            }
        },800);
	});
}


/* ======================= JOTA ================================= */

function modifyJOTA()
{
    let rotina = setInterval(()=>{
        if(verificaElemento("head")) {
            clearInterval(rotina);

            let links = document.head.querySelectorAll("link");
            let linkJSON;

            for(let i=0; i<links.length; i++)
            {
                if(links[i].getAttribute("href").includes("https://www.jota.info/wp-json/wp/v2/posts/"))
                {
                    linkJSON = links[i].getAttribute("href");
                    getJsonConteudoNoticia(linkJSON);
                    break;
                }
            }
            removeBloqueioPaywallJOTA();
            verificaAtualizacaoVersao();
        }
    },800);
}


function getJsonConteudoNoticia(link)
{
    axios({
        method: "GET",
        url: link,
        timeout: 15000
    }).then((resp)=>{
        let respFunction = setNoticiaContainerJOTA(resp.data.content.rendered);

        let rotina = setInterval(()=>{
            if (respFunction != null || respFunction != undefined) {
                clearInterval(rotina);
                console.log("TENHO RESPOSTA FUNCTION JOTA = "+respFunction);
                removeBannerProJOTA();
            }
        },800);

    }).catch((erro)=>{
        console.error(erro);
    });
}


function setNoticiaContainerJOTA(noticia)
{
    let childrenContainer = document.querySelector(".jota-article__content").children;
    let arrayPossibleAttributes = ["style", "data-amp-original-style"];

    for(let i=0; i<childrenContainer.length; i++) {
        for(let j=0; j<arrayPossibleAttributes.length; j++) {
            if(childrenContainer[i].hasAttribute(arrayPossibleAttributes[j])) {
                if(childrenContainer[i].getAttribute(arrayPossibleAttributes[j]).includes("font-weight:400"))
                {
                    childrenContainer[i].innerHTML = `${noticia}`;
                    incrementaConteudoAPI();
                    return 1;
                }
            }
        }
    }

    return 0;
}


function removeBloqueioPaywallJOTA()
{   
    let rotina = setInterval(()=>{
        if(verificaElemento(".jota-paywall__wrap"))
        {
            clearInterval(rotina);
            document.querySelector(".jota-paywall__wrap").remove();
        }
    },800);
}


function removeBannerProJOTA()
{
    let links = document.querySelectorAll("a");

    for(let i=0; i<links.length; i++) {
        if(links[i].getAttribute("href").includes("source=Banner"))
        {
            links[i].parentElement.remove();
        }
    }
}



/* ============================ POSSO LER ============================= */

function modifyPossoLer()
{
    const codigo = 
    `if(typeof(VERSAO_ATUAL) == 'undefined')
    {
       var VERSAO_ATUAL = '109';
    }`;

    let script = document.createElement("script");
    script.type = "text/javascript";

    try{
        script.appendChild(document.createTextNode(codigo));
    }catch(e){
        script.text = codigo;
    }finally{
        document.head.appendChild(script);
    }
}

/* ======================= REVISTA GALILEU ====================== */

function modifyGALILEU()
{
    let codigoPage;

    fetch(document.location.href)
    .then(response => response.text())
    .then(pageSource => {
        codigoPage = new DOMParser().parseFromString(pageSource, "text/html");
    });

    let rotina = setInterval(()=>{
        removeFooter();
        if(verificaElemento(".paywall-cpt")){
            clearInterval(rotina);

            let divNoticia = codigoPage.querySelector('.protected-content');
            let elementoPai = document.querySelector("article");

            removeBloqueioGLOBO();
            elementoPai.appendChild(divNoticia);
            restauraImgs(elementoPai);
            restauraPodcast(divNoticia);
            
        }else if(verificaElemento(".barber-barrier-cpnt")){
            clearInterval(rotina);
            removeBlockCelular();
        }
    },800);

    verificaAtualizacaoVersao();
}


function removeFooter()
{
    let footer = document.querySelectorAll(".banner-bottom-fixed-cpnt");

    if(footer.length>0){
        for(let i=0; i<footer.length; i++){
            footer[i].remove();
        }
    }
}


function restauraPodcast(codeBody)
{
    let podcastElements = codeBody.querySelectorAll("iframe");

    if(podcastElements.length>0){
        for(let i=0; i<podcastElements.length; i++){
            let linkPdct = podcastElements[i].getAttribute("data-src");

            if(linkPdct != null){
                podcastElements[i].removeAttribute("data-src");
                podcastElements[i].setAttribute("src", linkPdct);
            }
        }
    }
}


function removeBlockCelular()
{
    let block = document.querySelector(".barber-barrier-cpnt");

    if(block != null)
    {
        block.remove();
        document.body.style.overflow = "auto";
        verificaAtualizacaoVersao();
        incrementaConteudoAPI();
    }
}

/* ======================= REVISTA EPOCA ======================== */

function modifyEPOCA()
{
    let codigoPage;

    fetch(document.location.href)
    .then(response => response.text())
    .then(pageSource => {
        codigoPage = new DOMParser().parseFromString(pageSource, "text/html");
    });

    let rotina = setInterval(()=>{
        removeFooter();
        if(verificaElemento(".paywall-cpt")){
            clearInterval(rotina);

            let divNoticia = codigoPage.querySelector('.article__content-container');
            let elementoPai = document.querySelector(".article");

            removeBloqueioGLOBO();
            elementoPai.appendChild(divNoticia);
            restauraImgs(elementoPai);

        }else if(verificaElemento(".barber-barrier-cpnt")){
            clearInterval(rotina);
            removeBlockCelular();
        }
    },800);

    verificaAtualizacaoVersao();
}


function restauraImgs(bodyNoticia)
{
    let imgsNoticia = bodyNoticia.querySelectorAll("img");

    for(let i=0; i<imgsNoticia.length; i++){
        let linkImg = imgsNoticia[i].getAttribute("data-src");

        if(linkImg!=null){
            imgsNoticia[i].removeAttribute("data-src");
            imgsNoticia[i].setAttribute("src",linkImg);
        }
    }
}


/* ======================= EXAME ================================ */

function modifyEXAME()
{
    fetch(document.location.href)
        .then(response => response.text())
        .then(pageSource => {

            let codigoFonte = new DOMParser().parseFromString(pageSource, 'text/html');

            let interval = setInterval(()=>{
                if(verificaElemento('#adid')){
                    clearInterval(interval);
                    
                    let articleNotice = codigoFonte.getElementById(`post-${codigoFonte.getElementById('adid').textContent}`);
                    const NAME_DIV_ARTICLE = `post-${codigoFonte.getElementById('adid').textContent}`;
    
                    let rotina = setInterval(()=>{
                        if(verificaElemento(`#${NAME_DIV_ARTICLE}`)){
                            clearInterval(rotina);
                            document.getElementById(`${NAME_DIV_ARTICLE}`).innerHTML = articleNotice.outerHTML;
                            verificaAtualizacaoVersao();
                            incrementaConteudoAPI();
                        }
                    },800);
                }
            },800);

            verificaAtualizacaoVersao();
    });
}


/* ====================== RESPONDE AI ===========================  */

function modifyRESPAI()
{
    checkButtonCreation();

    let urlBase = document.location.href;
    setInterval(()=>{
        let tmpUrl = document.location.href;
        if(urlBase != tmpUrl){
            urlBase = tmpUrl;
            checkButtonCreation();
        }
    },800);

    injectPayloadRespondeAI();
    window.addEventListener('load', ()=>{
        const TIMEOUT = 3000;
        setTimeout(()=>{
            let codigoSemBloqueio = document.querySelector("html");
            let scripts = codigoSemBloqueio.querySelectorAll("script");
            removeScriptObserver(scripts, codigoSemBloqueio);
        },TIMEOUT);
        verificaAtualizacaoVersao();
    });
}


/* ============================ FIX BUG EXERCICIOS RESOLVIDOS DOS LIVROS ============================ */
function checkButtonCreation()
{
    if(document.getElementById('btnResposta') == null || document.getElementById('btnResposta') == undefined){
        let fullURL = window.location.href;
        if(fullURL.includes('materias/solucionario/livro') && fullURL.includes('/edicao/') && fullURL.includes('/exercicio/')){
            createButtonResposta();
            saveDataForDashboard(8);

            let r = setInterval(()=>{
                if(typeof(Swal) == 'function'){
                    clearInterval(r);

                    if(localStorage.getItem('agreeMessageBugFix') != 'true') { /* CRIA CHAVE PARA ARMAZENAR CONSENTIMENTO MSG */
                        localStorage.setItem('agreeMessageBugFix', "false");
                        swallBugFix(
                            '[Posso Ler?]<br> Correção de bug Responde Aí',
                            '<br>Na última versão da extensão <strong>Posso Ler?</strong> havia um pequeno bug que mostrava a solução dos exercícios de forma repetida em todos os passos.<br><br> Nessa versão, esse bug já foi corrigido. Para ver a resolução do exercício em questão, é só clicar no botão <strong>Ver resolução do exercício</strong>, localizado no canto inferior esquerdo da tela.<br><br><br>Obrigado pela paciência e por apoiar o projeto!<br><br>',
                            'Não quero ver essa mensagem de novo'
                        );
                    }
                }
            },800);
        }
    }
}


function swallBugFix(title, msg, placeHolderText)
{
    Swal.fire({
        title: title,
        html: msg,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: true,
        input: 'checkbox',
        inputValue: 0,
        inputPlaceholder: placeHolderText,
        inputValidator: (result) => {
            let response = (result) ? "true" : "false";
            localStorage.setItem('agreeMessageBugFix', response);
        },
        customClass: {
            content: 'text-left'
        }
    });
}


function createButtonResposta()
{
    let r = setInterval(()=>{
        if(document.body != null && document.body != undefined && typeof(Swal) == 'function'){
            clearInterval(r);

            let btnResposta = document.createElement('button');
            btnResposta.setAttribute('id','btnResposta');
            btnResposta.setAttribute('title','Ver Resolução');
            btnResposta.innerText = 'Ver resolução do exercício';
            document.body.appendChild(btnResposta);

            //SET ESTILO BOTAO
            btnResposta.style.cssText = `position: fixed;
            bottom: 20px;
            left: 30px;
            z-index: 99;
            border: none;
            outline: none;
            background-color: #28a745;
            color: white;
            cursor: pointer;
            padding: 15px;
            border-radius: 5px;
            font-size: 18px;
            -webkit-box-shadow: 10px 5px 5px 0 rgb(0 0 0 / 20%), 10px 5px 10px 0 rgb(0 0 0 / 10%);
            box-shadow: 10px 5px 5px 0 rgb(0 0 0 / 20%), 10px 5px 10px 0 rgb(0 0 0 / 10%);

            -webkit-transition: opacity 600ms, visibility 600ms;
            transition: opacity 600ms, visibility 600ms;
            opacity: 1;`;

            //ADD EVENTO NO BOTAO
            document.getElementById('btnResposta').addEventListener('click', ()=>{
                showSolution();
            });
        }
    },800);
}


function showSolution()
{
    let JWT_TOKEN = getCookie('user_jwt');
    let ID_EXERCICIO = getExerciseId();

    let wait = setInterval(()=>{
        if(JWT_TOKEN != null && ID_EXERCICIO != null){
            clearInterval(wait);

            Swal.fire({
                title: 'Resolução Completa',
                html: `<iframe src="https://possoler.tech/API/responde_ai/index.php?userToken=${JWT_TOKEN}&exerciseId=${ID_EXERCICIO}" style='width: 100%; height: 100% !important; border: none;'></iframe>`,
                showCloseButton: true,
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: false,
                customClass: {
                    popup: 'respai',
                    content: 'contentSolution',
                    htmlContainer: 'contentSolution',
                    header: 'headerPopup'
                }
            });
        }
    },800);
}


function getCookie(cname)
{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return null;
}


function getExerciseId()
{
    let fullURL = document.location.href;
    let urlParts = fullURL.split("/");

    return urlParts[urlParts.length-1];
}


function removeScriptObserver(s, codigoSemBloqueio)
{
    for(let i=0; i<s.length; i++){
        if(s[i].textContent.includes(`new MutationObserver((changes)`)){
            s[i].remove();
            remountPage("html", codigoSemBloqueio);
            break;
        }
    }

    //removeHeaderLogin();
    removeBloqueioExercicioLivro()
    removeBlur();
    removeAllBtnShowSolucao();
    removeBloqueioTeoria();
    removeBloqueioConteudoExclusivo();

    //LOOP Para remover bloqueios caso haja atualização dos iframes
    setInterval(()=>{
        //removeHeaderLogin();
        removeBloqueioExercicioLivro()
        removeBlur();
        removeAllBtnShowSolucao();
        removeBloqueioTeoria();
        removeBloqueioConteudoExclusivo();
    },800);
}


function removeBloqueioExercicioLivro()
{
    let keys = [false, false, false];

    let divBlock = document.querySelectorAll(".ReactModalPortal");
    if(divBlock.length>0)
    {
        for(let i=0; i<divBlock.length; i++){
            divBlock[i].remove();
        }
        keys[0] = true;
    }

    let body = document.querySelectorAll(".ReactModal__Body--open");
    if(body.length>0)
    {
        for(let i=0; i<body.length; i++){
            body[i].classList.remove("ReactModal__Body--open");
        }
        keys[1] = true;
    }

    let containerBlock = document.querySelectorAll(".NoAccessDisclaimer__Container-sc-6er3z1-0");
    if(containerBlock.length>0)
    {
        for(let i=0; i<containerBlock.length; i++){
            containerBlock[i].remove();
        }
        keys[2] = true;
    }

    if(keys[0] && keys[1] && keys[2]) incrementaConteudoAPI();
}


function injectPayloadRespondeAI()
{
    let payload = `window.onload = ()=>{
            setInterval(()=>{
                if(typeof(_current_user) != 'undefined')
                {
                    if(_current_user.hasAccess == false)
                    {
                        try{
                            _current_user.hasAccess = true;
                            document.getElementById("body-wrapper").click();
                        }catch(e){
                            console.log("ERRO ATUALIZA FRAME CADEADOS AFTER UNLOCK");
                        }
                        finally{
                            ${incrementaConteudoAPI()};
                        }
                    }
                }
            },800);
        }`;

    let script = document.createElement("script");
    script.type = "text/javascript";

    try{
        script.appendChild(document.createTextNode(payload));
    }catch(e){
        script.text = payload;
    }finally{
        document.head.appendChild(script);
    }
}


function remountPage(elemento, codigoBase)
{
    document.querySelector(elemento).innerHTML = codigoBase.outerHTML;
}


function removeHeaderLogin()
{
    let header = document.querySelectorAll(".global_menu__fixed_header__login_container");
    
    if(header.length>0){
        for(let i=0; i<header.length; i++){
            header[i].remove();
        }
    }
}


function removeBlur()
{
    let blurElements = document.querySelectorAll(".blur");

    for (let i=0; i<blurElements.length; i++){
        blurElements[i].classList.remove("blur");
        blurElements[i].style.filter = 'none';
    }

    if(blurElements.length>0) incrementaConteudoAPI();
}


function removeAllBtnShowSolucao()
{
    let btnSolucaoCompleta = document.querySelectorAll("#exercise-expand-button");
    if(btnSolucaoCompleta.length>0){
        for(let i=0; i<btnSolucaoCompleta.length; i++){
            btnSolucaoCompleta[i].remove();
        }
    }
    else{
        let btns = document.querySelectorAll(".exercise-theory-expand-button");
        for(let i=0; i<btns.length; i++){
            btns[i].remove();
        }
    }
}


function removeBloqueioTeoria()
{
    let elementosPaywall = document.querySelectorAll(".paywall");
    if(elementosPaywall.length>0){
        for(let i=0; i<elementosPaywall.length; i++){
            elementosPaywall[i].classList.remove("paywall");
        }
    }

    let elementosTheory = document.querySelectorAll(".theory-container");
    if(elementosTheory.length>0){
        for(let i=0; i<elementosTheory.length; i++){
            elementosTheory[i].classList.remove("theory-container");
        }
    }

    let btnExpandir = document.querySelectorAll(".expand-overlay");
    if(btnExpandir.length>0){
        for(let i=0; i<btnExpandir.length; i++){
            btnExpandir[i].remove();
        }
    }
}


function removeBloqueioConteudoExclusivo()
{
    let bloqueioOverlay = false;
    let bloqueioWrapper = false;

    let loginOverlay = document.querySelectorAll(".login-overlay");
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

    let mainWrapper = document.querySelectorAll(".main-wrapper");
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


/* ====================== SUPER INTERESSANTE ===================== */

function modifySUPINTERESSANTE()
{
    let rotina = setInterval(()=>{
        if(verificaElemento(".piano-offer-overlay") && verificaElemento("#piano_offer")){
            clearInterval(rotina);
            removeBloqueioSPRINTERESSANTE();
        }
    },800);
}


function removeBloqueioSPRINTERESSANTE()
{
    document.getElementById("piano_offer").remove();
    document.querySelector(".piano-offer-overlay").remove();
    document.body.classList.remove("disabledByPaywall");

    verificaAtualizacaoVersao();
    incrementaConteudoAPI();
}

/* ====================== GAZETA ================================= */

function modifyGAZETA()
{

    fetch(document.location.href)
    .then(response => response.text())
    .then(pageSource => {

        let blocoNoticia = new DOMParser().parseFromString(pageSource,"text/html").getElementById("tp-post-content");

        let rotina = setInterval(()=>{
            if(verificaBloqueioGAZETA()){
                clearInterval(rotina);
    
                removeBlockGAZETA();

                if(getFatherElementGAZETA()){
                    remountDivNoticiaGAZETA(blocoNoticia);
                    restauraImgsGAZETA(document.getElementById("tp-post-content"));
                }

                decrementZindexHeaderGAZETA()
                removeFooterGAZETA();
                verificaAtualizacaoVersao();
                incrementaConteudoAPI();
            }
        },800);
    });
}


function verificaBloqueioGAZETA()
{
    return document.querySelector(".tp-container-inner")!=null ? true : false;
}


function getFatherElementGAZETA()
{
    return document.querySelector(".tpl-post");
}


function removeBlockGAZETA()
{
    document.querySelector(".tp-container-inner").remove();
}


function remountDivNoticiaGAZETA(blocoNoticia)
{
    document.getElementById("tp-post-content").innerHTML = blocoNoticia.outerHTML;
}


function decrementZindexHeaderGAZETA()
{
    document.getElementById("gp-header").style.zIndex = '99999';
}


function removeFooterGAZETA()
{
    let rotina = setInterval(()=>{
        if(document.getElementById("d-pos-footer")!=null){
            clearInterval(rotina);
            document.getElementById("d-pos-footer").remove();
        }
    }, 800);
}


function restauraImgsGAZETA(bodyNoticia)
{
    //REMOVE CLASSE QUE BLOQUEIA IMGs
    let classBloqueioImg = bodyNoticia.querySelectorAll(".img-fallback");

    for(let i=0; i<classBloqueioImg.length; i++){
        classBloqueioImg[i].classList.remove("img-fallback")
    }


    //REMONTA AS IMAGENS
    let sourceNoticia = bodyNoticia.querySelectorAll("source");

    for(let i=0; i<sourceNoticia.length; i++){
        let linkImg = sourceNoticia[i].getAttribute("data-srcset");

        if(linkImg!=null){
            sourceNoticia[i].removeAttribute("data-srcset");
            sourceNoticia[i].setAttribute("srcset",linkImg);
        }
    }
}


/* ====================== O GLOBO ================================ */

function modifyGLOBO()
{
     let rotina = setInterval(()=>{
         if(verificaElemento(".article__content-container")){
             clearInterval(rotina);
             
             let divNoticia = getNoticeBlock('.article__content-container');
             let elementoPai = getFatherElement('.article__content-container');

             let rotinaVerificaBloqueio = setInterval(()=>{

                if(verificaElemento('.paywall-cpt')){
                    clearInterval(rotinaVerificaBloqueio);
                    removeBloqueioGLOBO();
                    elementoPai.appendChild(divNoticia);

                }else if(verificaElemento(".barber-barrier-cpnt")){
                    clearInterval(rotina);
                    removeBlockCelular();
                }
             }, 800);

         }
     }, 800)
}


function getNoticeBlock(elemento)
{
    return document.querySelector(elemento);
}



function removeBloqueioGLOBO()
{

    document.querySelector('.paywall-cpt').remove();

    document.body.style.overflow = 'auto';
    document.body.style.position = 'unset';

    try{
        document.querySelector('.banner-bottom-fixed-cpnt').remove();
    }catch(erro){
        console.log('ERRO AO REMOVER FOOTER = ' + erro);
    }

    verificaAtualizacaoVersao();
    incrementaConteudoAPI();
}


function getFatherElement(elementoFilho)
{
    return document.querySelector(elementoFilho).parentElement;
}


/* ====================== ESTADAO ================================ */
var currentY;
var msgUpdate = 0;

function modifyESTADAO()
{
    let u = setInterval(()=>{
        if(verificaComponentsEST()===true){
            clearInterval(u);
            removeBloqueioEST();
        }
    }, 800)
}


function verificaComponentsEST()
{
    return (document.getElementById('paywall-wrapper-iframe-estadao') != null) ? true : currentY = window.pageYOffset;
}


function removeBloqueioEST()
{
    if(verificaElemento('.paywall-wrapper-iframe-estadao'));
        document.getElementById('paywall-wrapper-iframe-estadao').remove();
    
    if(verificaElemento('.assine-bottom-banner-component'))
        document.querySelector('.assine-bottom-banner-component').remove();

    let y = setInterval(()=>{
        if(document.querySelector('html').style.overflow != 'auto'){
            clearInterval(y);
            document.querySelector('html').style.overflow = 'auto';
            document.querySelector('html').style.width = 'auto';
            document.querySelector('html').style.position = 'unset';
            window.scrollTo(0,currentY);
        }
    },800);

    if(msgUpdate<=0){
        verificaAtualizacaoVersao();
        msgUpdate++;
        incrementaConteudoAPI();
    }
    
    modifyESTADAO();
}

/* ====================== FOLHA DE SP ============================ */

function modifyFLSP()
{
    let rotina = setInterval(() => {
        if(verificaElemento('#paywall-flutuante') && verificaElemento('#paywall-content') && verificaElemento('#paywall-fill')){
            clearInterval(rotina);
            removeBloqueio();
        }
    }, 800);
}


function removeBloqueio()
{
    document.getElementById('paywall-flutuante').remove();
    document.getElementById('paywall-fill').remove();

    document.getElementById('paywall-content').style.overflow = 'auto';

    verificaAtualizacaoVersao();
    incrementaConteudoAPI();
}


/* =========================== CDN's E UPDATE VERSION ================================= */

function configSnackBar(msg, tituloBtn, tempo)
{
    return {
            text: msg,
            actionTextColor: '#a1ff00',
            actionText: tituloBtn,
            pos: 'top-right',
            duration: tempo*1000,
            customClass: 'snackZ-index',
            onActionClick: ()=>{
                window.open('https://possoler.tech/#blockDownload');
            }
        };
}


function verificaAtualizacaoVersao()
{
    const CURRENT_VERSION = '109';
    const URL_API_UPDATE = 'https://possoler.tech/API/searchUpdates.php';
    let tempoAwait = 5;

    axios({
        method: 'get',
        url: URL_API_UPDATE,
        timeout: 10000,
    }).then((resposta)=>{
        let updateVersion = resposta.data.update.currentVersion;
        let msgUpdate = resposta.data.params.msg;
        let tituloBtn = resposta.data.params.btnMgs;
        let tempo = resposta.data.params.time;

        if(CURRENT_VERSION<updateVersion){

            tempoAwait = 12;
            let options = configSnackBar(msgUpdate,tituloBtn,tempo);
            Snackbar.show(options);
        }

        verificaMensagensAPI(tempoAwait);

    }).catch((erro)=>{
        console.error(erro);
        verificaMensagensAPI(tempoAwait);
    });
}


function verificaMensagensAPI(time)
{
    const URL_MESSAGES = 'https://possoler.tech/API/searchMessages.php';

    axios({
        method: 'get',
        url: URL_MESSAGES,
        timeout: 40000,
    }).then((resposta)=>{

        if(resposta.data.messages.length>0){
            setTimeout(()=>{
                let qtdMessages = resposta.data.messages.length;
                showSnackMessages(resposta, qtdMessages);
            }, time*1000);
        }

    }).catch((erro)=>{
        console.error(erro);
    });
}


function showSnackMessages(resposta, qtdMessages)
{
    let tempoMensagemAPI = resposta.data.messages[contMessageIndex].time;

    let options = {
        text: resposta.data.messages[contMessageIndex].msg,
        actionTextColor: '#a1ff00',
        showAction: true,
        actionText: 'OK',
        pos: 'top-right',
        duration: tempoMensagemAPI*1000,
        customClass: 'snackZ-index',
    };

    Snackbar.show(options);
    contMessageIndex++;
    tempoMensagemAPI++;

    setTimeout(()=>{
        if(contMessageIndex>=qtdMessages) return;
        showSnackMessages(resposta, qtdMessages);
    }, tempoMensagemAPI*1000);
}



/* ========================== API INCREMENTO DE NOTICIAS E CONTEUDOS LIBERADOS ====================== */

function incrementaConteudoAPI()
{
    const ENDPOINT_INCREMENTVIEWS = 'https://possoler.tech/API/incrementViewsConteudos.php';

    if(typeof(axios) == 'function'){
        axios({
            method: 'post',
            url: ENDPOINT_INCREMENTVIEWS,
            timeout: 60000
        }).then((resposta)=>{
            console.log('Contabilizar noticia API = ' + resposta.data.status);
        }).catch((erro)=>{
            console.log('ERRO Contabilizar noticia API');
            console.log(erro);
        });
    }else if(self.fetch){
        fetch(ENDPOINT_INCREMENTVIEWS)
        .then(response => response.text())
        .then(pageSource => {
            console.log('Contabilizar noticia API = SUCESSO');
        }).catch((erro)=>{
            console.log('ERRO Contabilizar noticia API');
            console.log(erro);
        });
    }else{
        console.log('[INCREMENT API FAIL]');
    }
}



/* ========================== API INCREMENTO DE INFOS DASHBOARD SITE ====================== */

function getCurrentDate()
{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    return today;
}


function getCurrentTime()
{
    let today = new Date();
    let hh = String(today.getHours()).padStart(2, '0');
    let mm = String(today.getMinutes()).padStart(2, '0');
    let ss = String(today.getSeconds()).padStart(2, '0');
    today = `${hh}:${mm}:${ss}`;

    return today;
}


function saveDataForDashboard(codigoSite)
{
    let currentData = getCurrentDate();
    let currentTime = getCurrentTime();
    const ENDPOINT_DASHBOARD = 'https://possoler.tech/API/acessos/insertDadosAcesso.php';

    let r = setInterval(()=>{
        if(currentData != null && currentTime != null){
            clearInterval(r);
            if(typeof(axios) == 'function'){
                axios({
                    method: 'POST',
                    url: ENDPOINT_DASHBOARD,
                    timeout: 30000,
                    data: JSON.stringify({
                        codigo_site: codigoSite,
                        data: currentData,
                        horario: currentTime
                    })
                }).then((resp)=>{
                    if(resp.data.STATUS == 'Sucesso ao executar query!'){
                        console.log('[AXIOS] DASHBOARD DATA OK!');
                    }else{
                        console.log('[AXIOS] DASHBOARD DATA ERROR!');
                    }
                }).catch((erro)=>{
                    console.log('[AXIOS] FALHA DASHBOARD!', erro.toString());
                });
            }else if(self.fetch){
                fetch(ENDPOINT_DASHBOARD,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        codigo_site: codigoSite,
                        data: currentData,
                        horario: currentTime
                    })
                }).then(function(res){ return res.json(); })
                .then(function(resp){
                    if(resp.STATUS == 'Sucesso ao executar query!'){
                        console.log('[FETCH] DASHBOARD DATA OK!');
                    }else{
                        console.log('[FETCH] DASHBOARD DATA ERROR!');
                    }
                }).catch((erro)=>{
                    console.log('[FETCH] FALHA DASHBOARD!', erro.toString());
                });
            }else{
                console.log('SEM AXIOS E FETCH DASHBOARD');
            }
        }
    },800);
}



/* ========================== METODOS GLOBAIS ===================================== */

var contMessageIndex=0;

function verificaElemento(elemento)
{
    return (document.querySelector(elemento)!=null) ? true : false;
}