// ==UserScript==
// @name         Posso Ler?
// @namespace    URL
// @version      1.5.5
// @description  Tenha acesso a noticias ilimitadas e conteudos exclusivos de forma gratuita e segura
// @author       snowom
// @supportURL   https://possoler.tech/
// @icon         https://possoler.tech/img/128.png
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
// @match        *://gauchazh.clicrbs.com.br/*
// @match        *://especiais.zh.clicrbs.com.br/*
// @match        *://*.jornaldocomercio.com/*
// @match        *://*.economist.com/*
// @match        *://diariosm.com.br/*
// @match        *://*.otempo.com.br/*
// @match        *://glamour.globo.com/*
// @match        *://degraoemgrao.blogfolha.uol.com.br/*
// @match        *://jc.ne10.uol.com.br/*
// @match        *://impresso.jc.ne10.uol.com.br/*
// @match        *://valor.globo.com/*
// @match        *://webcache.googleusercontent.com/search?q=cache:https://valor.globo.com/*
// @match        *://opopular.com.br/*
// @match        *://webcache.googleusercontent.com/search?q=cache:https://opopular.com.br/*
// @match        *://*.opovo.com.br/*
// @match        *://*.correio24horas.com.br/*
// @match        *://*.jornalnh.com.br/*
// @match        *://*.atribuna.com.br/*
// @match        *://*.umdoisesportes.com.br/*
// @match        *://*.correiodopovo.com.br/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js
// @require      https://possoler.tech/CDN/snackbar.js
// @require      https://possoler.tech/CDN/[FF]blockCorePaywall.js
// @grant        GM_webRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @webRequest   [{"selector":"https://www.rbsonline.com.br/cdn/scripts/paywall.min.js*","action":"cancel"}, {"selector":"https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*","action":"cancel"}, {"selector":"https://api.clicrbs.com.br/paywall-api/*","action":"cancel"}, {"selector": "*://cdn.tinypass.com/api/tinypass.min.js*", "action": "cancel"}, {"selector": "*://super.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://quatrorodas.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://veja.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://guiadoestudante.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector":"*://blockv4.fivewall.com.br/paywall.js*","action":"cancel"}, {"selector":"*://acesso.estadao.com.br/paywall*","action":"cancel"}, {"selector":"*://paywall.folha.uol.com.br/*","action":"cancel"}, {"selector":"*://*/arc/subs/p.min.js","action":"cancel"}, {"selector":"*://exame.com/wp-content/themes/exame-new/js/extd-acc.js*","action":"cancel"}, {"selector":"*://folhadelondrina.com.br/themes/default/js/paywall/fivewall1.26.js*","action":"cancel"}, {"selector":"*://s3.amazonaws.com/sdk-signin-wall-production/bundle.js*","action":"cancel"}, {"selector":"*://me.jsuol.com.br/*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/auth*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/includes/assets/opovomais/js/auth/auth_new_menu.min.js*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/includes/assets/opovomais/js/paywall_config.min.js*","action":"cancel"}, {"selector":"*://correio-static.cworks.cloud/fileadmin/sites/correio24horas/js/all.js*","action":"cancel"}, {"selector":"*://static.infoglobo.com.br/paywall/js/tiny.js*","action":"cancel"}, {"selector":"*://assine.correio24horas.com.br/v2/amp/subscriber/auth*","action":"cancel"}, {"selector":"*://*.atribuna.com.br/assets/js*/materia.js","action":"cancel"}, {"selector":"*://*c2.piano.io/*","action":"cancel"}, {"selector":"*://paywall.correiodopovo.com.br/*","action":"cancel"}, {"selector":"*://*.atribuna.com.br/assets/js*/article.js","action":"cancel"}, {"selector":"*://static.elpais.com/dist/resources/js/*/ENP-closed-article-layer.js","action":"cancel"}, {"selector":"*://d.jornaldocomercio.com/_conteudo/_files/json/paywall.json","action":"cancel"}]
// @run-at       document-start
// @noframes
// ==/UserScript==

importCDNSnackBar();
let currentURL = window.location.hostname;
const CURRENT_VERSION = '155';


