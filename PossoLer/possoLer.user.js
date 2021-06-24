// ==UserScript==
// @name         Posso Ler?
// @namespace    URL
// @version      1.0.9
// @description  Tenha acesso a notícias ilimitadas e conteúdos exclusivos de forma gratuita e segura
// @author       Thomaz Ferreira
// @supportURL   *://possoler.tech/
// @icon         https://possoler.tech/img/128.png
// Atenção:      Caso algum site não funcione logo após a instalação, limpe o cache do navegador.
// @match        *://*.possoler.tech/*
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
// @match        *://*.epocanegocios.globo.com/*
// @match        *://*.revistamarieclaire.globo.com/*
// @match        *://*.revistagloborural.globo.com/*
// @match        *://*.autoesporte.globo.com/*
// @match        *://*.revistapegn.globo.com/*
// @match        *://*.jota.info/*
// @match        *://*.nsctotal.com.br/*
// @match        *://*.nytimes.com/*
// @match        *://*.elpais.com/*
// @match        *://*.jornalvs.com.br/*
// @match        *://*.valor.globo.com/*
// @match        *://gauchazh.clicrbs.com.br/*
// @match        *://especiais.zh.clicrbs.com.br/*
// @match        *://*.jornaldocomercio.com/*
// @match        *://*.economist.com/*
// @grant        GM_webRequest
// @webRequest   [{"selector":"https://www.rbsonline.com.br/cdn/scripts/paywall.min.js*","action":"cancel"}, {"selector":"https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*","action":"cancel"}, {"selector":"https://api.clicrbs.com.br/paywall-api/*","action":"cancel"}, {"selector": "*://*.jornaldocomercio.com/src/inove/paywall.php", "action": "cancel"}, {"selector": "*://cdn.tinypass.com/api/tinypass.min.js*", "action": "cancel"}]
// @run-at       document-start
// @noframes
// ==/UserScript==


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
else if(currentURL.includes("revistagalileu.globo.com") ||
 currentURL.includes("epocanegocios.globo.com") || currentURL.includes("revistamarieclaire.globo.com") ||
 currentURL.includes("revistagloborural.globo.com") || currentURL.includes("autoesporte.globo.com") ||
 currentURL.includes("revistapegn.globo.com")){
    modifyGALILEU();
}
else if(currentURL.includes("possoler.tech")){
    modifyPossoLer();
}
else if(currentURL.includes("jota.info")){
    modifyJOTA();
}
else if(currentURL.includes("nsctotal.com.br")){
    modifyNSC();
}
else if(currentURL.includes("nytimes.com")){
    modifyNYTIMES();
}
else if(currentURL.includes("elpais.com")){
    modifyELPAIS();
}
else if(currentURL.includes("jornalvs.com.br")){
    modifyJVS();
}
else if(currentURL.includes("valor.globo.com")){
    modifyVLRECON();
}
else if(currentURL.includes("gauchazh.clicrbs.com.br") || currentURL.includes("especiais.zh.clicrbs")){
    modifyGZH();
}
else if(currentURL.includes('jornaldocomercio.com')){
    modifyJCMR();
}
else if(currentURL.includes('economist.com')){
    modifyECONOMIST();
}



/* ======================= THE ECONOMIST ============================== */

function modifyECONOMIST()
{
    const BLOCKED_URL_REQUEST = "*://cdn.tinypass.com/api/tinypass.min.js*";

    GM_webRequest([
        {"selector": BLOCKED_URL_REQUEST, "action": "cancel"},
    ], function(info, message, details) {
        console.log('PAYWALL BLOQUEADO');
        
        if((typeof(axios) == 'function') && !verificaElemento('#tp-regwall')){
            incrementaConteudoAPI();
        }else if((self.fetch)  && !verificaElemento('#tp-regwall')){
            FETCH_incrementaConteudoAPI();
        }
    });

    if(typeof(axios) == 'function'){
        axios({
            method: 'GET',
            url: BLOCKED_URL_REQUEST,
            timeout: 10000
        }).then((resp)=>{
            console.log('SUCESSO REQUEST AXIOS');
        }).catch((erro)=>{
            console.log('FALHA REQUEST AXIOS');
        });
    } else if(self.fetch){
        fetch(BLOCKED_URL_REQUEST)
            .then(response => response.text())
            .then(pageSource => {
                console.log('SUCESSO REQUEST FETCH');
            }).catch((erro)=>{
                console.log('FALHA REQUEST FETCH');
            });
    }

    let r = setInterval(()=>{
        if(typeof(axios) == 'function'){
            clearInterval(r);
            verificaAtualizacaoVersao();
        }
    },800);
}



/* ======================== JORNAL DO COMERCIO ======================== */

function modifyJCMR()
{
    GM_webRequest([
        {"selector": "*://*.jornaldocomercio.com/src/inove/paywall.php", "action": "cancel"},
    ], function(info, message, details) {
        console.log('PAYWALL BLOQUEADO');

        let r = setInterval(()=>{
            if(typeof(axios) == 'function'){
                clearInterval(r);
                incrementaConteudoAPI();
                verificaAtualizacaoVersao();
            }
        },800);
    });
}


/* ====================== GAUCHA ZH =========================== */

function modifyGZH()
{
    enableUrlChangeDetect();

    GM_webRequest([
        {"selector":"https://www.rbsonline.com.br/cdn/scripts/paywall.min.js*","action":"cancel"},
        {"selector":"https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*","action":"cancel"},
        {"selector":"https://api.clicrbs.com.br/paywall-api/*","action":"cancel"}
    ], function(info, message, details) {
        console.log('PAYWALL BLOQUEADO');
        FETCH_incrementaConteudoAPI();
    });

    window.addEventListener('locationchange', ()=>{
        console.log('MUDEI URL');
        verificaAtualizacaoVersao();
    });
}


