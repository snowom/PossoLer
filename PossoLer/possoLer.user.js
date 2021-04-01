// ==UserScript==
// @name         Posso Ler?
// @namespace    URL
// @version      1.0.6
// @description  Tenha acesso a notícias ilimitadas de forma gratuita e segura
// @author       Thomaz Ferreira
// @supportURL   https://possoler.tech/
// @icon         https://possoler.tech/img/128.png
// Atenção:      Caso algum site não funcione logo após a instalação, limpe o cache do navegador.
// @match        *://*.folha.uol.com.br/*
// @match        *://*.estadao.com.br/*
// @match        *://*.oglobo.globo.com/*
// @match        *://*.gazetadopovo.com.br/*
// @match        *://*.super.abril.com.br/*
// @match        *://*.quatrorodas.abril.com.br/*
// @match        *://*.veja.abril.com.br/*
// @match        *://*.vejasp.abril.com.br/*
// @match        *://*.guiadoestudante.abril.com.br/*
// @match        *://*.respondeai.com.br/*
// @match        *://*.exame.com/*
// @match        *://*.epoca.globo.com/*
// @match        *://*.revistagalileu.globo.com/*
// @run-at       document-start
// @noframes
// ==/UserScript==


// run_at: document_start
importCDNSnackBar();


let currentURL = window.location.hostname;


if(currentURL.includes("folha.uol.com.br")){
    modifyFLSP();

}else if(currentURL.includes("estadao.com.br")){
    modifyESTADAO();

}else if(currentURL.includes("oglobo.globo.com")){
    modifyGLOBO();
}
else if(currentURL.includes("gazetadopovo.com.br")){
    modifyGAZETA();
}
else if(currentURL.includes("super.abril.com.br")){
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("quatrorodas.abril.com.br")){
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("veja.abril.com.br") || (currentURL.includes("vejasp.abril"))){
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("guiadoestudante.abril.com.br")){
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("respondeai.com.br")){
    modifyRESPAI();
}
else if(currentURL.includes("exame.com")){
    modifyEXAME();
}
else if(currentURL.includes("epoca.globo.com")){
    modifyEPOCA();
}
else if(currentURL.includes("revistagalileu.globo.com")){
    modifyGALILEU();
}


/* ======================= REVISTA GALILEU ====================== */

function modifyGALILEU()
{
    let codigoPage;

    fetch(document.location.href)
    .then(response => response.text())
    .then(pageSource => {
        console.clear();
        console.log(pageSource);
        codigoPage = new DOMParser().parseFromString(pageSource, "text/html");
    });

    let rotina = setInterval(()=>{
        if(verificaElemento(".paywall-cpt")){
            clearInterval(rotina);

            let divNoticia = codigoPage.querySelector('.protected-content');
            let elementoPai = document.querySelector("article");

            removeBloqueioGLOBO();
            elementoPai.appendChild(divNoticia);
            restauraImgs(elementoPai);
        }
    },800);
}


/* ======================= REVISTA EPOCA ======================== */

function modifyEPOCA()
{
    let codigoPage;

    fetch(document.location.href)
    .then(response => response.text())
    .then(pageSource => {
        console.clear();
        console.log(pageSource);
        codigoPage = new DOMParser().parseFromString(pageSource, "text/html");
    });

    let rotina = setInterval(()=>{
        if(verificaElemento(".paywall-cpt")){
            clearInterval(rotina);

            let divNoticia = codigoPage.querySelector('.article__content-container');
            let elementoPai = document.querySelector(".article");

            removeBloqueioGLOBO();
            elementoPai.appendChild(divNoticia);
            restauraImgs(elementoPai);
        }
    },800);
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
            },800)
    });
}


/* ====================== RESPONDE AI ===========================  */

function modifyRESPAI()
{

    window.addEventListener('load', ()=>{

        const TIMEOUT = 3000;

        setTimeout(()=>{
            let codigoSemBloqueio = document.querySelector("html");
            let scripts = codigoSemBloqueio.querySelectorAll("script");

            removeScriptObserver(scripts, codigoSemBloqueio);
        },TIMEOUT);
        
    });

    /* fetch(document.location.href)
    .then(response => response.text())
    .then(pageSource => {

        console.clear();
        console.log(pageSource);
        let codigoSemBloqueio = new DOMParser().parseFromString(pageSource, "text/html");
        let scripts = codigoSemBloqueio.querySelectorAll("script");

        removeScriptObserver(scripts, codigoSemBloqueio);

        //.documentElement

    }); */
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

    removeHeaderLogin();
    removeBlur();
    removeAllBtnShowSolucao();
    removeBloqueioTeoria();
    removeBloqueioConteudoExclusivo();
    verificaAtualizacaoVersao();

    //LOOP Para remover bloqueios caso haja atualização dos iframes
    setInterval(()=>{
        removeHeaderLogin();
        removeBlur();
        removeAllBtnShowSolucao();
        removeBloqueioTeoria();
        removeBloqueioConteudoExclusivo();
    },800);
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

    document.getElementById('paywall-wrapper-iframe-estadao').remove();

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
        if(verificaComponents()){
            clearInterval(rotina);
            removeBloqueio();
        }
    }, 800);
}


function verificaComponents()
{
    return (document.getElementById('paywall-flutuante') != null && document.getElementById('paywall-content') != null && document.getElementById('paywall-fill') != null) ? true : false;
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


function importCDNSnackBar()
{
    //ADD JS TOASTFY NO BODY HTML
    var snackJS = document.createElement('script');
    snackJS.setAttribute('id','snackJS');
    snackJS.setAttribute('type','text/javascript');
    snackJS.setAttribute('src','https://possoler.tech/CDN/snackbar.js');
    document.head.appendChild(snackJS);

    //ADD CSS TOASTFY NO HEAD HTML
    var snackCSS = document.createElement('link');
    snackCSS.setAttribute('id','snackCSS');
    snackCSS.setAttribute('rel','stylesheet');
    snackCSS.setAttribute('type','text/css');
    snackCSS.setAttribute('href','https://possoler.tech/CDN/snackbar.css');
    document.head.appendChild(snackCSS);

    //ADD CSS CLASSE SNACKBAR
    var styleSnack = document.createElement('style');
    document.head.appendChild(styleSnack);
    styleSnack.innerText = '.snackZ-index{z-index: 9999999999; white-space: pre-wrap}';

    //ADD AXIOS JS
    var axiosJS = document.createElement('script');
    axiosJS.setAttribute('id','axiosJS');
    axiosJS.setAttribute('type','text/javascript');
    axiosJS.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js');
    document.head.appendChild(axiosJS);
}


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

    const CURRENT_VERSION = '106';
    const URL_API_UPDATE = 'https://possoler.tech/API/searchUpdates.php';
    let tempoAwait = 5

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
        timeout: 10000,
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
    axios({
        method: 'post',
        url: 'https://possoler.tech/API/incrementViewsConteudos.php',
        timeout: 10000
    }).then((resposta)=>{
        console.log('Contabilizar noticia API = ' + resposta.data.status);
    }).catch((erro)=>{
        console.log('ERRO Contabilizar noticia API');
        console.log(erro);
    });
}

/* ========================== METODOS E VARIAVEIS GLOBAIS ===================================== */

var contMessageIndex=0;

function verificaElemento(elemento)
{
    return (document.querySelector(elemento)!=null) ? true : false;
}