function main()
{
    if(currentURL.includes("folha.uol.com.br")){
        saveDataForDashboard(1);
        blockPaywallRequest("*://paywall.folha.uol.com.br/*");
    
    }else if(currentURL.includes("estadao.com.br")){
        saveDataForDashboard(2);
        blockPaywallRequest("*://acesso.estadao.com.br/paywall*");
    
    }else if(currentURL.includes("oglobo.globo.com") && !(window.location.href.includes("/epoca"))){
        saveDataForDashboard(3);
        blockPaywallRequest("*://static.infoglobo.com.br/paywall/js/tiny.js");
    }
    else if(currentURL.includes("gazetadopovo.com.br")){
        saveDataForDashboard(4);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("super.abril.com.br")){
        saveDataForDashboard(5);
        blockPaywallRequest("*://super.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*");
    }
    else if(currentURL.includes("quatrorodas.abril.com.br")){
        saveDataForDashboard(6);
        blockPaywallRequest("*://quatrorodas.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*")
    }
    else if(currentURL.includes("veja.abril.com.br") || (currentURL.includes("vejasp.abril"))){
        saveDataForDashboard(7);
        blockPaywallRequest("*://veja.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*")
    }
    else if(currentURL.includes("guiadoestudante.abril.com.br")){
        saveDataForDashboard(10);
        blockPaywallRequest("*://guiadoestudante.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*");
    }
    else if(currentURL == 'www.respondeai.com.br'){
        saveDataForDashboard(8);
        modifyRESPAI();
    }
    else if(currentURL == 'app.respondeai.com.br'){
        saveDataForDashboard(8);
        modifyAPPRESPAI();
    }
    else if(currentURL.includes("exame.com")){
        saveDataForDashboard(9);
        blockPaywallRequest("*://exame.com/wp-content/themes/exame-new/js/extd-acc.js*");
        modifyEXAME();
    }
    else if(currentURL.includes("oglobo.globo.com") && window.location.href.includes("/epoca")){
        //MIGROU PARA O DOMINIO OGLOBO.COM
        saveDataForDashboard(11);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("revistagalileu.globo.com")){
        saveDataForDashboard(13);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("epocanegocios.globo.com")){
        saveDataForDashboard(12);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("revistamarieclaire.globo.com")){
        saveDataForDashboard(14);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("revistagloborural.globo.com")){
        saveDataForDashboard(15);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("revistapegn.globo.com")){
        saveDataForDashboard(26);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
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
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("nytimes.com")){
        saveDataForDashboard(18);
        modifyNYTIMES();
    }
    else if(currentURL.includes("elpais.com")){
        saveDataForDashboard(19);
        blockPaywallRequest("*://*/arc/subs/p.min.js");
        modifyELPAIS();
    }
    else if(currentURL.includes("jornalvs.com.br")){
        saveDataForDashboard(20);
        blockPaywallRequest("*://blockv4.fivewall.com.br/paywall.js*");
    }
    else if(
        currentURL.includes("valor.globo.com") ||
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://valor.globo.com/")
    ){
        saveDataForDashboard(21);
        modifyVLRECON();
    }
    else if(currentURL.includes("gauchazh.clicrbs.com.br") || currentURL.includes("especiais.zh.clicrbs")){
        modifyGZH();
    }
    else if(currentURL.includes('jornaldocomercio.com')){
        saveDataForDashboard(23);
        blockPaywallRequest("*://*.jornaldocomercio.com/src/inove/paywall.php");
    }
    else if(currentURL.includes('economist.com')){
        saveDataForDashboard(24);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    /* else if(currentURL.includes("brainly.com.br")){
        saveDataForDashboard(25);
        modifyBRAINLY();
    } */
    else if(
        currentURL.includes('opopular.com.br') ||
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://opopular.com.br/")
    ){
        saveDataForDashboard(30);
        modifyOPOPULAR();
    }
    else if(currentURL.includes('diariosm.com.br')){
        saveDataForDashboard(31);
        modifyDIARIOSM();
    }
    else if(currentURL.includes('otempo.com.br')){
        saveDataForDashboard(32);
        modifyOTEMPO();
    }
    else if(currentURL.includes("glamour.globo.com")){
        saveDataForDashboard(33);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("degraoemgrao.blogfolha.uol.com.br")){
        saveDataForDashboard(1);
        blockPaywallRequest("*://paywall.folha.uol.com.br/*");
    }
    else if(currentURL.includes("jc.ne10.uol.com.br")){
        saveDataForDashboard(34);
        modyfyJORNALCOMERCIO();
    }
    else if(currentURL.includes("opovo.com.br")){
        saveDataForDashboard(35);
        blockPaywallRequest("*://mais.opovo.com.br/auth*");
        modifyOPOVO();
    }
    else if(currentURL.includes("correio24horas.com.br")){
        saveDataForDashboard(36);
        blockPaywallRequest("*://correio-static.cworks.cloud/fileadmin/sites/correio24horas/js/all.js*")
    }
    else if(currentURL.includes("jornalnh.com.br")){
        saveDataForDashboard(37);
        blockPaywallRequest("*://blockv4.fivewall.com.br/paywall.js*");
    }
    else if(currentURL.includes("atribuna.com.br")){
        saveDataForDashboard(38);
        blockPaywallRequest("*://*.atribuna.com.br/assets/js*/materia.js");
    }
    else if(currentURL.includes("umdoisesportes.com.br")){
        saveDataForDashboard(39);
        blockPaywallRequest("*://c2.piano.io/*");
    }
    else if(currentURL.includes("correiodopovo.com.br")){
        saveDataForDashboard(40);
        blockPaywallRequest("*://paywall.correiodopovo.com.br/*");
    }
}


/* ============================== APP RESPONDE AI ============================== */

function modifyAPPRESPAI()
{
    mainUnlockFunction();
    enableUrlChangeDetect();
    checkButtonCreation();
    changeLockedIcons();
    removeReactModalOverlay();
    enableBodyOverflow();
    
    window.addEventListener('locationchange',()=>{
        mainUnlockFunction();
        checkButtonCreation();
        removeReactModalOverlay();
        enableBodyOverflow();
    });

    /**
     * Nested function (funcao aninhada)
     * Funcao principal de desbloqueio de conteudo
     */
    function mainUnlockFunction(){
        if(window.location.href.includes('app.respondeai.com.br/aprender') && window.location.href.includes('/teoria/')){
            importRequiredCDN();
            setTheoryLinksAction();
            enableBodyOverflow();
            removeReactModalOverlay();
            removeDexterBlock();
            removeBlurPage();
            unlockTeoria();
            incrementaConteudoAPI();
            verificaAtualizacaoVersao();
        }
        else if(window.location.href.includes('app.respondeai.com.br/aprender') && window.location.href.includes('/exercicio/')){
            importRequiredCDN();
            setTheoryLinksAction();
            enableBodyOverflow();
            removeReactModalOverlay();
            removeDexterBlock();
            removeBlurPage();
            unlockFixationExercise();
            incrementaConteudoAPI();
            verificaAtualizacaoVersao();
        }
        else if((window.location.href.includes('app.respondeai.com.br/aprender') || window.location.href.includes('app.respondeai.com.br/praticar')) && window.location.href.includes('/exercicio-lista/')){
            importRequiredCDN();
            setTheoryLinksAction();
            enableBodyOverflow();
            removeReactModalOverlay();
            removeDexterBlock();
            removeBlurPage();
            unlockListExercise();
            incrementaConteudoAPI();
            verificaAtualizacaoVersao();
        }
    }
}


function changeLockedIcons()
{
    setInterval(()=>{
        let svgIcons = document.querySelectorAll(".MuiSvgIcon-root");
        svgIcons.forEach(icon => {
            icon.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square sc-lgsYow gFYkCv  logged" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path></svg>`
        });
    },800);
}


function unlockListExercise()
{

    //Remove format toogle
    let k = setInterval(()=>{
        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            if(divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == 'content-format-toggle'){
                clearInterval(k);
                divs[i].style.display = "none";
                break;
            }
        }
    },800);

    let r = setInterval(()=>{
        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            if(divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == 'exercise-show-answer-button'){
                clearInterval(r);

                let answerDiv = divs[i];
                let token = getCookie('user_jwt');
                let listExerciseId = getTopicId();

                answerDiv.innerHTML = setLoadingPageAnimation();

                let s = setInterval(()=>{
                    if(typeof(axios) == 'function' && token != null && listExerciseId != null){
                        clearInterval(s);
                        axios({
                            method: "POST",
                            url: `https://possoler.tech/API/responde_ai/signedUser/index.php?action=getListExercise`,
                            timeout: 30000,
                            data: JSON.stringify({
                                token: token,
                                listExerciseId: listExerciseId
                            })
                        }).then((resp)=>{
                            if(resp.data.status == 'failed') throw new Error(resp.data.message);

                            //Set div style
                            answerDiv.style.cssText = `
                                width: 100% !important; 
                                padding: 0px 30px !important; 
                                font-family: "Droid Serif", serif !important;
                                font-size: 1.25em !important;
                                line-height: 26px !important;
                                color: rgb(68, 68, 68) !important;
                                padding-bottom: 15px !important`

                            
                            //Renderiza solução na tela - Teoria
                            for(let i=0; i<resp.data.lightSolution.length; i++){
                                if(i==0){
                                    answerDiv.innerHTML = `<h1 style="color: rgb(54, 170, 173); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Resposta</h1>`;
                                }
                                answerDiv.innerHTML += resp.data.lightSolution[i];
                                MathJax.typeset();
                            }


                            //Renderiza solução na tela - Videos
                            if(resp.data.hasOwnProperty('videos')){
                                const SINGLE_VIDEO_SIZE = 450;
                                const SPACE_BETWEEN_VIDEOS = 50;
                                
                                for(let j=0; j<resp.data.videos.length; j++){

                                    if(j==0){
                                        answerDiv.innerHTML += `<h1 style="color: rgb(54, 170, 173); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Vídeo Tutorial</h1>`;
                                    }

                                    answerDiv.innerHTML += `
                                        <div data-cy="video-iframe" allowfullscreen="" frameborder="0" style="width: 100%; height: ${(SINGLE_VIDEO_SIZE+SPACE_BETWEEN_VIDEOS)*resp.data.videos.length}px;">
                                            <div style="width: 100%; height: ${SINGLE_VIDEO_SIZE}px;">
                                                <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/${resp.data.videos[j].providerId}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"></iframe>
                                            </div>
                                        </div>
                                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`
                                }
                            }
                        }).catch((erro)=>{
                            sweetAlert(
                                'error',
                                'Erro',
                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                            );
                        });
                    }
                },800);
                break;
            }
        }
    },800);
}


function unlockFixationExercise()
{
    //Remove format toogle
    let k = setInterval(()=>{
        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            if(divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == 'content-format-toggle'){
                clearInterval(k);
                divs[i].style.display = "none";
                break;
            }
        }
    },800);

    let r = setInterval(()=>{
        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            if(
                (divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == 'exercise-show-answer-button') || 
                (divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == 'exercise-statement')
            ){
                clearInterval(r);
                let answerDiv;

                if(divs[i].getAttribute('data-cy') == 'exercise-statement'){
                    divs[i].innerHTML += `<div id="tmpAnswer"></div>`;
                    answerDiv = document.getElementById("tmpAnswer");

                    // Remove botão responde ai
                    for(let k=i; k<divs.length; k++){
                        if(divs[k].hasAttribute('data-cy') && divs[k].getAttribute('data-cy') == 'exercise-show-answer-button'){
                            divs[k].remove(); 
                        }
                    }
                }else{
                    answerDiv = divs[i];
                }

                let token = getCookie('user_jwt');
                let exerciseId = getTopicId();

                answerDiv.innerHTML = setLoadingPageAnimation();

                let s = setInterval(()=>{
                    if(typeof(axios) == 'function' && token != null && exerciseId != null){
                        clearInterval(s);
                        axios({
                            method: "POST",
                            url: `https://possoler.tech/API/responde_ai/signedUser/index.php?action=getFixationExercise`,
                            timeout: 30000,
                            data: JSON.stringify({
                                token: token,
                                exerciseId: exerciseId
                            })
                        }).then((resp)=>{
                            if(resp.data.status == 'failed') throw new Error(resp.data.message);

                            //Set div style
                            answerDiv.style.cssText = `
                                width: 100% !important; 
                                padding: 0px 30px !important; 
                                font-family: "Droid Serif", serif !important;
                                font-size: 1.25em !important;
                                line-height: 26px !important;
                                color: rgb(68, 68, 68) !important;
                                padding-bottom: 15px !important`

                            
                                console.log(resp.data);
                            //Renderiza solução na tela - Teoria
                            for(let i=0; i<resp.data.lightSolution.length; i++){
                                if(i==0){
                                    answerDiv.innerHTML = `<h1 style="color: rgb(247, 172, 60); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Resposta</h1>`;
                                }
                                answerDiv.innerHTML += resp.data.lightSolution[i];
                                MathJax.typeset();
                            }


                            //Renderiza solução na tela - Videos
                            if(resp.data.hasOwnProperty('videos')){
                                const SINGLE_VIDEO_SIZE = 450;
                                const SPACE_BETWEEN_VIDEOS = 50;
                                
                                for(let j=0; j<resp.data.videos.length; j++){

                                    if(j==0){
                                        answerDiv.innerHTML += `<h1 style="color: rgb(247, 172, 60); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Vídeo Tutorial</h1>`;
                                    }

                                    answerDiv.innerHTML += `
                                        <div data-cy="video-iframe" allowfullscreen="" frameborder="0" style="width: 100%; height: ${(SINGLE_VIDEO_SIZE+SPACE_BETWEEN_VIDEOS)*resp.data.videos.length}px;">
                                            <div style="width: 100%; height: ${SINGLE_VIDEO_SIZE}px;">
                                                <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/${resp.data.videos[j].providerId}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"></iframe>
                                            </div>
                                        </div>
                                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`
                                }
                            }
                        }).catch((erro)=>{
                            sweetAlert(
                                'error',
                                'Erro',
                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                            );
                        });
                    }
                },800);
                break;
            }
        }
    },800);
}


