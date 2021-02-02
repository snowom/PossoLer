// ==UserScript==
// @name         Posso Ler?
// @namespace    URL
// @version      1.0.5
// @description  Tenha acesso a notícias ilimitadas de forma gratuita e segura
// @author       Thomaz Ferreira Neves dos Santos
// @supportURL   http://possoler.000webhostapp.com/
// @icon         http://possoler.000webhostapp.com/img/128.png
// Atenção:      Caso algum site não funcione logo após a instalação, limpe o cache do navegador.
// @match        *://*.folha.uol.com.br/*
// @match        *://*.estadao.com.br/*
// @match        *://*.oglobo.globo.com/*
// @match        *://*.gazetadopovo.com.br/*
// @match        *://*.super.abril.com.br/*
// @match        *://*.quatrorodas.abril.com.br/*
// @match        *://*.veja.abril.com.br/*
// @match        *://*.vejasp.abril.com.br/*
// @match        *://*.respondeai.com.br/*
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
else if(currentURL.includes("respondeai.com.br")){
    modifyRESPAI();
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
    verificaAtualizacaoVersao();

    //LOOP Para remover bloqueios caso haja atualização dos iframes
    setInterval(()=>{
        removeHeaderLogin();
        removeBlur();
        removeAllBtnShowSolucao();
        removeBloqueioTeoria();
    },800);
}


function remountPage(elemento, codigoBase)
{
    document.querySelector(elemento).innerHTML = codigoBase.outerHTML;
}


function removeHeaderLogin()
{
    let header = document.querySelectorAll(".global_menu__fixed_header");
    
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
                }

                decrementZindexHeaderGAZETA()
                removeFooterGAZETA();
                verificaAtualizacaoVersao();
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
    
    modifyESTADAO();

    if(msgUpdate<=0){
        verificaAtualizacaoVersao();
        msgUpdate++;
    }
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
}



/* =========================== CDN's E UPDATE VERSION ================================= */


function importCDNSnackBar()
{
    //ADD JS TOASTFY NO BODY HTML
    var snackJS = document.createElement('script');
    snackJS.setAttribute('id','snackJS');
    snackJS.setAttribute('type','text/javascript');
    snackJS.setAttribute('src','https://cdn.statically.io/sites/possoler.000webhostapp.com/CDN/snackbar.js');
    document.head.appendChild(snackJS);

    //ADD CSS TOASTFY NO HEAD HTML
    var snackCSS = document.createElement('link');
    snackCSS.setAttribute('id','snackCSS');
    snackCSS.setAttribute('rel','stylesheet');
    snackCSS.setAttribute('type','text/css');
    snackCSS.setAttribute('href','https://cdn.statically.io/sites/possoler.000webhostapp.com/CDN/snackbar.css');
    document.head.appendChild(snackCSS);

    //ADD CSS CLASSE SNACKBAR
    var styleSnack = document.createElement('style');
    document.head.appendChild(styleSnack);
    styleSnack.innerText = '.snackZ-index{z-index: 9999999999}';
}


function configSnackBar()
{
    return {
            text: 'Uma nova versão do "Posso Ler?" já está disponível para download!',
            actionTextColor: '#a1ff00',
            actionText: 'Vamos lá',
            pos: 'top-right',
            duration: 10000,
            customClass: 'snackZ-index',
            onActionClick: ()=>{
                window.open('http://possoler.000webhostapp.com/#blockDownload');
            }
        };
}

function verificaAtualizacaoVersao()
{

    const CURRENT_VERSION = '105';
    const URL_API_UPDATE = 'https://possoler.000webhostapp.com/API/searchUpdates.php';

    fetch(URL_API_UPDATE)
    .then((resposta)=>{
        return resposta.json()
    }).then((data)=>{
        let updateVersion = data.update.currentVersion;

        if(CURRENT_VERSION<updateVersion){

            let options = configSnackBar();
            Snackbar.show(options);
        }

    }).catch((erro)=>{
        console.error(erro);
    });


    setTimeout(()=>{
        const URL_MESSAGES = 'https://possoler.000webhostapp.com/API/searchMessages.php';

        fetch(URL_MESSAGES)
        .then((resposta)=>{
            return resposta.json()
        }).then((data)=>{
            
            let qtdMessages = data.messages.length;
            var cont=0;
            let r = setInterval(()=>{
                if(cont>=qtdMessages){
                    clearInterval(r);
                }
                else{
                    let options = {
                        text: data.messages[cont].msg,
                        actionTextColor: '#a1ff00',
                        showAction: true,
                        actionText: 'OK',
                        pos: 'top-right',
                        duration: data.messages[cont].time*1000,
                        customClass: 'snackZ-index',
                    };
    
                    Snackbar.show(options);
                    cont++;
                }
            },6000);

        }).catch((erro)=>{
            console.error(erro);
        });
    },12000);
}


/* ========================== METODOS GLOBAIS ===================================== */

function verificaElemento(elemento)
{
    return (document.querySelector(elemento)!=null) ? true : false;
}