/* Obrigado Stackoverflow -
https://stackoverflow.com/questions/6390341/how-to-detect-if-url-has-changed-after-hash-in-javascript */
function enableUrlChangeDetect()
{
    history.pushState = ( f => function pushState(){
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    })(history.pushState);

    history.replaceState = ( f => function replaceState(){
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    })(history.replaceState);

    window.addEventListener('popstate',()=>{
        window.dispatchEvent(new Event('locationchange'))
    });
}



/* ====================== VALOR ECONOMICO ===================== */

function modifyVLRECON()
{
    const LINK = `http://webcache.googleusercontent.com/search?q=cache:${document.location.href}`;
    const URL_REQUEST = `https://possoler.tech/API/cache_api/index.php?link=${LINK}`;

    let rotina = setInterval(()=>{
        if(verificaElemento('.paywall-cpt') || verificaElemento(".barber-barrier-cpnt") || verificaElemento(".paywall")){
            clearInterval(rotina);

            //MONTA SWEET ALERT DE DESBLOQUEIO
            let s = setInterval(()=>{
                if(verificaElemento('#sweetAlert') && typeof(Swal) == 'function'){
                    clearInterval(s);
                    console.log('ACHEI SWALL');

                    if(Swal.isVisible() == false && verificaElemento('#styleSnack')){
                        sweetAlert(
                            'info',
                            'Aguarde um momento...',
                            'Estamos removendo os bloqueios para você...<br><br>'
                        );
                    }
                }
            },800);

            //AQUI A MAGICA ACONTECE
            let intervalRequest = setInterval(()=>{
                if(verificaElemento('#axiosJS') && verificaElemento('#styleSnack')){
                    clearInterval(intervalRequest);

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

                                        console.log(`CODE CACHE = ${blocoNoticia.outerHTML}`);
                                        console.log(`CODE ORIGINAL = ${blocoOriginal.outerHTML}`);

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
            document.querySelector(".css-1bd8bfl").remove();

            let article = document.querySelector(".css-mcm29f");
            article.style.position = "unset";
            article.style.overflow = "auto";

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
    let rotina = setInterval(()=>{
        let axiosJS = document.getElementById("axiosJS");

        if(axiosJS != null) {
            clearInterval(rotina);

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
    },800)
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

/* DESBLOQUEIA PAGINA EXCLUSIVA FACULDADE

1) SETAR CHAVE COMO TRUE => _current_user.hasAccess;
*/

function modifyRESPAI()
{

    unlockPaidContent();

    window.addEventListener('load', ()=>{

        const TIMEOUT = 3000;

        setTimeout(()=>{
            let codigoSemBloqueio = document.querySelector("html");
            let scripts = codigoSemBloqueio.querySelectorAll("script");

            removeScriptObserver(scripts, codigoSemBloqueio);
        },TIMEOUT);

        verificaAtualizacaoVersao();

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


function importCDNSnackBar()
{
    let i = setInterval(()=>{
        if(verificaElemento("head")){
            clearInterval(i);

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
            styleSnack.setAttribute('id', 'styleSnack');
            document.head.appendChild(styleSnack);
            styleSnack.innerText = '.snackZ-index{z-index: 9999999999 !important; white-space: pre-wrap}';

            //ADD AXIOS JS
            var axiosJS = document.createElement('script');
            axiosJS.setAttribute('id','axiosJS');
            axiosJS.setAttribute('type','text/javascript');
            axiosJS.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js');
            document.head.appendChild(axiosJS);

            //ADD SWEETALERT JS
            var sweetAlert = document.createElement('script');
            sweetAlert.setAttribute('id', 'sweetAlert');
            sweetAlert.setAttribute('type','text/javascript');
            sweetAlert.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@10');
            document.head.appendChild(sweetAlert);

        }
    },800);
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

    let rotina = setInterval(()=>{
        if(verificaElemento('#snackJS')  && verificaElemento('#snackCSS') && verificaElemento('#axiosJS') && verificaElemento('#sweetAlert')) {
            clearInterval(rotina);

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
    }, 800);
}


function verificaMensagensAPI(time)
{
    const URL_MESSAGES = 'https://possoler.tech/API/searchMessages.php';

    let r = setInterval(()=>{
        if(verificaElemento('#axiosJS')){
            clearInterval(r);
            axios({
                method: 'GET',
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
    },800);
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
    let i = setInterval(()=>{
        if(verificaElemento("#axiosJS")){
            clearInterval(i);

            axios({
                method: 'post',
                url: 'https://possoler.tech/API/incrementViewsConteudos.php',
                timeout: 60000
            }).then((resposta)=>{
                console.log('Contabilizar noticia API = ' + resposta.data.status);
            }).catch((erro)=>{
                console.log('ERRO Contabilizar noticia API');
                console.log(erro);
            });
        }
    }, 800);
}


function FETCH_incrementaConteudoAPI()
{
    if(self.fetch){
        fetch('https://possoler.tech/API/incrementViewsConteudos.php')
        .then(response => response.text())
        .then(pageSource => {
            console.log('Contabilizar noticia API = SUCESSO');
        }).catch((erro)=>{
            console.log('ERRO Contabilizar noticia API');
            console.log(erro);
        });
    }
}

/* ========================== METODOS E VARIAVEIS GLOBAIS ===================================== */

var contMessageIndex=0;

function verificaElemento(elemento)
{
    return (document.querySelector(elemento)!=null) ? true : false;
}