function unlockTeoria()
{
    let r = setInterval(()=>{
        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            if(divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == 'content-format-toggle'){
                clearInterval(r);

                //VERIFICA SE NA 1 EXEC O CONTEUDO ESTA BLOQUEADO - TEXTO
                //CASO POSITIVO, CHAMA API E MONTA TEXTO
                let s = setInterval(()=>{
                    let divsSteps = document.querySelectorAll('div');
                    for(let j=0; j<divsSteps.length; j++){
                        if(divsSteps[j].hasAttribute('data-cy') && divsSteps[j].getAttribute('data-cy') == 'theory-text-content'){
                            clearInterval(s);
                            let divStepsContainer = divsSteps[j].children[0].children[0];
                            try{
                                if(
                                    divStepsContainer.children[0].isEqualNode(divStepsContainer.children[1]) &&
                                    divStepsContainer.children[1].isEqualNode(divStepsContainer.children[2]) && 
                                    divStepsContainer.children[2].isEqualNode(divStepsContainer.children[3]) &&
                                    divStepsContainer.children[3].isEqualNode(divStepsContainer.children[4]) &&
                                    divStepsContainer.children[4].isEqualNode(divStepsContainer.children[5])
                                ){
                                    //SETTA MSG DE LOADING
                                    divsSteps[j].innerHTML = setLoadingPageAnimation();
    
                                    //CHAMA API PARA DESBLOQUEAR CONTEUDO
                                    callAPITheoryUnlocked('texto');
                                    container = divsSteps[j];
                                    break;
                                }
                            }catch(erro){

                            }
                            break;
                        }
                    }
                },800);


                //VERIFICA SE NA 1 EXEC O CONTEUDO ESTA BLOQUEADO - VIDEO
                //CASO POSITIVO, CHAMA API E MONTA VIDEO
                let v = setInterval(()=>{
                    let divsVideo = document.querySelectorAll('div');
                    for(let j=0; j<divsVideo.length; j++){
                        if(divsVideo[j].hasAttribute('data-cy') && divsVideo[j].getAttribute('data-cy') == 'theory-video-content'){
                            clearInterval(v);
                            if(divsVideo[j].children.length == 0)
                            {
                                //SETTA MSG DE LOADING
                                divsVideo[j].innerHTML = setLoadingPageAnimation();

                                //CHAMA API PARA DESBLOQUEAR CONTEUDO
                                callAPITheoryUnlocked('video');
                                break;
                            }
                        }
                    }
                },800);


                //DEFINE NOVA ACAO AO CLICAR NO BOTAO
                divs[i].addEventListener("click", ()=>{
                    let nodes = divs[i].childNodes;
                    for(let i=0; i<nodes.length; i++){
                        if(nodes[i].nodeName == 'P' && nodes[i].textContent == 'Alternar para texto >>'){
                            
                            //PROCURA DIV PARA RECEBER CONTEUDO
                            let s = setInterval(()=>{
                                let divsSteps = document.querySelectorAll('div');
                                for(let j=0; j<divsSteps.length; j++){
                                    if(divsSteps[j].hasAttribute('data-cy') && divsSteps[j].getAttribute('data-cy') == 'theory-text-content'){
                                        clearInterval(s);

                                        let divStepsContainer = divsSteps[j].children[0].children[0];
                                        try{
                                            if(
                                                divStepsContainer.children[0].isEqualNode(divStepsContainer.children[1]) &&
                                                divStepsContainer.children[1].isEqualNode(divStepsContainer.children[2]) && 
                                                divStepsContainer.children[2].isEqualNode(divStepsContainer.children[3]) &&
                                                divStepsContainer.children[3].isEqualNode(divStepsContainer.children[4]) &&
                                                divStepsContainer.children[4].isEqualNode(divStepsContainer.children[5])
                                            ){
                                                divsSteps[j].innerHTML = setLoadingPageAnimation();
                                                callAPITheoryUnlocked("texto");
                                                break;
                                            }
                                        }catch(erro){

                                        }
                                    }
                                }
                            },800);
                            break;
                        }
                        if(nodes[i].nodeName == 'P' && nodes[i].textContent == 'Alternar para video >>'){
                            callAPITheoryUnlocked("video");
                            if(verificaElemento("#msgLottieDesbloqueio")){
                                document.getElementById("msgLottieDesbloqueio").innerHTML = `
                                    <p class="lead">Aguarde um momento...<br>Estamos removendo os bloqueios para você...</p>`
                            }
                            break;
                        }
                    }
                });
                break;
            }else{
                //PROCURA DIV PARA RECEBER CONTEUDO
                let s = setInterval(()=>{
                    let divsSteps = document.querySelectorAll('div');
                    for(let j=0; j<divsSteps.length; j++){
                        if(divsSteps[j].hasAttribute('data-cy') && divsSteps[j].getAttribute('data-cy') == 'theory-text-content'){
                            clearInterval(s);

                            let divStepsContainer = divsSteps[j].children[0].children[0];
                            try{
                                if(
                                    divStepsContainer.children[0].isEqualNode(divStepsContainer.children[1]) &&
                                    divStepsContainer.children[1].isEqualNode(divStepsContainer.children[2]) && 
                                    divStepsContainer.children[2].isEqualNode(divStepsContainer.children[3]) &&
                                    divStepsContainer.children[3].isEqualNode(divStepsContainer.children[4]) &&
                                    divStepsContainer.children[4].isEqualNode(divStepsContainer.children[5])
                                ){
                                    divsSteps[j].innerHTML = setLoadingPageAnimation();
                                    callAPITheoryUnlocked("texto");
                                    break;
                                }
                            }catch(erro){
                                
                            }
                        }
                    }
                },800);
            }
        }
    },800);
}


function setLoadingPageAnimation()
{
    return `
        <div id="containerLootieLoading" class="container text-center">
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_4bzh2jhs.json"  background="transparent"  speed="1"  style="height: 300px;"  loop  autoplay></lottie-player>
            <center id="msgLottieDesbloqueio">
                <p class="lead">Aguarde um momento...<br>Estamos removendo os bloqueios para você...</p>
            </center>
        </div>`
}


function importRequiredCDN()
{
    let r = setInterval(()=>{
        if(verificaElemento('head')){
            clearInterval(r);
            if(!customElements.get("lottie-player")){
                let lottieJS = document.createElement('script');
                lottieJS.setAttribute('src','https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js');
                document.querySelector('head').appendChild(lottieJS);
            }
        }
    },800);
}


/**
 * Faz chamada para API e popula página de acordo com o parametro typeContent
 * @param {*} typeContent
 */
function callAPITheoryUnlocked(typeContent)
{
    let token = getCookie('user_jwt');
    let topicId = getTopicId();
    let r = setInterval(()=>{
        if(typeof(axios) == 'function' && token != null && topicId != null){
            clearInterval(r);
            axios({
                method: "POST",
                url: `https://possoler.tech/API/responde_ai/signedUser/index.php?action=getTheory`,
                timeout: 30000,
                data: JSON.stringify({
                    token: token,
                    topicId: topicId
                })
            }).then((resp)=>{

                if(resp.data.status == 'failed')
                    throw new Error(resp.data.message);

                if(typeContent == 'texto'){
                    let r = setInterval(()=>{
                        let divs = document.querySelectorAll('div');
                        for(let i=0; i<divs.length; i++){
                            if(divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == 'theory-text-content' && typeof(MathJax) == "object"){
                                clearInterval(r);
                                divs[i].innerHTML = `
                                    <div class="sc-jTzLTM fFEUnb rendered">
                                        <div>${resp.data.lightBody}</div>
                                    </div>`;
                                MathJax.typeset();
                                return;
                            }
                        }
                    },800);
                }
                else if(typeContent == 'video'){
                    const SINGLE_VIDEO_SIZE = 450;
                    const SPACE_BETWEEN_VIDEOS = 50;

                    let r = setInterval(()=>{
                        let divs = document.querySelectorAll('div');
                        for(let i=0; i<divs.length; i++){
                            if(divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == 'theory-video-content'){
                                clearInterval(r);
                                if(divs[i].children[0].id == "containerLootieLoading")
                                {
                                    if(resp.data.hasOwnProperty('videos'))
                                    {
                                        //REMOVE ANIMACAO DE CARREGAMENTO
                                        document.getElementById("containerLootieLoading").remove();

                                        //SETA TAMANHO DA PAGINA
                                        divs[i].style.cssText += `height: ${(SINGLE_VIDEO_SIZE*resp.data.videos.length) + (SPACE_BETWEEN_VIDEOS*resp.data.videos.length)}px !important`;

                                        //ITERA SOBRE OBJETO DE RESPOSTA PARA MONTAR PAGINA
                                        for(let j=0; j<resp.data.videos.length; j++){
                                            divs[i].innerHTML += `
                                                <div data-cy="video-iframe" allowfullscreen="" frameborder="0" style="width: 100%; height: ${100/resp.data.videos.length}%;">
                                                    <div style="width: 100%; height: 100%;">
                                                        <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/${resp.data.videos[j]}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"></iframe>
                                                    </div>
                                                </div>
                                                <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`
                                        }
                                    }else{
                                        throw new Error("Falha ao obter objeto \"videos\"");
                                    }
                                }
                            }
                        }
                    },800);
                }
            }).catch((erro)=>{
                sweetAlert(
                    'error',
                    'Erro',
                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                );
                if(verificaElemento("#msgLottieDesbloqueio")){
                    document.getElementById("msgLottieDesbloqueio").innerHTML = `
                        <p>Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.</p>
                        <p><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}</p>`
                }
            })
        }
    },800);
}

/**
 * Pega e retorna topicId da URL
 * @returns String
 */
function getTopicId()
{
    let url = window.location.href;
    let params = url.split("/");
    return params[params.length-1];
}


/**
 * Sobrescreve acao padrao dos botoes
 */
function setTheoryLinksAction()
{
    let r = setInterval(()=>{
        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            if(divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == 'side-menu'){
                clearInterval(r);
                setTimeout(()=>{
                    let links = document.querySelectorAll("a");
                    for(let i=0; i<links.length; i++){
                        if(
                            links[i].getAttribute("href").includes("/aprender") && 
                            links[i].getAttribute("href").includes("/topico") &&
                            links[i].getAttribute("href").includes("/teoria") &&
                            links[i].getAttribute("href").includes("/exercicio/")
                        ){
                            links[i].addEventListener("click", (event)=>{
                                event.preventDefault();
                                window.location.assign(`https://${window.location.hostname}${links[i].getAttribute("href")}`);
                            });
                        }
                    }
                },2000);
                break;
            }
        }
    },800);
}

/**
 * Remove blur da pagina
 */
function removeBlurPage()
{
    let r = setInterval(()=>{
        let blurElements = document.querySelectorAll(".blur");            
        if(blurElements.length>0){
            clearInterval(r);
            for (let i=0; i<blurElements.length; i++){
                blurElements[i].classList.remove("blur");
                blurElements[i].style.filter = 'none';
            }
        }
    },800);
}


/**
 * Habilita scroll da pagina
 */
function enableBodyOverflow()
{
    let r = setInterval(()=>{
        if(verificaElemento(".ReactModal__Body--open")){
            clearInterval(r);
            document.body.style.overflow = "auto"
        }
    },800);
}


function removeReactModalOverlay()
{
    let r = setInterval(()=>{
        let reactModalOverlay = document.querySelectorAll(".ReactModal__Overlay");
        if(reactModalOverlay.length > 0){
            clearInterval(r);
            for(let i=0; i<reactModalOverlay.length; i++){
                reactModalOverlay[i].remove();
            }
        }
    },800);
}

/**
 * Remove bloqueio do dexter
 */
function removeDexterBlock()
{
    let r = setInterval(()=>{
        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            if(divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == 'no-access-dexter-overlay'){
                clearInterval(r);
                divs[i].remove();
            }
        }
    },800);
}


/* ============================== JORNAL O POVO ============================== */

function modifyOPOVO()
{
    if(window.location.href == "https://mais.opovo.com.br/"){
        window.location.assign("https://mais.opovo.com.br/home");
    }
    verificaAtualizacaoVersao();
}



/* ============================== JORNAL DO COMERCIO - PE ============================== */

function modyfyJORNALCOMERCIO()
{
    if((window.location.href).includes("https://impresso.jc.ne10.uol.com.br/")){

        if(window.location.href == "https://impresso.jc.ne10.uol.com.br/"){
            window.location.replace("https://impresso.jc.ne10.uol.com.br/index.php?id=/txt.php");
        }
        let r = setInterval(()=>{
            if(verificaElemento('#preloader-jconline')){
                clearInterval(r);
                document.getElementById("preloader-jconline").remove();
                blockPaywallRequest("*://me.jsuol.com.br/*");
            }
        },800);
    }
    else{
        blockPaywallRequest("*://s3.amazonaws.com/sdk-signin-wall-production/bundle.js*");
    }
}



/* ============================== O TEMPO MINAS GERAIS ============================== */

function modifyOTEMPO()
{
    if(new URLSearchParams(window.location.search).get('aId') == null) {
        let r = setInterval(()=>{
            let paywallBlock = document.querySelector('.reset-overlay');
            if(paywallBlock != null){
                clearInterval(r);
                paywallBlock.remove();
            }
        },800);
    }else{
        let r = setInterval(()=>{
            if(verificaElemento('#div-paywall-element')){
                clearInterval(r);
    
                //MONTA SWEET ALERT DE DESBLOQUEIO
                let s = setInterval(()=>{
                    if(typeof(Swal) == 'function'){
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
    
                //TENTA REQUEST COM AXIOS PARA PEGAR TOKEN
                let waitAxios = setInterval(()=>{
                    if(typeof(axios) == 'function'){
                        clearInterval(waitAxios);
                        axios({
                            method: 'GET',
                            url: 'https://possoler.tech/API/jornal_otempo/getRestServiceTokenEncoded.php',
                            timeout: 30000
                        }).then((resp)=>{
                            const TOKEN_ENCODED = resp.data.OTEMPO_REST_SERVICE_TOKEN_ENCODED;
    
                            let waitPolopoly = setInterval(()=>{
                                if(typeof(polopoly) == 'object'){
                                    clearInterval(waitPolopoly);
    
                                    const TOKEN_DECODED = polopoly.base64.decode(TOKEN_ENCODED);
                                    const GUID = getArticleGuid();
    
                                    //REQUEST PARA PEGAR CONTEUDO DA MATÉRIA
                                    let t = setInterval(()=>{
                                        if(TOKEN_DECODED != null && GUID != null){
                                            clearInterval(t);
                                            let conteudoMateria = "";
    
                                            axios({
                                                method: 'GET',
                                                url: `${window.location.origin}/rest-services/emotion-service/noticia?guid=${GUID}&token=${TOKEN_DECODED}`,
                                                timeout: 30000,
                                                headers: {'accept': 'application/json'}
                                            }).then((resp)=>{
    
                                                for(let i=0; i<resp.data.length; i++){    
                                                    //GET CONTENT
                                                    if(resp.data[i].hasOwnProperty('content')){
                                                        if(resp.data[i].content != "" && resp.data[i].content != undefined){
                                                            conteudoMateria += resp.data[i].content;
                                                        }
                                                    }
    
                                                    //GET NOTAS
                                                    if(resp.data[i].hasOwnProperty('notas')){
                                                        for(let n=0; n<resp.data[i].notas.length; n++){
    
                                                            //GET TITLE NOTA[n]
                                                            if(resp.data[i].hasOwnProperty('title')){
                                                                conteudoMateria += `<h4 style="font-size: 18px !important; font-weight: 700 !important;">${resp.data[i].notas[n].title}</h4>`;
                                                            }
    
                                                            //GET CONTENT NOTA[n]
                                                            if(resp.data[i].notas[n].hasOwnProperty('content')){
                                                                conteudoMateria += resp.data[i].notas[n].content;
                                                            }
                                                        }
                                                    }
                                                }
    
                                                let waitConteudoMateria = setInterval(()=>{
                                                    if(conteudoMateria != null){
                                                        clearInterval(waitConteudoMateria);
                                                        try{
                                                            document.querySelector('.artigo-conteudo-article').innerHTML += conteudoMateria;
                                                            sweetAlert(
                                                                'success',
                                                                'Sucesso',
                                                                'Ótimo! Conteúdo desbloqueado!'
                                                            );
    
                                                            incrementaConteudoAPI();
                                                            verificaAtualizacaoVersao();
                                                            removePaywallBanner();
                                                            restoreImgs();
                                                        }catch(erro){
                                                            sweetAlert(
                                                                'error',
                                                                'Erro',
                                                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                                                            );
                                                        }
                                                    }
                                                },800);
    
                                            }).catch((erro)=>{
                                                sweetAlert(
                                                    'error',
                                                    'Erro',
                                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>[O Tempo Request] ${erro.toString()}`
                                                );
                                            });
                                        }
                                    },800);
                                }
                            },800);
                        }).catch((erro)=>{
                            sweetAlert(
                                'error',
                                'Erro',
                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>[Internal API Request] ${erro.toString()}`
                            );
                        });
                    }
                },800);
            }
        },800);
    }
}


function getArticleGuid() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('aId');
}


function removePaywallBanner()
{
    if(verificaElemento('.reset-overlay')) document.querySelector('.reset-overlay').remove();
}


function restoreImgs()
{
    let imgs = document.querySelectorAll('img');

    for(let i=0; i<imgs.length; i++){
        if(imgs[i].hasAttribute('data-src')){
            let currentAttributeValue = imgs[i].getAttribute("data-src");
            imgs[i].setAttribute("src", currentAttributeValue);
        }
    }
}



/* ============================== DIARIO SANTA MARIA ============================== */

function modifyDIARIOSM()
{
    //ADD JQUERY JS
    let jqueryJS = document.createElement('script');
    jqueryJS.setAttribute('src', 'https://code.jquery.com/jquery-3.6.0.min.js');
    document.body.appendChild(jqueryJS);

    let r = setInterval(()=>{
        if(verificaElemento('.row-bloqueio') && typeof($) == 'function' && findPaywallText()){
            clearInterval(r);

            try{
                let base64ParsedBody = CryptoJS.enc.Base64.parse(parsedBody);
                let cryptoKey = CryptoJS.enc.Base64.parse('u/Gu5posvwDsXUnV5Zaq4g==');
                let cryptoIv = CryptoJS.enc.Base64.parse('5D9r9ZVzEYYgha93/aUK2w==');

                $(".suita-artigo .row-conteudo .post-content").html(CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt({
                    ciphertext: base64ParsedBody
                }, cryptoKey, {
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                    iv: cryptoIv,
                })));

                $(".suita-artigo .row-conteudo").show();
                $(".suita-artigo .videos").show();
                $(".suita-artigo .imagens").show();
                $(".suita-artigo .elementos").show();
                $(".suita-artigo .row-loading").hide();

                let u = setInterval(()=>{
                    if(typeof(twttr) == 'object'){
                        clearInterval(u);
                        twttr.widgets.load();
                    }
                },800);

                document.querySelector('.row-bloqueio').remove();
                incrementaConteudoAPI();
                verificaAtualizacaoVersao();

            }catch(erro){
                if(typeof(Swal) == 'function'){
                    sweetAlert(
                        'error',
                        'Erro',
                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                    );
                }else{
                    alert(erro.toString());
                }
            }
        }
    },800);
}


function findPaywallText()
{
    let h1 = document.querySelectorAll('h1');
    for(let i=0; i<h1.length; i++){
        if(h1[i].textContent.includes("Conteúdo exclusivo!")){
            return true;
        }
    }
    return false;
}



/* ============================== O POPULAR ============================== */

function modifyOPOPULAR()
{
    if(window.location.hostname == "opopular.com.br"){

        let rotina = setInterval(()=>{
            if(verificaElemento('.locked-news')){
                clearInterval(rotina);
    
                let articlesIsRemoved = removeArticles();
                hideKeepReadingChildren();
                removeAdBetweenArticles();
                removeCommentDiv();
    
                let y = setInterval(()=>{
                    if(verificaElemento('.locked-news') && articlesIsRemoved && typeof(axios) == 'function' && verificaElemento('#styleSnack')){
                        clearInterval(y);
        
                        mountSweetAlert(
                            'info',
                            'Aguarde um momento...',
                            'Estamos removendo os bloqueios para você...<br><br>'
                        );

                        //RECUPERA ARQUIVO COM CONTEUDO DESBLOQUEADO
                        axios({
                            method: 'POST',
                            url: 'https://possoler.tech/API/cachemock/?options=get',
                            timeout: 30000,
                            data: JSON.stringify({
                                key: btoa(window.location.pathname)
                            })
                        }).then((resp)=>{
                            console.clear();
                            console.log('SUCESSO GET PAGE CODE');
                            console.log(resp.data);

                            if(resp.data.hasOwnProperty("content")){
                                let cacheSourceCode = new DOMParser().parseFromString(resp.data.content, "text/html");
                                let blocoNoticia = getArticleBodyPOPULAR(cacheSourceCode);
                                let blocoOriginal = getArticleBodyPOPULAR(document);

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

                                            incrementaConteudoAPI();
                                            verificaAtualizacaoVersao();

                                            //VERIFICA E OCULTA KEEP READING CHILDREN
                                            fixVideoRender();
                                            hideKeepReadingChildren();
                                            removeLockedNewsContainers();
                                            removeArticles();
                                            removeAdBetweenArticles();
                                            removeCommentDiv();

                                        }else{
                                            sweetAlert(
                                                'warning',
                                                'Atenção',
                                                'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>'
                                            );
                                            return;
                                        }
                                    }
                                },800);
                            }else{
                                setTimeout(()=>{
                                    window.location.assign(`https://webcache.googleusercontent.com/search?q=cache:${window.location.href}`);
                                },1500);
                            }
                        }).catch((erro)=>{
                            if(erro.toString().includes('timeout')){
                                SwalTimeout(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                    'https://opopular.com.br'
                                );
                            }else{
                                sweetAlert(
                                    'warning',
                                    'Atenção',
                                    `Ops, tivemos um pequeno problema!<br> Por favor, recarregue a página para tentar novamente.<spam style='font-weight: bold !important;'>Código do erro: [API FAILED REQUEST TO RESPONSE FILE] - </spam>`
                                );
                            }
                        });
                    }
                },800);
            }
        },800);
    }else{
        //TRECHO DO CÓDIGO RESPONSÁVEL POR PEGAR CACHE DA PÁGINA

        //SET NO SCROLL PAGE
        let u = setInterval(()=>{
            if(verificaElemento('body')){
                clearInterval(u);
                document.body.style.cssText += 'overflow: hidden !important; position: fixed !important;';
            }
        },800);

        mountSweetAlert(
            'info',
            'Aguarde mais um momento...',
            'Estamos removendo os bloqueios para você...<br><br>'
        );

        let waitAxios = setInterval(()=>{
            if(typeof(axios) == 'function' && verificaElemento('#styleSnack')){
                clearInterval(waitAxios);

                let key = genHashKey();

                //FAZ GET PARA PRÓPRIA PAGINA PARA PEGAR CÓDIGO FONTE DELA
                fetch(document.location.href)
                .then((response) => {
                    if(response.status == 200){
                        response.text().then(pageSource => {

                            pageSource = new DOMParser().parseFromString(pageSource, 'text/html');
                            let article = getArticleBodyPOPULAR(pageSource);
                            let blocoNoticia = (article != false) ? article.outerHTML : pageSource.outerHTML;

                            console.clear();

                            let l = setInterval(()=>{

                                try{
                                    console.log(`KEY = ${key}`);
                                    console.log(`PAGE SOURCE = ${pageSource != null}`);
                                    console.log(`BLOCO NOTICIA = ${blocoNoticia.outerHTML}`);
                                }catch(erro){

                                }
                                if((key != null || key != undefined) && (pageSource != null || pageSource != undefined) && (blocoNoticia != null || blocoNoticia != undefined)){
                                    clearInterval(l);
        
                                    //FAZ POST PARA CRIAR ARQUIVO JSON COM CONTEUDO DA PÁGINA DE CACHE
                                    axios({
                                        method: 'POST',
                                        url: 'https://possoler.tech/API/cachemock/?options=post',
                                        timeout: 30000,
                                        data: JSON.stringify({
                                            key: btoa(key.hash),
                                            pageSource: blocoNoticia
                                        })
                                    }).then((resp)=>{
                                        if(resp.data == "success"){
                                            window.location.replace(key.url);
                                        }else{
                                            SwalGotoHome(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: [API FAILED TO CREATE FILE] - </spam>${resp.data}`,
                                                "https://opopular.com.br"
                                            );
                                        }
                                    }).catch((erro)=>{
                                        if(erro.toString().includes('timeout')){
                                            SwalTimeout(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://opopular.com.br"
                                            );
                                        }else{
                                            SwalGotoHome(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://opopular.com.br"
                                            );
                                        }
                                    });
                                }
                            },800);
                        }).catch((erro) => {
                            if(erro.toString().includes('timeout')){
                                SwalTimeout(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                    "https://opopular.com.br"
                                );
                            }else{
                                SwalGotoHome(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                    "https://opopular.com.br"
                                );
                            }
                        });
                    }else if(response.status == 404){
                        SwalGotoHome(
                            'warning',
                            'Atenção',
                            'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>',
                            "https://opopular.com.br"
                        );
                    }else{
                        throw `Wrong HTTPS Status on get cache content - HTTPS STATUS ${response.status}`;
                    }
                }).catch((erro)=>{
                    if(erro.toString().includes('timeout')){
                        SwalTimeout(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                            "https://opopular.com.br"
                        );
                    }else{
                        SwalGotoHome(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                            "https://opopular.com.br"
                        );
                    }
                });
            }    
        },800);
    }
}
        


function getArticleBodyPOPULAR(scope)
{
    let articles = scope.querySelectorAll('section');

    for(let i=0; i<articles.length; i++){
        if(articles[i].hasAttribute("itemprop")){
            if(articles[i].getAttribute("itemprop").includes("articleBody")){
                return articles[i];
            }
        }
    }

    return false;
}


function hideKeepReadingChildren()
{
    let keepReadingChildren;
    if(verificaElemento("#keep-reading")){
        keepReadingChildren = document.getElementById("keep-reading").children;
        for(let i=0; i<keepReadingChildren.length; i++){
            if(i==0) continue;
            keepReadingChildren[i].style.display = 'none';
        }

        if(verificaElemento('.for-top-news')){
            document.querySelector('.for-top-news').remove();
        }
    }
    return false;
}


function removeLockedNewsContainers()
{
    let lockedNews = document.querySelectorAll('.locked-news');
    for(let i=0; i<lockedNews.length; i++){
        lockedNews[i].remove();
    }
}


function removeArticles()
{
    let allArticles = document.querySelectorAll('article');
    for(let i=0; i<allArticles.length; i++){
        if(i==0) continue;
        allArticles[i].remove();
    }
    return true;
}


function removeAdBetweenArticles()
{
    let allAdBetweenArticles = document.querySelectorAll('.ad-between-articles');
    for(let i=0; i<allAdBetweenArticles.length; i++){
        allAdBetweenArticles[i].remove();
    }
}


function fixVideoRender()
{
    if(window.location.href.includes('/videos')){
        let iframes = document.querySelectorAll('iframe');
        for(let i=0; i<iframes.length; i++){
            if(iframes[i].hasAttribute('src')){
                let currentSrc = iframes[i].getAttribute('src');
                iframes[i].removeAttribute('src');
                iframes[i].setAttribute('src', currentSrc);
            }
        }
    }
}


function removeCommentDiv()
{
    if(verificaElemento('.comment')){
        document.querySelector('.comment').remove();
    }
}




/* ============================== VALOR ECONOMICO V2 ============================== */

function modifyVLRECON()
{
    if(window.location.hostname == "valor.globo.com"){
        let rotina = setInterval(()=>{
            if(verificaElemento('.paywall-cpt') || verificaElemento(".barber-barrier-cpnt") || verificaElemento(".paywall")){
                clearInterval(rotina);

                let intervalRequest = setInterval(()=>{
                    if(typeof(axios) == 'function' && verificaElemento('#styleSnack')){
                        clearInterval(intervalRequest);

                        mountSweetAlert(
                            'info',
                            'Aguarde um momento...',
                            'Estamos removendo os bloqueios para você...<br><br>'
                        );

                        //RECUPERA ARQUIVO COM CONTEUDO DESBLOQUEADO
                        axios({
                            method: 'POST',
                            url: 'https://possoler.tech/API/cachemock/?options=get',
                            timeout: 30000,
                            data: JSON.stringify({
                                key: btoa(window.location.pathname)
                            })
                        }).then((resp)=>{
                            console.clear();
                            console.log('SUCESSO GET PAGE CODE');
                            console.log(resp);

                            if(resp.data.hasOwnProperty("content")){
                                let cacheSourceCode = new DOMParser().parseFromString(resp.data.content, "text/html");
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
                                                'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>'
                                            );
                                            return;
                                        }
                                    }
                                },800);
                            }else{
                                setTimeout(()=>{
                                    window.location.assign(`https://webcache.googleusercontent.com/search?q=cache:${window.location.href}`);
                                },1500);
                            }
                        }).catch((erro)=>{
                            if(erro.toString().includes('timeout')){
                                SwalTimeout(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                    'https://valor.globo.com'
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
        },800);
    }else{
        //TRECHO DO CÓDIGO RESPONSÁVEL POR PEGAR CACHE DA PÁGINA

        //SET NO SCROLL PAGE
        let u = setInterval(()=>{
            if(verificaElemento('body')){
                clearInterval(u);
                document.body.style.cssText += 'overflow: hidden !important; position: fixed !important;';
            }
        },800);
        
        mountSweetAlert(
            'info',
            'Aguarde mais um momento...',
            'Estamos removendo os bloqueios para você...<br><br>'
        );

        let waitAxios = setInterval(()=>{
            if(typeof(axios) == 'function' && verificaElemento('#styleSnack')){
                clearInterval(waitAxios);

                let key = genHashKey();

                //FAZ GET PARA PRÓPRIA PAGINA PARA PEGAR CÓDIGO FONTE DELA
                fetch(document.location.href)
                .then((response) => {
                    if(response.status == 200){
                        response.text().then(pageSource => {

                            pageSource = new DOMParser().parseFromString(pageSource, 'text/html');
                            let article = getArticle(pageSource);
                            let blocoNoticia = (article != false) ? article.outerHTML : pageSource.outerHTML;

                            let l = setInterval(()=>{
                                if((key != null || key != undefined) && (pageSource != null || pageSource != undefined) && (blocoNoticia != null || blocoNoticia != undefined)){
                                    clearInterval(l);
        
                                    //FAZ POST PARA CRIAR ARQUIVO JSON COM CONTEUDO DA PÁGINA DE CACHE
                                    axios({
                                        method: 'POST',
                                        url: 'https://possoler.tech/API/cachemock/?options=post',
                                        timeout: 30000,
                                        data: JSON.stringify({
                                            key: btoa(key.hash),
                                            pageSource: blocoNoticia
                                        })
                                    }).then((resp)=>{
                                        if(resp.data == "success"){
                                            window.location.replace(key.url);
                                        }else{
                                            SwalGotoHome(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: [API FAILED TO CREATE FILE] - </spam>${resp.data}`,
                                                "https://valor.globo.com"
                                            );
                                        }
                                    }).catch((erro)=>{
                                        if(erro.toString().includes('timeout')){
                                            SwalTimeout(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://valor.globo.com"
                                            );
                                        }else{
                                            SwalGotoHome(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://valor.globo.com"
                                            );
                                        }
                                    });
                                }
                            },800);
                        }).catch((erro) => {
                            if(erro.toString().includes('timeout')){
                                SwalTimeout(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                    "https://valor.globo.com"
                                );
                            }else{
                                if(erro.toString().includes('timeout')){
                                    SwalTimeout(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                        "https://valor.globo.com"
                                    );
                                }else{
                                    SwalGotoHome(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                        "https://valor.globo.com"
                                    );
                                }
                            }
                        });
                    }else if(response.status == 404){
                        SwalGotoHome(
                            'warning',
                            'Atenção',
                            'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>',
                            "https://valor.globo.com"
                        );
                    }else{
                        throw `Wrong HTTPS Status on get cache content - HTTPS STATUS ${response.status}`;
                    }
                }).catch((erro)=>{
                    if(erro.toString().includes('timeout')){
                        SwalTimeout(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                            "https://valor.globo.com"
                        );
                    }else{
                        SwalGotoHome(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                            "https://valor.globo.com"
                        );
                    }
                });
            }    
        },800);
    }
}


function SwalTimeout(icon, title, msg, homeLink)
{
    let r = setInterval(()=>{
        if(typeof(Swal) == 'function'){
            clearInterval(r);

            Swal.fire({
                icon: icon,
                title: title,
                html: msg,
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: true,
                confirmButtonText: `Tentar novamente`,
                showCancelButton: true,
                cancelButtonText: `Voltar para ${homeLink}`,
                backdrop: 'rgba(8, 8, 8, 0.92)',
                customClass: {
                    popup: 'snackZ-index',
                    container: 'snackZ-index'
                }
            }).then((result) => {
                if(result.isConfirmed) window.location.reload();
                else window.location.replace(homeLink);
            });
        }
    },800);
}


function SwalGotoHome(icon, title, msg, homeLink)
{
    let r = setInterval(()=>{
        if(typeof(Swal) == 'function'){
            clearInterval(r);

            Swal.fire({
                icon: icon,
                title: title,
                html: msg,
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: true,
                confirmButtonText: `Voltar para ${homeLink}`,
                //showDenyButton: true,
                //denyButtonText: `Fechar guia`,
                backdrop: 'rgba(8, 8, 8, 0.92)',
                customClass: {
                    popup: 'snackZ-index',
                    container: 'snackZ-index'
                }
            }).then((result) => {
                if(result.isConfirmed) window.location.replace(homeLink);
                /* else if(result.isDenied) window.close(); */
            });
        }
    },800);
}


function genHashKey()
{
    let url = window.location.href;
    let part2 = url.split("cache:");
    let uri = part2[part2.length-1];
    return (uri.includes('valor.globo.com'))
        ? {hash: `/${uri.split('valor.globo.com/')[1]}`, url: uri}
        : {hash: `/${uri.split('opopular.com.br/')[1]}`, url: uri};
}


function mountSweetAlert(icon, title, msg)
{
    //MONTA SWEET ALERT DE DESBLOQUEIO
    let s = setInterval(()=>{
        if(typeof(Swal) == 'function'){
            clearInterval(s);
            console.log('ACHEI SWALL');
            if(Swal.isVisible() == false && verificaElemento('#styleSnack')){
                sweetAlert(icon, title, msg);
            }
        }
    },800);
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
    let backdropColor;
    Swal.close();

    backdropColor = (
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://opopular.com.br") || 
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://valor.globo.com")
    )
        ? 'rgba(8, 8, 8, 0.92)' : '';


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
        backdrop: backdropColor,
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






/* =============================== BRAINLY =============================== */

function modifyBRAINLY()
{
    let r = setInterval(()=>{
        if(verificaElemento('.brn-qpage-next-answer-box-content') && verificaElemento('.js-react-bottom-banner')){
            clearInterval(r);

            if(Swal.isVisible() == false && verificaElemento('#styleSnack')){
                sweetAlert(
                    'info',
                    'Aguarde um momento...',
                    'Estamos removendo os bloqueios para você...<br><br>'
                );
            }

            const URL_REQUEST = 'https://possoler.tech/API/brainly/index.php?urlTarefa=';
            const METHOD_REQUEST = 'GET';

            if(typeof(axios) == 'function'){
                axios({
                    method: METHOD_REQUEST,
                    url: `${URL_REQUEST}${window.location.href}`,
                    timeout: 30000
                }).then((resp)=>{

                    if(resp.data.hasOwnProperty('erro')){
                        sweetAlert(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${resp.data.erro}`
                        );
                        return;
                    }

                    removeBrainlyBlocks();
                    expandAnswerDiv();

                    let answersBlocks_1 = document.querySelectorAll('.brn-qpage-next-answer-box-content');
                    let answersBlocks_2 = document.querySelectorAll('.brn-qpage-next-dummy-unlock-section');
                    let allAnswersBlocks = [...answersBlocks_1, ...answersBlocks_2];

                    let u = setInterval(()=>{
                        if(verificaElemento("#styleSnack")){
                            clearInterval(u);
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
            }else{
                fetch(`${URL_REQUEST}${window.location.href}`,
                {
                    method: METHOD_REQUEST
                }).then(function(res){ return res.json(); })
                .then(function(resp){

                    if(resp.hasOwnProperty('erro')){
                        sweetAlert(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${resp.erro}`
                        );
                        return;
                    }

                    removeBrainlyBlocks();
                    expandAnswerDiv();

                    let answersBlocks_1 = document.querySelectorAll('.brn-qpage-next-answer-box-content');
                    let answersBlocks_2 = document.querySelectorAll('.brn-qpage-next-dummy-unlock-section');
                    let allAnswersBlocks = [...answersBlocks_1, ...answersBlocks_2];

                    let u = setInterval(()=>{
                        if(verificaElemento("#styleSnack")){
                            clearInterval(u);
                            for(let i=0; i<resp.answers.length; i++){
                                allAnswersBlocks[i].innerHTML = resp.answers[i];
                                if(i == (resp.answers.length)-1){
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
                                    observerResposta(resp.answers);
                                    incrementaConteudoAPI();
                                    verificaAtualizacaoVersao();
                                    setActionBtnVerRespostaBrainly();
                                }
                            }
                        }
                    },800);
                }).catch((erro)=>{
                    sweetAlert(
                        'error',
                        'Erro',
                        `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`
                    );
                });
            }
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
        incrementaConteudoAPI();
        saveDataForDashboard(22);
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



/* ====================== EL PAIS =========================== */

function modifyELPAIS()
{
    verificaAtualizacaoVersao();
    let r = setInterval(() => {
        if(verificaElemento('#ctn_freemium_article')){
            clearInterval(r);
            document.querySelector('#ctn_freemium_article').remove();
        }
    },800);

    setInterval(()=>{
        if(document.getElementById("elpais_gpt-INTEXT") != null){
            document.getElementById("elpais_gpt-INTEXT").style.height = "unset";
        }
    },800);
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
        if(typeof(axios) == 'function') {
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
       var VERSAO_ATUAL = '${CURRENT_VERSION}';
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



/* ======================= EXAME ================================ */

function modifyEXAME()
{
    verificaAtualizacaoVersao();

    if(document.querySelector(".xm-paywall") != null){
        try{
            let unlockedContent = "";
            (__NEXT_DATA__.props.pageProps.postData).forEach((data)=>{
                unlockedContent += (data.hasOwnProperty("content")) ? data.content : "";
            });
            document.getElementById("news-body").innerHTML = unlockedContent;
            incrementaConteudoAPI();
            document.querySelector(".xm-paywall").remove();
        }catch(erro){

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

            let r = setInterval(()=>{
                let paywallBlock = document.querySelector(".xm-paywall");
                if(paywallBlock != undefined && paywallBlock != null && typeof(axios) == 'function'){
                    clearInterval(r);
                    axios({
                        method: 'GET',
                        url: document.location.href,
                        timeout: 20000
                    }).then((resp)=>{
                        let codigoFonte = new DOMParser().parseFromString(resp.data, 'text/html');
                        let newsBlock = codigoFonte.getElementById("news-body");

                        let u = setInterval(()=>{
                            if(newsBlock != null && newsBlock != undefined){
                                clearInterval(u);
                                if(newsBlock != ''){
                                    sweetAlert(
                                        'success',
                                        'Sucesso',
                                        'Ótimo! Conteúdo desbloqueado!'
                                    );
                                    document.getElementById("news-body").innerHTML = newsBlock.outerHTML;
                                    paywallBlock.remove();
                                    incrementaConteudoAPI();
                                }else{
                                    sweetAlert(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>Erro ao montar newsBlock `
                                    );
                                }
                            }
                        },800);
                    }).catch((erro)=>{
                        sweetAlert(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                        );
                    });
                }
            },800);
        }
    }
}


/* ====================== RESPONDE AI ===========================  */

/* DESBLOQUEIA PAGINA EXCLUSIVA FACULDADE

1) SETAR CHAVE COMO TRUE => _current_user.hasAccess;
*/

function modifyRESPAI()
{
    enableUrlChangeDetect();
    checkButtonCreation();

    window.addEventListener('locationchange',()=>{
        checkButtonCreation();
    });

    unlockPaidContent();
    window.addEventListener('load', ()=>{
        try{
            verificaAtualizacaoVersao();
            metodoOriginal();
            metodoAlternativo();
        }catch(erro){
            alert(erro.toString());
        }
    });
}

/* ======================================== PARA USUARIOS NÃO LOGADOS ======================================== */

/* ======================================== METODO ORIGINAL ======================================== */

function metodoOriginal()
{
    const TIMEOUT = 3000;
    setTimeout(()=>{
        let codigoSemBloqueio = document.querySelector("html");
        let scripts = codigoSemBloqueio.querySelectorAll("script");
        removeScriptObserver(scripts, codigoSemBloqueio);
    },TIMEOUT);
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

    //LOOP Para remover bloqueios caso haja atualização dos iframes
    setInterval(()=>{
        //removeVideoBlockingAulao();
        setSelectableArea();
        removeBloqueioExercicioLivro();
        removeBlur();
        removeAllBtnShowSolucao();
        removeBloqueioTeoria();
        removeBloqueioConteudoExclusivo();
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


/* function removeVideoBlockingAulao()
{
    if((window.location.href).includes('/aulao-')){
        let blockVideo = document.querySelectorAll('.video-overlay');
        for(let i=0; i<blockVideo.length; i++){
            blockVideo[i].remove();
        }
        let chat = document.querySelector('.chat-container');
        if(chat != null) chat.remove();
    }
} */


function removeBloqueioExercicioLivro()
{
    let keys = [false, false, false];
    let divBlock = document.querySelectorAll(".ReactModalPortal");
    let body = document.querySelectorAll(".ReactModal__Body--open");
    let containerBlock = document.querySelectorAll(".NoAccessDisclaimer__Container-sc-6er3z1-0");

    body.forEach((b)=>{
        b.classList.remove("ReactModal__Body--open");
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


function remountPage(elemento, codigoBase)
{
    document.querySelector(elemento).innerHTML = codigoBase.outerHTML;
}


function removeHeaderLogin()
{
    let headers = document.querySelectorAll(".global_menu__fixed_header__login_container");
    headers.forEach((header)=>{
        header.remove();
    });
}


function removeBlur()
{
    let blurElements = document.querySelectorAll(".blur");

    if(blurElements.length>0){
        blurElements.forEach((blurElement)=>{
            blurElement.classList.remove("blur");
            blurElement.style.filter = 'none';
        });
        incrementaConteudoAPI();
    }
}


function removeAllBtnShowSolucao()
{
    let btnSolucaoCompleta = document.querySelectorAll("#exercise-expand-button");
    let btns = document.querySelectorAll(".exercise-theory-expand-button");
    let buttons = document.querySelectorAll('button');

    btnSolucaoCompleta.forEach((btn)=>{btn.remove();});
    btns.forEach((btn)=>{btn.remove()});
    buttons.forEach((button)=>{button.remove();})
}


function removeBloqueioTeoria()
{
    let elementosPaywall = document.querySelectorAll(".paywall");
    let elementosTheory = document.querySelectorAll(".theory-container");
    let btnExpandir = document.querySelectorAll(".expand-overlay");

    elementosPaywall.forEach((elem)=>{elem.classList.remove("paywall");});
    elementosTheory.forEach((elem)=>{elem.classList.remove("theory-container");});
    btnExpandir.forEach((elem)=>{elem.remove();});
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

/* ======================================== METODO ALTERNATIVO ======================================== */

function metodoAlternativo()
{
    let r = setInterval(()=>{
        try{
            expandContent();
            removeExpandButtons();
            removeShowCompleteSolutionButtons();
            removeAllBlurFilter();
            incrementaConteudoAPI();
        }catch(e){
            clearInterval(r);
            console.log(`ERRO DESBLOQUEIO RESP AI => ${e.toString()}`);
            sweetAlert(
                'error',
                'Erro',
                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${e.toString()}`
            );
        }
    },800);
}

function expandContent()
{
    let sections = document.querySelectorAll('section');
    sections.forEach((section)=>{
        if(section.offsetHeight == 300){
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


function removeAllBlurFilter()
{
    //TIRA BLUR TEORIA E EXERCICIOS
    if(verificaElemento('body')){
        let r = setInterval(()=>{
            if(verificaElemento('.paywall-content')){
                clearInterval(r);
                document.body.innerHTML += '<style>.paywall-content{filter: unset !important;}</style>';
            }
        },800);

        let u = setInterval(()=>{
            if(verificaElemento("#exercicios-resolvidos")){
                clearInterval(u);
                document.body.innerHTML += '<style>#exercicios-resolvidos div{filter: unset !important;}</style>';
            }
        },800);
    }
}

/* ====================================================================================================== */


/* =================================== FIX BUG EXERCICIOS RESOLVIDOS DOS LIVROS =================================== */
function checkButtonCreation()
{
    let fullURL = window.location.href;
    if(document.getElementById('btnResposta') == null || document.getElementById('btnResposta') == undefined){
        if(
            (fullURL.includes('materias/solucionario/livro') && 
            fullURL.includes('/edicao/') && 
            new RegExp('\/exercicio\/[0-9]+').test(fullURL))
            || (fullURL.includes("/conteudo/") && fullURL.includes("/livro/"))
        ){
            //RESPOSTA LIVRO - USUARIO DESLOGADO
            if(fullURL.includes("/conteudo/") && fullURL.includes("/livro/")){
                setInterval(()=>{
                    removeShowCompleteSolutionButtons();
                    let sections = document.querySelectorAll('section');
                    for(let i = 0; i<sections.length; i++){
                        sections[i].style.filter = 'unset'
                    };
                },800);
                saveDataForDashboard(8);
            }
            //RESPOSTA LIVRO USUARIO LOGADO
            else{
                createButtonResposta();
                saveDataForDashboard(8);
            }
        }
    }else{
        //REMOVE BOTÃO DE RESOLUÇÃO
        if(
            (!fullURL.includes('materias/solucionario/livro') || 
            !fullURL.includes('/edicao/') || 
            !new RegExp('\/exercicio\/[0-9]+').test(fullURL))
            && !(fullURL.includes("/conteudo/") && fullURL.includes("/livro/"))  && verificaElemento("#btnResposta")
        ){
            document.getElementById('btnResposta').remove();
        }
    }
}


function createButtonResposta()
{
    let r = setInterval(()=>{
        if(document.body != null && document.body != undefined && typeof(Swal) == 'function'){
            clearInterval(r);

            if(document.getElementById('btnResposta') == null || document.getElementById('btnResposta') == undefined){
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



/* =========================== CDN's E UPDATE VERSION ================================= */


function importCDNSnackBar()
{
    let i = setInterval(()=>{
        if(verificaElemento("head")){
            clearInterval(i);

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
            styleSnack.innerText = '.snackZ-index{z-index: 9999999999 !important; white-space: pre-wrap;} .snackBarMsg{z-index: 9999999999 !important; white-space: pre-wrap; border: solid; border-image-slice: 1; border-image-source: linear-gradient(to left, #00C853, #a1ff00);}';

            //ADD IFRAME RESPONDEAI CSS
            var respaiCSS = document.createElement('style');
            respaiCSS.setAttribute('id', 'respaiCSS');
            document.head.appendChild(respaiCSS);
            respaiCSS.innerText = '.respai{width: 100% !important; height: 100% !important; margin: 0px 0px !important; white-space: pre-wrap} .contentSolution{height: 100% !important; padding: 0px !important;} .headerPopup{background-color: #f9f7f7 !important; margin-right: 1.2em !important;} .text-left{text-align: left !important;}';

            //ADD IFRAME LOG_REPORT CSS
            var logReportCSS = document.createElement('style');
            logReportCSS.setAttribute('id', 'logReportCSS');
            document.head.appendChild(logReportCSS);
            logReportCSS.innerText = '.zIndex{z-index:999999;} .logReport{width: 85% !important; height: 100% !important; margin: 0px 0px !important; white-space: pre-wrap} .contentLogReport{height: 100% !important; padding: 0px !important;} .marginTop{margin-top: 80px}';

            //ADD SWEETALERT JS
            let sweetAlertJS = document.createElement('script');
            sweetAlertJS.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@10');
            document.head.appendChild(sweetAlertJS);
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
            customClass: 'snackBarMsg',
            onActionClick: ()=>{
                window.open('https://possoler.tech/#blockDownload');
            }
        };
}

function verificaAtualizacaoVersao()
{
    if(window.location.href.includes('possoler.tech')) return;

    let rotina = setInterval(()=>{
        if(typeof(Snackbar) == 'object'  && verificaElemento('#snackCSS') && typeof(axios) == 'function' && typeof(Swal) == 'function') {
            clearInterval(rotina);

            const URL_API_UPDATE = 'https://possoler.tech/API/searchUpdates.php';
            let tempoAwait = 5;

            axios({
                method: 'get',
                url: URL_API_UPDATE,
                timeout: 20000,
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
        if(typeof(axios) == 'function'){
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
        customClass: 'snackBarMsg',
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



/* ========================== SEND LOG MESSAGE ===================================== */

function swalLog(msgErro, siteErro)
{
    if(localStorage.getItem('sendLog') != 'true'){
        const CODE = `<iframe src="https://possoler.tech/API/log_report/logPage.php" style='width: 100% !important; height: 100% !important; border: none;'></iframe>`;
        
        let r = setInterval(()=>{
            if(typeof(Swal) == 'function'){
                clearInterval(r);
                Swal.fire({
                    html: CODE,
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Enviar Log",
                    cancelButtonText: "Não, obrigado",
                    input: 'checkbox',
                    inputValue: 0,
                    inputPlaceholder: "Sempre reportar logs de erros dessa página",
                    customClass: {
                        popup: 'logReport',
                        content: 'contentLogReport',
                        htmlContainer: 'contentLogReport',
                        actions: 'marginTop',
                        container: 'zIndex'
                    },
                    inputValidator: (result) => {
                        let response = (result) ? "true" : "false";
                        localStorage.setItem('sendLog', response);
                    },
                }).then((result)=>{
                    if(result.isConfirmed){
                        sendLogRequest(msgErro, siteErro);
                    }
                });
            }
        },800);
    }else{
        sendLogRequest(msgErro, siteErro);
    }
}


function sendLogRequest(msgErro, siteErro)
{
    let r = setInterval(()=>{
        if(typeof(axios) == 'function'){
            clearInterval(r);

            axios({
                method: 'POST',
                url: 'https://possoler.tech/API/log_report/',
                timeout: 30000,
                data:{
                    msg: msgErro,
                    site: siteErro
                }
            }).then((resp)=>{
                if(resp.data == "sucesso"){
                    console.log('LOG CRIADO COM SUCESSO');
                    return;
                }
                console.log(`FALHA AO CRIAR LOG - ${resp.data}`);
            }).catch((erro)=>{
                console.log(`FALHA AO CRIAR LOG - ${erro.toString()}`);
            });
        }
    },800);
}


/* ========================== METODOS E VARIAVEIS GLOBAIS ===================================== */

var contMessageIndex=0;

function verificaElemento(elemento)
{
    return (document.querySelector(elemento)!=null) ? true : false;
}


function blockPaywallRequest(urlBlock)
{
    const BLOCKED_URL_REQUEST = urlBlock;

    GM_webRequest([
        {"selector": BLOCKED_URL_REQUEST, "action": "cancel"},
    ], function(info, message, details) {
        console.log('PAYWALL BLOQUEADO');
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
            incrementaConteudoAPI();
        });
    } else if(self.fetch){
        fetch(BLOCKED_URL_REQUEST)
            .then(response => response.text())
            .then(pageSource => {
                console.log('SUCESSO REQUEST FETCH');
            }).catch((erro)=>{
                console.log('FALHA REQUEST FETCH');
                incrementaConteudoAPI();
            });
    }

    let r = setInterval(()=>{
        if(typeof(axios) == 'function'){
            clearInterval(r);
            verificaAtualizacaoVersao();
        }
    },800);
}

/*
=> DETECTA MUDANÇA NA ARVORE DE ELEMENTOS DA DOM

document.addEventListener("DOMSubtreeModified", ()=>{
});

 */