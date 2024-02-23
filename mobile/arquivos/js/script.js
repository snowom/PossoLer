const CURRENT_VERSION = '298';
const DOMAIN = "https://possoler.tech"

/**
 * Verifica qual URL de correspondencia o usuario está e aplica a 
 * devida solução de desbloqueio de conteúdo
 */
function main()
{
    let currentURL = window.location.hostname;

    if(currentURL.includes("folha.uol.com.br")){
        saveDataForDashboard(1);
        verificaAtualizacaoVersao();
    
    }else if(currentURL.includes("estadao.com.br")){
        saveDataForDashboard(2);
        verificaAtualizacaoVersao();
    
    }else if(currentURL.includes("oglobo.globo.com") && !(window.location.href.includes("/epoca"))){
        saveDataForDashboard(3);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("gazetadopovo.com.br")){
        saveDataForDashboard(4);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("super.abril.com.br")){
        saveDataForDashboard(5);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("quatrorodas.abril.com.br")){
        saveDataForDashboard(6);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("veja.abril.com.br") || (currentURL.includes("vejasp.abril"))){
        saveDataForDashboard(7);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("guiadoestudante.abril.com.br")){
        saveDataForDashboard(10);
        verificaAtualizacaoVersao();
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
        modifyEXAME();
    }
    else if(currentURL.includes("oglobo.globo.com") && window.location.href.includes("/epoca")){
        saveDataForDashboard(11);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("revistagalileu.globo.com")){
        saveDataForDashboard(13);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("epocanegocios.globo.com")){
        saveDataForDashboard(12);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("revistamarieclaire.globo.com")){
        saveDataForDashboard(14);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("globorural.globo.com")){
        saveDataForDashboard(15);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("revistapegn.globo.com")){
        saveDataForDashboard(26);
        verificaAtualizacaoVersao();
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
        verificaAtualizacaoVersao();
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
        verificaAtualizacaoVersao();
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
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes('economist.com')){
        saveDataForDashboard(24);
        verificaAtualizacaoVersao();
    }
    else if(
        currentURL.includes('opopular.com.br') ||
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://opopular.com.br/")
    ){
        saveDataForDashboard(30);
        modifyOPOPULAR();
    }
    else if(currentURL.includes('diariosm.com.br')){
        saveDataForDashboard(31)
        modifyDIARIOSM();
    }
    else if(currentURL.includes('otempo.com.br')){
        saveDataForDashboard(32);
        modifyOTEMPO();
    }
    else if(currentURL.includes("glamour.globo.com")){
        saveDataForDashboard(33);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("degraoemgrao.blogfolha.uol.com.br")){
        saveDataForDashboard(1);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("jc.ne10.uol.com.br")){
        saveDataForDashboard(34);
        modyfyJORNALCOMERCIO();
    }
    else if(currentURL.includes("opovo.com.br")){
        saveDataForDashboard(35);
        modifyOPOVO();
    }
    else if(currentURL.includes("correio24horas.com.br")){
        saveDataForDashboard(36);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("jornalnh.com.br")){
        saveDataForDashboard(37);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("atribuna.com.br")){
        saveDataForDashboard(38);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("umdoisesportes.com.br")){
        saveDataForDashboard(39);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("correiodopovo.com.br")){
        saveDataForDashboard(40);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("revistacasaejardim.globo.com")){
        saveDataForDashboard(41);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("saude.abril.com.br")){
        saveDataForDashboard(42);
        verificaAtualizacaoVersao();
    }
    else if(
        currentURL.includes("gaz.com.br") ||
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://www.gaz.com.br/")
    ){
        saveDataForDashboard(43);
        modifyGAZ();
    }
    else if(currentURL.includes("semprefamilia.com.br")){
        saveDataForDashboard(44);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("uol.com.br")){
        saveDataForDashboard(45);
        verificaAtualizacaoVersao();
    }
    else if(currentURL.includes("vocesa.abril.com.br")){
        saveDataForDashboard(46);
        verificaAtualizacaoVersao();
    }
}


/* ============================== GAZ ============================== */

function modifyGAZ()
{
    if(window.location.hostname == "www.gaz.com.br"){
        let rotina = setInterval(()=>{
            if(verificaElemento('.paywall')){
                clearInterval(rotina);

                let intervalRequest = setInterval(()=>{
                    if(typeof(axios) == 'function'){
                        clearInterval(intervalRequest);

                        mountSweetAlert(
                            'info',
                            'Aguarde um momento...',
                            'Estamos removendo os bloqueios para você...<br><br>'
                        );

                        //RECUPERA ARQUIVO COM CONTEUDO DESBLOQUEADO
                        axios({
                            method: 'POST',
                            url: `${DOMAIN}/API/cachemock/getArticleContent`,
                            timeout: 30000,
                            data: JSON.stringify({
                                key: btoa(window.location.pathname)
                            }),
                            headers: {
                                "Content-Type" : "application/json"
                            }
                        }).then((resp)=>{
                            console.clear();
                            console.log('SUCESSO GET PAGE CODE');
                            console.log(resp);
                            let blocoNoticia = resp.data.content;
                            let blocoOriginal = getArticleGAZ(document);
                            

                            let u = setInterval(()=>{
                                if(blocoNoticia != null && blocoOriginal != null){
                                    clearInterval(u);

                                    if(blocoNoticia != false && blocoOriginal != false){

                                        blocoOriginal.innerHTML = blocoNoticia;
                                        sweetAlert(
                                            'success',
                                            'Sucesso',
                                            'Ótimo! Conteúdo desbloqueado!'
                                        );
                                        incrementaConteudoAPI();
                                        verificaAtualizacaoVersao();
                                        removeUnloadedAdsBlocks();
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
                        }).catch((erro)=>{
                            if(erro.toString().includes('timeout')){
                                SwalTimeout(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                    'https://gaz.com.br'
                                );
                            }else if(erro.response.status != 404){
                                sweetAlert(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`
                                );
                            }
                            else{
                                setTimeout(()=>{
                                    window.location.assign(`https://webcache.googleusercontent.com/search?q=cache:${window.location.href}`);
                                },1500);
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
            if(typeof(axios) == 'function'){
                clearInterval(waitAxios);

                let key = genHashKey();

                //FAZ GET PARA PRÓPRIA PAGINA PARA PEGAR CÓDIGO FONTE DELA
                fetch(document.location.href)
                .then((response) => {
                    if(response.status == 200){
                        response.text().then(pageSource => {

                            pageSource = new DOMParser().parseFromString(pageSource, 'text/html');
                            let article = getArticleGAZ(pageSource);
                            let blocoNoticia = (article != null) ? article.outerHTML : pageSource.outerHTML;

                            let l = setInterval(()=>{
                                if((key != null || key != undefined) && (pageSource != null || pageSource != undefined) && (blocoNoticia != null || blocoNoticia != undefined)){
                                    clearInterval(l);

                                    //FAZ POST PARA CRIAR ARQUIVO JSON COM CONTEUDO DA PÁGINA DE CACHE
                                    axios({
                                        method: 'POST',
                                        url: `${DOMAIN}/API/cachemock/saveArticleContent`,
                                        timeout: 30000,
                                        data: JSON.stringify({
                                            key: btoa(key.hash),
                                            pageSource: blocoNoticia
                                        }),
                                        headers : {
                                            "Content-Type" : "application/json"
                                        }
                                    }).then((resp)=>{
                                        if(resp.status == 201){
                                            window.location.replace(key.url);
                                        }else{
                                            SwalGotoHome(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: [API FAILED TO CREATE FILE] - </spam>${resp.data}`,
                                                "https://gaz.com.br"
                                            );
                                        }
                                    }).catch((erro)=>{
                                        if(erro.toString().includes('timeout')){
                                            SwalTimeout(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://gaz.com.br"
                                            );
                                        }else{
                                            SwalGotoHome(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://gaz.com.br"
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
                                    "https://gaz.com.br"
                                );
                            }else{
                                if(erro.toString().includes('timeout')){
                                    SwalTimeout(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                        "https://gaz.com.br"
                                    );
                                }else{
                                    SwalGotoHome(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                        "https://gaz.com.br"
                                    );
                                }
                            }
                        });
                    }else if(response.status == 404){
                        SwalGotoHome(
                            'warning',
                            'Atenção',
                            'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>',
                            "https://gaz.com.br"
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
                            "https://gaz.com.br"
                        );
                    }else{
                        SwalGotoHome(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                            "https://gaz.com.br"
                        );
                    }
                });
            }
        },800);
    }
}


function getArticleGAZ(pageSource)
{
    if(pageSource.getElementById("primary") != null && pageSource.getElementById("primary") != undefined) {
        return pageSource.getElementById("primary");
    }
    if(pageSource.querySelector(".site-main") != null && pageSource.querySelector(".site-main") != undefined) {
        return pageSource.querySelector(".site-main");
    }
    return null;
}


function removeUnloadedAdsBlocks()
{
    unloadedsAds = document.querySelectorAll(".ads");
    unloadedsAds.forEach((ads) => {ads.remove();});
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


/* ============================== APP RESPONDE AI ============================== */

function modifyAPPRESPAI()
{
    enableUrlChangeDetect(document.location.href);
    injectMathJax();

    importRequiredCDN();
    verificaAtualizacaoVersao();
    main(window.location.href);

    /**
     * Função aninhada para aguardar carregamento de recursos
     */
    function main(respAiCurrentUrl) {

        if(typeof(axios) != "function" || typeof(Swal) != 'function') {
            setTimeout(() => {
                main(respAiCurrentUrl);
            }, 1000);
            return;
        }

        axios({
            method: "GET",
            url: `${DOMAIN}/API/paywalldom/respondeaiConfigs`,
            timeout: 10000
        }).then((resp)=>{

            mainUnlockFunction();
            checkButtonCreation();
            changeLockedIcons(resp.data);
            removeReactModalOverlay(resp.data);
            enableBodyOverflow(resp.data);


            /**
             * Nested function (funcao aninhada)
             * Funcao principal de desbloqueio de conteudo
             */
            function mainUnlockFunction(){
                setTheoryLinksAction(resp.data);
                enableBodyOverflow(resp.data);
                removeReactModalOverlay(resp.data);
                removeDexterBlock(resp.data);
                removeBlurPage(resp.data);

                if(respAiCurrentUrl.includes('app.respondeai.com.br/aprender') && respAiCurrentUrl.includes('/teoria/')){
                    unlockTeoria(resp.data);
                    incrementaConteudoAPI();
                }
                else if(respAiCurrentUrl.includes('app.respondeai.com.br/aprender') && respAiCurrentUrl.includes('/exercicio/')){
                    unlockFixationExercise(resp.data);
                    incrementaConteudoAPI();
                }
                else if((respAiCurrentUrl.includes('app.respondeai.com.br/aprender') || respAiCurrentUrl.includes('app.respondeai.com.br/praticar')) && respAiCurrentUrl.includes('/exercicio-lista/')){
                    unlockListExercise(resp.data);
                    incrementaConteudoAPI();
                }
                else if(respAiCurrentUrl.includes("/lecture/aulao/")) {
                    unlockVideoLesson(resp.data);
                    incrementaConteudoAPI();
                }
            }

        }).catch((erro) => {
            if(erro.toString().includes('timeout')){
                sweetAlert(
                    'error',
                    'Erro',
                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`,
                );
            }else{
                sweetAlert(
                    'error',
                    'Erro',
                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                );
            }
        });
    }


    function enableUrlChangeDetect(urlBase) {
        let tmpUrl = document.location.href;
        if(urlBase != tmpUrl){
            urlBase = tmpUrl;
            console.log('MUDEI URL');
            main(window.location.href);
        }
    
        setTimeout(() => {
            enableUrlChangeDetect(urlBase);
        },800);
    }
}


function injectMathJax() {
    let payload = "injectMathJax(); function injectMathJax() {if(typeof(MathJax) == 'object') {MathJax.typeset();} setTimeout(() => {injectMathJax();}, 800);}";

    //INJEÇÃO PAYLOAD;
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute('id', 'injectMathJax');

    try{
        script.appendChild(document.createTextNode(payload));
    }catch(e){
        script.text = payload;
    }finally{
        document.head.appendChild(script);
    }
}


function chooseUnlockEndpoint(conteudoDesbloqueio) {
    switch(conteudoDesbloqueio) {
        case "theory": return "/API/respondeai/getTheory";
        case "exercise": return "/API/respondeai/getExercise";
        case "list-exercise": return "/API/respondeai/getListExercise";
        case "video-lesson": return "/API/respondeai/getVideoLesson";
    }
}


function changeLockedIcons(configs)
{
    let svgIcons = document.querySelectorAll(`.${configs.logged_locked_icons}`);
    svgIcons.forEach(icon => {
        icon.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square sc-lgsYow gFYkCv  logged" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path></svg>`
    });

    setTimeout(()=>{
        changeLockedIcons(configs);
    }, 800);
}


function unlockVideoLesson(configs) {
    sweetAlert(
        'info',
        'Aguarde um momento...',
        'Estamos removendo os bloqueios para você...<br><br>'
    );

    let flag = false;

    importGlideDependencies();
    importVideoTipsLabelCssRules();
    main(configs);

    function main(configs) {
        try{
            (configs.data_cy.video_lesson_div_content).forEach((video_lesson_class) => {
                if(verificaElemento(`.${video_lesson_class}`)) {
                    flag = true;
                    findCurrentVideoDiv(video_lesson_class, configs);
                    return;
                }
            });
    
            if(!flag) {
                setTimeout(() => {
                    main(configs);
                },800);
            }
        }catch(erro) {
            sweetAlert(
                'error',
                'Erro',
                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
            );
        }
    }
}


function findCurrentVideoDiv(video_lesson_class, configs) {
    try{
        if(verificaElemento(`.${video_lesson_class}`)) {
            let video_lesson_div = document.querySelector(`.${video_lesson_class}`);
            getVideoLesson(configs, video_lesson_div);
            return;
        }
    
        setTimeout(() => {
            findCurrentVideoDiv(video_lesson_class, configs);
        },800);
    }catch(erro){
        sweetAlert(
            'error',
            'Erro',
            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
        );
    }
}


function getVideoLesson(configs, video_lesson_div) {

    let token = getCookie('user_jwt');
    let lessonId = getTopicId();

    if(typeof(axios) == 'undefined' || token == null || lessonId == null) {
        setTimeout(() => {
            getVideoLesson(configs, video_lesson_div);
            return;
        }, 800);
    }

    const ENDPOINT = chooseUnlockEndpoint("video-lesson");

    axios({
        method: "POST",
        url: `${DOMAIN}${ENDPOINT}`,
        timeout: 30000,
        data: JSON.stringify({
            lesson_id: lessonId
        }),
        headers: {
            "Content-Type" : "application/json",
            "authorization": token
        }
    }).then((resp) => {
        if(resp.data.status == 'failed') throw new Error(resp.data.message);
        mountNewVideoLessonContainer(resp.data, video_lesson_div);

    }).catch((erro) => {
        sweetAlert(
            'error',
            'Erro',
            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
        );
    });
}


function mountNewVideoLessonContainer(configs, video_lesson_div) {
    try{
        let htmlText = "";

        configs.forEach((object, index) => {
            let video = object.video;

            if(index == 0) {
                htmlText = `
                    <div class="glide videoLessons">
                        <div class="sc-jstVdI hqFXFv glide__track" data-glide-el="track">
                            <ul class="glide__slides">
                        `;
            }

            htmlText += (video.provider.includes("youtube"))

                ? `
                <li class="glide__slide">
                    <div class="fullscreen">
                        <div class="sc-iLWYPX" style="aspect-ratio: 16/9 !important; z-index: 1 !important; position: relative !important;">
                            <div class="sc-kKBQAD" style="display: block !important; height: 100% !important;">
                                <div id="playerId_${index}" style="width: 100%; height: 100%;">
                                    <div style="width: 100%; height: 100%;">
                                        <iframe frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="${video.name}" width="100%" height="100%" src="https://www.youtube.com/embed/${video.providerId}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-8="true" data-gtm-yt-inspected-35634434_241="true">
                                        </iframe>
                                    </div>
                                </div>
                            </div> 
                            ${mountVideoDescriptionData(video, object.coveredTopics, index+1)}
                        </div>
                    </div>
                </li>`

                : `
                <li class="glide__slide">
                    <div class="fullscreen">
                        <div class="sc-iLWYPX" style="aspect-ratio: 16/9 !important; z-index: 1 !important; position: relative !important;">
                            <div style="padding:56.25% 0 0 0;position:relative;">
                                <iframe src="https://player.vimeo.com/video/${video.providerId}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                            </div> 
                            ${mountVideoDescriptionData(video, object.coveredTopics, index+1)}
                        </div>
                    </div>
                </li>`;

            if(index == (configs.length - 1)) {
                htmlText += `</ul></div>${mountVideoControls()}</div>`;
            }
        });

        video_lesson_div.innerHTML = htmlText;
        initGlideLibrary();
        Swal.close();
    }catch(erro){
        sweetAlert(
            'error',
            'Erro',
            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
        );
    }
}


function mountVideoControls() {
    return `
        <div class="glide__arrows" data-glide-el="controls">
            <button id="btnGlidePrev" class="glide__arrow glide__arrow--left" data-glide-dir="<" style="background-color:rgb(0 0 0 / 50%) !important; border: 3px solid rgb(162 255 0 / 91%) !important;">
                <span class="fas fa-arrow-left">&#10094;</span>
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">" style="background-color:rgb(0 0 0 / 50%) !important; border: 3px solid rgb(162 255 0 / 91%) !important;">
                <span class="fas fa-arrow-right">&#10095;</span>
            </button>
        </div>`
}


function mountVideoDescriptionData(videoConfig, coveredTopics, indexConfig) {
    try{
        let topicsBlock = "";

        coveredTopics.forEach((topic)=> {
            topicsBlock += `<li class="sc-eQubti hpGpQ">
                <span class="sc-iTLKXn guGmfJ">
                    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="sc-lmgjyN iRXdY" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path>
                        <path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path>
                        <path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"></path>
                        <path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"></path>
                    </svg>
                    <span>${topic.name}</span>
                </span>
                <div class="sc-fXUGxx hNOlID">
                    <a class="sc-iTlrqL hoTtMg" href="/aprender/topico/${topic.subjectId}/${topic.id}/teoria/${topic.theoryId}">Aprender +</a>
                    <a class="sc-iTlrqL kSVlCQ" href="/aprender/topico/${topic.subjectId}/${topic.id}/exercicio/${topic.firstExerciseId}">Praticar +</a>
                </div>
            </li>`
        });

        return `<div class="sc-lmwPYW ctgldi">
            ${mountVideoTipsLabel()}
            <div class="sc-htnqrb bgWLgJ">
                <div class="sc-bRyDhe iBIOYD">
                    <div class="sc-hQrNYi fikJbk">${indexConfig}</div>
                    <div class="sc-hHRaiR ihPhZF">${videoConfig.name}</div>
                </div>
            </div>
            <div class="sc-muxYx hbjZIk">
                <div class="sc-fWMzbn eIkLbq">Tópicos abordados no módulo ${indexConfig}</div>
                <ul class="sc-isojaI etwdzZ">
                    ${topicsBlock}
                </ul>
            </div>
        </div>`;
    }catch(erro){
        sweetAlert(
            'error',
            'Erro',
            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
        );
    }
}


function mountVideoTipsLabel() {
    return `
    <p id="dicaTutorial" style="text-align: center !important; margin: 25px 0px !important;">
        <em style="color: #000 !important">
            <strong>Dica: </strong>
            <span>Toque e arraste horizontalmente para mudar de video aula</span>
        </em>
    </p>`;
}


function importVideoTipsLabelCssRules() {
    setTimeout(() => {
        if(!verificaElemento('head')){
            importGlideDependencies();
            return;
        }
    }, 800);

    var videoTipsLabelRules = document.createElement('style');
    videoTipsLabelRules.setAttribute('id', 'videoTipsLabelRules');
    document.head.appendChild(videoTipsLabelRules);
    videoTipsLabelRules.innerText = '#dicaTutorial{display: block;} @media screen and (max-width: 759px) {.glide__arrows{display: none;}#dicaTutorial{display: block;}}';
}


function initGlideLibrary() {
    try{
        let configs = {
            type: "carousel",
            perView: 1,
            focusAt: "center"
        };
    
        var glide = new Glide(".videoLessons", configs);
        glide.on(["mount.after", "run"], () => {});
        glide.mount();
    }catch(erro){
        sweetAlert(
            'error',
            'Erro',
            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
        );
    }
}


function importGlideDependencies() {
    setTimeout(() => {
        if(!verificaElemento('head')){
            importGlideDependencies();
            return;
        }
    }, 800);

    var GlideCoreCss = document.createElement('link');
    GlideCoreCss.setAttribute('id','GlideCoreCss');
    GlideCoreCss.setAttribute('rel','stylesheet');
    GlideCoreCss.setAttribute('type','text/css');
    GlideCoreCss.setAttribute('href',`${DOMAIN}/API/getCDN?file=glidecorecss`);
    document.head.appendChild(GlideCoreCss);

    var GlideThemeCss = document.createElement('link');
    GlideThemeCss.setAttribute('id','GlideThemeCss');
    GlideThemeCss.setAttribute('rel','stylesheet');
    GlideThemeCss.setAttribute('type','text/css');
    GlideThemeCss.setAttribute('href',`${DOMAIN}/API/getCDN?file=glidethemecss`);
    document.head.appendChild(GlideThemeCss);
}


function unlockListExercise(configs)
{
    removeFormatToogle(configs);
    main(configs);

    function main(configs) {
        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            for(let iConfig=0; iConfig<configs.data_cy.exercise_answer_button.length; iConfig++) {
                if(divs[i].classList.contains(`${configs.data_cy.exercise_answer_button[iConfig]}`) && !verificaElemento("#tituloResposta")) {

                    let answerDiv = divs[i];
                    let token = getCookie('user_jwt');
                    let listExerciseId = getTopicId();
                    answerDiv.innerHTML = setLoadingPageAnimation();
                    getListExercise(token, listExerciseId, answerDiv);
                    return;
                }
            }
        }
        setTimeout(() => {
            main(configs);
        }, 800);
    }


    function getListExercise(token, listExerciseId, answerDiv) {
        if(typeof(axios) == 'undefined' || token == null || listExerciseId == null) {
            setTimeout(() => {
                getListExercise(token, listExerciseId, answerDiv);
                return;
            }, 800);
        }

        const ENDPOINT = chooseUnlockEndpoint("list-exercise");

        axios({
            method: "POST",
            url: `${DOMAIN}${ENDPOINT}`,
            timeout: 30000,
            data: JSON.stringify({
                itemId: listExerciseId
            }),
            headers: {
                "Content-Type" : "application/json",
                "authorization": token
            }
        }).then((resp) => {
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
                    answerDiv.innerHTML = `<h1 id="tituloResposta" style="color: rgb(54, 170, 173); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Resposta</h1>`;
                }
                answerDiv.innerHTML += resp.data.lightSolution[i];
            }


            //Renderiza solução na tela - Videos
            if(resp.data.hasOwnProperty('videos')){
                const SINGLE_VIDEO_SIZE = 450;
                const SPACE_BETWEEN_VIDEOS = 50;

                importVimeoPlayerJS();

                for(let j=0; j<resp.data.videos.length; j++){

                    if(j==0){
                        answerDiv.innerHTML += `<h1 style="color: rgb(54, 170, 173); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Vídeo Tutorial</h1>`;
                    }

                    answerDiv.innerHTML += (resp.data.videos[j].provider.includes("youtube"))

                        ? `<div data-cy="video-iframe" allowfullscreen="" frameborder="0" style="width: 100%; height: ${100/resp.data.videos.length}%;">
                            <div style="width: 100%; height: ${SINGLE_VIDEO_SIZE}px;">
                                <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/${resp.data.videos[j].providerId}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"></iframe>
                            </div>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`

                        :`<div style="padding:56.25% 0 0 0;position:relative;">
                            <iframe src="https://player.vimeo.com/video/${resp.data.videos[j].providerId}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`;
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
}


function unlockFixationExercise(configs)
{
    main(configs);
    removeFormatFromToogle(configs);


    function main(configs) {

        let divs = document.querySelectorAll('div');
        let flag = false;

        //remove answer button if exists
        divs.forEach((div) => {
            (configs.data_cy.exercise_answer_button).forEach((answer_button_class) => {
                if(div.classList.contains(`${answer_button_class}`)){
                    div.remove();
                    return;
                }
            });
        });

        divs.forEach((div) => {
            (configs.data_cy.exercise_div_content).forEach((exercise_div_content_class) => {
                if(
                    (div.classList.contains(`${exercise_div_content_class}`)) &&
                    (!verificaElemento("#tituloResposta"))
                ){
                    flag = true;
                    div.innerHTML += `<div id="answerDiv"></div>`;
                    let answerDiv = document.getElementById("answerDiv");

                    let token = getCookie('user_jwt');
                    let exerciseId = getTopicId();

                    answerDiv.innerHTML += setLoadingPageAnimation();
                    getFixationExercise(configs, token, exerciseId, answerDiv);
                    return;
                }
            });
        });

        if(!flag) {
            setTimeout(() => {
                main(configs);
            },800);
        }
    }


    //Remove format toogle
    function removeFormatFromToogle(configs) {
        let flag = false;

        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            for(let iConfig=0; iConfig<configs.data_cy.format_toggle.length; iConfig++){
                if(divs[i].classList.contains(`${configs.data_cy.format_toggle[iConfig]}`)){
                    flag = true;
                    divs[i].style.display = "none";
                    break;
                }
            }
        }
        if(!flag) {
            setTimeout(() => {
                removeFormatFromToogle(configs);
            },800);
        }
    }


    function getFixationExercise(configs, token, exerciseId, answerDiv) {

        if(typeof(axios) != 'function' || token == null || exerciseId == null){
            setTimeout(() => {
                getFixationExercise(configs, token, exerciseId, answerDiv);
                return;
            },800);
        }

        const ENDPOINT = chooseUnlockEndpoint("exercise");

        axios({
            method: "POST",
            url: `${DOMAIN}${ENDPOINT}`,
            timeout: 30000,
            data: JSON.stringify({
                itemId: exerciseId
            }),
            headers: {
                "Content-Type" : "application/json",
                "authorization": token
            }
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
                    answerDiv.innerHTML = `<h1 id="tituloResposta" style="color: rgb(247, 172, 60); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Resposta</h1>`;
                }
                answerDiv.innerHTML += resp.data.lightSolution[i];
            }

            //Remove barra de tipo de conteudo
            removeFormatToogle(configs);


            //Renderiza solução na tela - Videos
            if(resp.data.hasOwnProperty('videos')){
                const SINGLE_VIDEO_SIZE = 450;
                const SPACE_BETWEEN_VIDEOS = 50;

                importVimeoPlayerJS();

                for(let j=0; j<resp.data.videos.length; j++){

                    if(j==0){
                        answerDiv.innerHTML += `<h1 style="color: rgb(247, 172, 60); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Vídeo Tutorial</h1>`;
                    }

                    answerDiv.innerHTML += (resp.data.videos[j].provider.includes("youtube"))

                        ? `<div data-cy="video-iframe" allowfullscreen="" frameborder="0" style="width: 100%; height: ${100/resp.data.videos.length}%;">
                            <div style="width: 100%; height: ${SINGLE_VIDEO_SIZE}px;">
                                <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/${resp.data.videos[j].providerId}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"></iframe>
                            </div>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`

                        :`<div style="padding:56.25% 0 0 0;position:relative;">
                            <iframe src="https://player.vimeo.com/video/${resp.data.videos[j].providerId}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`;
                }
            }
        }).catch((erro)=>{
            sweetAlert(
                'error',
                'Erro',
                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
            );
            return;
        });
    }
}


function unlockTeoria(configs)
{
    main(configs);


    function main(configs) {
        let flag = false;
        let divsSteps = document.querySelectorAll('div');
        for(let j=0; j<divsSteps.length; j++){
            for(let iConfig2=0; iConfig2<configs.data_cy.theory_text_content.length; iConfig2++){
                if(divsSteps[j].classList.contains(`${configs.data_cy.theory_text_content[iConfig2]}`)){

                    let randomId = Math.round(Math.random()*100000000);
                    let divStepsContainer = divsSteps[j].children[0];
                    divStepsContainer.setAttribute("id", randomId);
                    flag = true;

                    try{
                        if(
                            divStepsContainer.children[0].isEqualNode(divStepsContainer.children[1]) &&
                            divStepsContainer.children[1].isEqualNode(divStepsContainer.children[2]) &&
                            divStepsContainer.children[2].isEqualNode(divStepsContainer.children[3]) &&
                            divStepsContainer.children[3].isEqualNode(divStepsContainer.children[4]) &&
                            divStepsContainer.children[4].isEqualNode(divStepsContainer.children[5])
                        ){
                            // REMOVE FORMAT TOOGLE CASO BLOQUEADO
                            removeFormatToogle(configs);

                            //SETTA MSG DE LOADING
                            divStepsContainer.innerHTML = setLoadingPageAnimation();

                            //CHAMA API PARA DESBLOQUEAR CONTEUDO
                            callAPITheoryUnlocked(configs, randomId);
                            break;
                        }
                    }catch(erro){

                    }
                    break;
                }
            }
        }
        if(!flag) {
            setTimeout(() => {
                main(configs);
            },800);
        }
    }
}


//Remove format toogle
function removeFormatToogle(configs) {
    let divs = document.querySelectorAll('div');
    for(let i=0; i<divs.length; i++){
        for(let iConfig=0; iConfig<configs.data_cy.format_toggle.length; iConfig++) {
            if(divs[i].classList.contains(configs.data_cy.format_toggle[iConfig])) {
                divs[i].style.display = "none";
                return;
            }
        }
    }
    setTimeout(() => {
        removeFormatToogle(configs);
    }, 800);
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
    setTimeout(() => {
        if(!verificaElemento('head')){
            importRequiredCDN();
            return;
        }
    }, 800);

    if(!customElements) {
        let lottieJS = document.createElement('script');
        lottieJS.setAttribute('src','https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js');
        document.querySelector('head').appendChild(lottieJS);
    }
}


/**
 * Faz chamada para API e popula página de acordo com o parametro typeContent
 * @param {*} typeContent
 */
function callAPITheoryUnlocked(configs, randomId)
{
    main(configs, randomId);


    function main(configs, randomId) {
        let token = getCookie('user_jwt');
        let topicId = getTopicId();

        if(typeof(axios) != 'function' || token == null || topicId == null){
            setTimeout(() => {
                main(configs, randomId);
                return;
            },800);
        }

        const ENDPOINT = chooseUnlockEndpoint("theory");

        axios({
            method: "POST",
            url: `${DOMAIN}${ENDPOINT}`,
            timeout: 30000,
            data: JSON.stringify({
                itemId: topicId
            }),
            headers: {
                "Content-Type" : "application/json",
                "authorization": token
            }
        }).then((resp)=>{

            if(resp.data.status == 'failed')
                throw new Error(resp.data.message);

            setTheoryUnlocked(resp, randomId);
                

        }).catch((erro)=>{
            sweetAlert(
                'error',
                'Erro',
                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
            );
            if(verificaElemento("#msgLottieDesbloqueio")){
                document.getElementById("msgLottieDesbloqueio").innerHTML = `
                    <p>Ops, tivemos um pequeno problema!<br>Por favor, recarregue a página ou tente novamente mais tarde.</p>
                    <p><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}</p>`
            }
        })
    }


    function setTheoryUnlocked(resp, randomId) {
        console.log("setTextTheory", randomId);
        let div = document.getElementById(`${randomId}`);
        if(div) {
            div.innerHTML = `
                <div class="sc-jTzLTM fFEUnb rendered">
                    <div>${resp.data.lightBody}</div>
                </div>${setVideoTheoryUnlocked(resp)}`;
            return;
        }
    }


    function setVideoTheoryUnlocked(resp) {
        const SINGLE_VIDEO_SIZE = 450;
        const SPACE_BETWEEN_VIDEOS = 50;
        let htmlText = ``;
        
        if(resp.data.hasOwnProperty('videos')) {
            importVimeoPlayerJS();


            //SETA TAMANHO DA PAGINA
            let height = (SINGLE_VIDEO_SIZE*resp.data.videos.length) + (SPACE_BETWEEN_VIDEOS*resp.data.videos.length);
            htmlText += `<div style="height: ${height}px !important;">`

            //SETA LABEL TITULO VIDEO AULA
            htmlText += `<h1 style="color: #00b8d6; font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Vídeo Aula</h1>`;

            //ITERA SOBRE OBJETO DE RESPOSTA PARA MONTAR PAGINA
            (resp.data.videos).forEach((video) => {

                htmlText += (video.provider.includes("youtube"))

                    ?  `<div data-cy="video-iframe" allowfullscreen="" frameborder="0" style="width: 100%; height: ${100/resp.data.videos.length}%;">
                            <div style="width: 100%; height: 100%;">
                                <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/${video.providerId}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"></iframe>
                            </div>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`

                    :  `<div style="padding:56.25% 0 0 0;position:relative;">
                          <iframe src="https://player.vimeo.com/video/${video.providerId}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`;
            });
            htmlText += `</div>`
        }else{
            throw new Error("Falha ao obter objeto \"videos\"");
        }

        return htmlText;
    }
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
function setTheoryLinksAction(configs)
{
    let flag = false;

    let divs = document.querySelectorAll('div');
    for(let i=0; i<divs.length; i++) {
        for(let iConfig=0; iConfig<configs.data_cy.side_menu.length; iConfig++) {
            if(
                (divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == configs.data_cy.side_menu[iConfig]) ||
                divs[i].classList.contains(`${configs.data_cy.side_menu[iConfig]}`)
            ){
                setTimeout(() => {
                    let links = document.querySelectorAll("a");
                    for(let i=0; i<links.length; i++){
                        if(
                            links[i].getAttribute("href").includes("/aprender") &&
                            links[i].getAttribute("href").includes("/topico") &&
                            links[i].getAttribute("href").includes("/teoria") &&
                            links[i].getAttribute("href").includes("/exercicio/")
                        ){
                            flag = true;
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
    }

    if(!flag) {
        setTimeout(() => {
            setTheoryLinksAction(configs);
        }, 800);
    }
}

/**
 * Remove blur da pagina
 */
function removeBlurPage(configs)
{
    configs.blur_class.forEach((current_class) => {
        let blurElements = document.querySelectorAll(`.${current_class}`);
        blurElements.forEach((blurElement) => {
            blurElement.classList.remove(current_class);
            blurElement.style.filter = "none";
        })
    });

    setTimeout(() => {
        removeBlurPage(configs);
    }, 800);
}


/**
 * Habilita scroll da pagina
 */
function enableBodyOverflow(configs)
{
    for(let i=0; i<configs.logged_enable_scroll_page.length; i++){
        if(verificaElemento(`.${configs.logged_enable_scroll_page[i]}`)){
            document.body.style.overflow = "auto"
            return;
        }
    }

    setTimeout(() => {
        enableBodyOverflow(configs);
    }, 800);
}


function removeReactModalOverlay(configs)
{
    (configs.logged_react_modal).forEach((className) => {
        let reactModalOverlay = document.querySelectorAll(`.${className}`);
        if(reactModalOverlay.length > 0){
            reactModalOverlay.forEach((element) => {
                element.remove();
            });
            return;
        }
    });

    setTimeout(() => {
        removeReactModalOverlay(configs);
    },800);
}

/**
 * Remove bloqueio do dexter
 */
function removeDexterBlock(configs)
{
    for(let iConfig=0; iConfig<configs.logged_dexter_block.length; iConfig++){
        if(verificaElemento(`.${configs.logged_dexter_block[iConfig]}`)){
            document.querySelector(`.${configs.logged_dexter_block[iConfig]}`).remove();
            return;
        }
    }

    setTimeout(() => {
        removeDexterBlock(configs);
    }, 800);
}


/**
 * IMPORT VIMEO PLAYER JS
 */
function importVimeoPlayerJS() {
    let vimeoJS = document.createElement("script");
    vimeoJS.type = "text/javascript";
    vimeoJS.setAttribute('id', 'vimeoJS');
    vimeoJS.setAttribute('src', 'https://player.vimeo.com/api/player.js');
    document.head.appendChild(vimeoJS);
}


/* ============================== JORNAL O POVO ============================== */

function modifyOPOVO()
{
    //bloqueado por negação de requisição!
    //Olhar em js/background/denyRequests.js
    verificaAtualizacaoVersao();

    if(window.location.href == "https://mais.opovo.com.br/"){
        window.location.assign("https://mais.opovo.com.br/home");
    }
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
            }
        },800);
    }
}



/* ============================== O TEMPO MINAS GERAIS ============================== */

function modifyOTEMPO()
{
    let payload = `
    
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
    
                        if(Swal.isVisible() == false){
                            Swal.fire({
                                icon: 'info',
                                title: 'Aguarde um momento...',
                                html: 'Estamos removendo os bloqueios para você...<br><br>',
                                allowEscapeKey: false,
                                allowOutsideClick: false,
                                showConfirmButton: false,
                                customClass: {
                                    popup: 'snackZ-index',
                                    container: 'snackZ-index'
                                }
                            });
                        }
                    }
                },800);
    
                //TENTA REQUEST COM FETCH PARA PEGAR TOKEN
                fetch('${DOMAIN}/API/jornal_otempo/getRestServiceTokenEncoded')
                .then(response => response.json())
                .then(resp => {
                    const TOKEN_ENCODED = resp.OTEMPO_REST_SERVICE_TOKEN_ENCODED;
                    
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
                                    
                                    fetch(window.location.origin + '/rest-services/emotion-service/noticia?guid=' + GUID + '&token=' + TOKEN_DECODED, {
                                        'headers': {
                                            'accept': 'application/json'
                                        }
                                    }).then(response => response.json())
                                        .then(resp => {
                                            for(let i=0; i<resp.length; i++){    
                                            //GET CONTENT
                                            if(resp[i].hasOwnProperty('content')){
                                                if(resp[i].content != "" && resp[i].content != undefined){
                                                    conteudoMateria += resp[i].content;
                                                }
                                            }
    
                                            //GET NOTAS
                                            if(resp[i].hasOwnProperty('notas')){
                                                for(let n=0; n<resp[i].notas.length; n++){
    
                                                    //GET TITLE NOTA[n]
                                                    if(resp[i].hasOwnProperty('title')){
                                                        conteudoMateria += '<h4 style="font-size: 18px !important; font-weight: 700 !important;">' + resp[i].notas[n].title + '</h4>';
                                                    }
    
                                                    //GET CONTENT NOTA[n]
                                                    if(resp[i].notas[n].hasOwnProperty('content')){
                                                        conteudoMateria += resp[i].notas[n].content;
                                                    }
                                                }
                                            }
                                        }
                                        
                                        let waitConteudoMateria = setInterval(()=>{
                                            if(conteudoMateria != null){
                                                clearInterval(waitConteudoMateria);
                                                try{
                                                    document.querySelector('.artigo-conteudo-article').innerHTML += conteudoMateria;
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Sucesso',
                                                        html: 'Ótimo! Conteúdo desbloqueado!',
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
                                                    window.stop();
    
                                                    ${incrementaConteudoAPI()};
                                                    ${verificaAtualizacaoVersao()};
                                                    removePaywallBanner();
                                                    restoreImgs();
                                                }catch(erro){
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Erro',
                                                        html: 'Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style="font-weight: bold !important;">Código do erro: </spam>' + erro.toString(),
                                                        allowEscapeKey: false,
                                                        allowOutsideClick: false,
                                                        showConfirmButton: false,
                                                        customClass: {
                                                            popup: 'snackZ-index',
                                                            container: 'snackZ-index'
                                                        }
                                                    });
                                                }
                                            }
                                        },800);
                                    }).catch((erro)=>{
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Erro',
                                            html: 'Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style="font-weight: bold !important;">Código do erro: </spam>[O Tempo Request] ' + erro.toString(),
                                            allowEscapeKey: false,
                                            allowOutsideClick: false,
                                            showConfirmButton: false,
                                            customClass: {
                                                popup: 'snackZ-index',
                                                container: 'snackZ-index'
                                            }
                                        });
                                    });
                                }
                            },800);
                        }
                    },800);
                }).catch((erro)=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        html: 'Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style="font-weight: bold !important;">Código do erro: </spam>[Internal API Request] ' + erro.toString(),
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        showConfirmButton: false,
                        customClass: {
                            popup: 'snackZ-index',
                            container: 'snackZ-index'
                        }
                    });
                });
            }
        },800);
        
    
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
        
        
        function verificaElemento(elemento)
        {
            return (document.querySelector(elemento)!=null) ? true : false;
        }
    }`;


    //IMPORT SWEET ALERT JS
    let sweetAlert = document.createElement("script");
    sweetAlert.type = "text/javascript";
    sweetAlert.setAttribute('id', 'sweetAlertJS');
    sweetAlert.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@11');
    document.head.appendChild(sweetAlert);

    //INJEÇÃO PAYLOAD;
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute('id', 'scriptJS');

    try{
        script.appendChild(document.createTextNode(payload));
    }catch(e){
        script.text = payload;
    }finally{
        document.head.appendChild(script);
    }
}



/* ============================== DIARIO SANTA MARIA ============================== */

function modifyDIARIOSM()
{
    let payload = `
    
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

    let r = setInterval(()=>{
        if(document.querySelector('.row-bloqueio') != null && typeof($) == 'function' && findPaywallText()){
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
                ${incrementaConteudoAPI()};
                ${verificaAtualizacaoVersao()};
            }catch(erro){
                if(typeof(Swal) == 'function'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        html: 'Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style="font-weight: bold !important;">Código do erro: </spam>[Internal API Request] ' + erro.toString(),
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        showConfirmButton: false,
                        customClass: {
                            popup: 'snackZ-index',
                            container: 'snackZ-index'
                        }
                    });
                }else{
                    alert(erro.toString());
                }
            }
        }
    },800);`;

    //IMPORT SWEET ALERT JS
    let sweetAlert = document.createElement("script");
    sweetAlert.type = "text/javascript";
    sweetAlert.setAttribute('id', 'sweetAlertJS');
    sweetAlert.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@11');
    document.head.appendChild(sweetAlert);

    //INJEÇÃO PAYLOAD;
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute('id', 'scriptJS');

    try{
        script.appendChild(document.createTextNode(payload));
    }catch(e){
        script.text = payload;
    }finally{
        document.head.appendChild(script);
    }
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
                    if(verificaElemento('.locked-news') && articlesIsRemoved && typeof(axios) == 'function'){
                        clearInterval(y);
        
                        mountSweetAlert(
                            'info',
                            'Aguarde um momento...',
                            'Estamos removendo os bloqueios para você...<br><br>'
                        );

                        //RECUPERA ARQUIVO COM CONTEUDO DESBLOQUEADO
                        axios({
                            method: 'POST',
                            url: `${DOMAIN}/API/cachemock/getArticleContent`,
                            timeout: 30000,
                            data: JSON.stringify({
                                key: btoa(window.location.pathname)
                            }),
                            headers: {
                                "Content-Type" : "application/json"
                            }
                        }).then((resp)=>{
                            console.clear();
                            console.log('SUCESSO GET PAGE CODE');
                            console.log(resp.data);

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
                        }).catch((erro)=>{
                            if(erro.toString().includes('timeout')){
                                SwalTimeout(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style="font-weight: bold !important;">Código do erro: </spam>${erro.toString()}`,
                                    'https://opopular.com.br'
                                );
                            }else if(erro.response.status != 404){
                                sweetAlert(
                                    'error',
                                    'Atenção',
                                    `Ops, tivemos um pequeno problema!<br> Por favor, recarregue a página para tentar novamente.<spam style="font-weight: bold !important;">Código do erro: </spam>${erro.toString()}`
                                );
                            }else{
                                setTimeout(()=>{
                                    window.location.assign(`https://webcache.googleusercontent.com/search?q=cache:${window.location.href}`);
                                },1500);
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
            if(typeof(axios) == 'function'){
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
                                        url: `${DOMAIN}/API/cachemock/saveArticleContent`,
                                        timeout: 30000,
                                        data: JSON.stringify({
                                            key: btoa(key.hash),
                                            pageSource: blocoNoticia
                                        }),
                                        headers: {
                                            "Content-Type" : "application/json"
                                        }
                                    }).then((resp)=>{
                                        if(resp.status == 201){
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


/* ====================== GAUCHA ZH =========================== */

function modifyGZH()
{
    //bloqueado por negação de requisição!
    //Olhar em js/background/denyRequests.js

    removeHiddenClass();
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


function removeHiddenClass() {
    setInterval(() => {
        let hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((element) => {
            element.classList.remove("hidden");
        });

        let paywallTemplate = document.getElementById("paywallTemplate");
        if(paywallTemplate) paywallTemplate.remove();

    },800);
}



/* ====================== VALOR ECONOMICO V2 ===================== */

function modifyVLRECON()
{
    axios({
        method: "GET",
        url: `${DOMAIN}/API/paywalldom/valoreconomicoConfigs`,
        timeout: 10000
    }).then((responseConfigs)=>{
        if(!responseConfigs.data.enabledCacheMock) return;

        let intervalRequest = setInterval(()=>{
            if(typeof(axios) == 'function'){
                clearInterval(intervalRequest);

                if(window.location.hostname == "valor.globo.com"){
                    let rotina = setInterval(()=>{
                        if(elementExistInList(responseConfigs.data.paywallNames)){
                            clearInterval(rotina);
            
                            mountSweetAlert(
                                'info',
                                'Aguarde um momento...',
                                'Estamos removendo os bloqueios para você...<br><br>'
                            );
            
                            //RECUPERA ARQUIVO COM CONTEUDO DESBLOQUEADO
                            axios({
                                method: 'POST',
                                url: `${DOMAIN}/API/cachemock/getArticleContent`,
                                timeout: 30000,
                                data: JSON.stringify({
                                    key: btoa(window.location.pathname)
                                }),
                                headers: {
                                    "Content-Type" : "application/json"
                                }
                            }).then((resp)=>{
                                console.clear();
                                console.log('SUCESSO GET PAGE CODE');
                                console.log(resp);
            
                                let blocoNoticia = resp.data.content;
                                let blocoOriginal = getArticleValorEconomico(document, responseConfigs.data.containerContent);
            
                                let u = setInterval(()=>{
                                    if(blocoNoticia != null && blocoOriginal != null){
                                        clearInterval(u);
            
                                        if(blocoNoticia != null && blocoOriginal != false){
            
                                            blocoOriginal.innerHTML = blocoNoticia;
                                            sweetAlert(
                                                'success',
                                                'Sucesso',
                                                'Ótimo! Conteúdo desbloqueado!'
                                            );
            
                                            setTimeout(()=>{
                                                removeAds(responseConfigs.data.adsModel);
                                                corrigeImgsCache(responseConfigs.data.skeletonImage);
                                            },3000);
            
                                            //VERIFICA E REMOVE SOFT PAYWALLS
                                            let f = setInterval(()=>{
                                                if(elementExistInList(responseConfigs.data.paywallNames)){
                                                    clearInterval(f);
                                                    removeBlockCelularVLRECON(responseConfigs.data.phonePaywallName);
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
            
                                if(resp.data.hasOwnProperty("content")){
                                    
                                }
                            }).catch((erro)=>{
                                if(erro.toString().includes('timeout')){
                                    SwalTimeout(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`,
                                        'https://valor.globo.com'
                                    );
                                }else if(erro.response.status != 404){
                                    sweetAlert(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                                    );
                                }else{
                                    setTimeout(()=>{
                                        window.location.assign(`https://webcache.googleusercontent.com/search?q=cache:${window.location.href}`);
                                    },1500);
                                }
                            });
                        }
                    },800)
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
                        if(typeof(axios) == 'function'){
                            clearInterval(waitAxios);
            
                            let key = genHashKey();
            
                            //FAZ GET PARA PRÓPRIA PAGINA PARA PEGAR CÓDIGO FONTE DELA
                            fetch(document.location.href)
                            .then((response) => {
                                if(response.status == 200){
                                    response.text().then(pageSource => {
            
                                        pageSource = new DOMParser().parseFromString(pageSource, 'text/html');
                                        let article = getArticleValorEconomico(pageSource, responseConfigs.data.containerContent);
                                        let blocoNoticia = (article != false) ? article.outerHTML : pageSource.outerHTML;
            
                                        let l = setInterval(()=>{
                                            if((key != null || key != undefined) && (pageSource != null || pageSource != undefined) && (blocoNoticia != null || blocoNoticia != undefined)){
                                                clearInterval(l);
                    
                                                //FAZ POST PARA CRIAR ARQUIVO JSON COM CONTEUDO DA PÁGINA DE CACHE
                                                axios({
                                                    method: 'POST',
                                                    url: `${DOMAIN}/API/cachemock/saveArticleContent`,
                                                    timeout: 30000,
                                                    data: JSON.stringify({
                                                        key: btoa(key.hash),
                                                        pageSource: blocoNoticia
                                                    }),
                                                    headers : {
                                                        "Content-Type" : "application/json"
                                                    }
                                                }).then((resp)=>{
                                                    if(resp.status == 201){
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
        },800); 
    }).catch((erro)=>{
        if(erro.toString().includes('timeout')){
            sweetAlert(
                'error',
                'Erro',
                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`,
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

    if(uri.includes('valor.globo.com')){
        return {hash: `/${uri.split('valor.globo.com/')[1]}`, url: uri};
    }
    if(uri.includes('opopular.com.br')){
        return {hash: `/${uri.split('opopular.com.br/')[1]}`, url: uri};
    }
    if(uri.includes('gaz.com.br')){
        return {hash: `/${uri.split('gaz.com.br/')[1]}`, url: uri};
    }
}


function mountSweetAlert(icon, title, msg)
{
    //MONTA SWEET ALERT DE DESBLOQUEIO
    let s = setInterval(()=>{
        if(typeof(Swal) == 'function'){
            clearInterval(s);
            console.log('ACHEI SWALL');
            if(Swal.isVisible() == false){
                sweetAlert(icon, title, msg);
            }
        }
    },800);
}


function corrigeImgsCache(skeletonImageConfig)
{
    let divs = document.querySelectorAll('div');

    for(let i=0; i<divs.length; i++){
        if(divs[i].classList.contains(`${skeletonImageConfig}`)){
            divs[i].classList.remove(`${skeletonImageConfig}`);
            divs[i].style.cssText += 'padding-top: 0 !important;';
        }
    }
}


function removeBlockCelularVLRECON(phonePaywall)
{

    try{
        let block = document.querySelector(`.${phonePaywall}`);

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


function getArticleValorEconomico(scope, containerContentConfig)
{
    let protectedArticle = scope.querySelector(`.${containerContentConfig}`);
    return (protectedArticle != null && protectedArticle != undefined) 
        ? protectedArticle 
        : false;
}


function removeAds(adsConfig)
{
    let divs = document.querySelectorAll('div');

    for(let i=0; i<divs.length; i++){
        if(divs[i].hasAttribute(`${adsConfig.adsClassName}`)){
            if(divs[i].getAttribute(`${adsConfig.adsClassName}`).includes(`${adsConfig.adsKeyword}`)){
                divs[i].remove();
            }
        }
    }
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

        try{
            let unlockedContent = "";
            (__NEXT_DATA__.props.pageProps.postOrSubcategoryProps.postData).forEach((data)=>{
                unlockedContent += (data.hasOwnProperty("content")) ? data.content : "";
            });
            document.querySelector(".news-content-container").innerHTML = unlockedContent;

            sweetAlert(
                'success',
                'Sucesso',
                'Ótimo! Conteúdo desbloqueado!'
            );
            incrementaConteudoAPI();
        }catch(erro){
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
                        let newsBlock = codigoFonte.querySelector(".news-content-container");

                        let u = setInterval(()=>{
                            if(newsBlock != null && newsBlock != undefined){
                                clearInterval(u);
                                if(newsBlock != ''){
                                    sweetAlert(
                                        'success',
                                        'Sucesso',
                                        'Ótimo! Conteúdo desbloqueado!'
                                    );
                                    document.querySelector(".news-content-container").innerHTML = newsBlock.outerHTML;
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
    try{
        verificaAtualizacaoVersao();
        mainUnlockRESPAI();
    }catch(erro){
        alert(erro.toString());
    }
}


/* =================================== PARA USUARIOS NÃO LOGADOS ======================================== */

/* ======================================== METODO ORIGINAL ======================================== */

function mainUnlockRESPAI()
{
    let id = window.setInterval(function() {}, 0);
    while (id--) {
        window.clearInterval(id);
    }

    axios({
        method: "GET",
        url: `${DOMAIN}/API/paywalldom/respondeaiConfigs`,
        timeout: 10000
    }).then((resp)=>{

        //LOOP Para remover bloqueios caso haja atualização dos iframes
        setInterval(()=>{
            removeBloqueioExercicioLivro(resp.data);
            removeBlur(resp.data);
            removeAllBtnShowSolucao(resp.data);
            removeBloqueioTeoria(resp.data);
            removeBloqueioConteudoExclusivo(resp.data);
            expandContent(resp.data);
            removeExpandButtons();
            removeShowCompleteSolutionButtons();        
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
        
    });
}


function expandContent(configs)
{
    let sections = document.querySelectorAll('section');

    for(let i=0; i<sections.length; i++){
        if(sections[i].offsetHeight == configs.paywall_height_size){
            sections[i].style.height = 'unset';
        }
    }
}


function removeExpandButtons()
{
    let btn = document.querySelectorAll('button');

    for(let i=0; i<btn.length; i++){
        if((btn[i].textContent).includes('Expandir')){
            btn[i].parentElement.remove();
        }
    }
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


/* ============================ FIX BUG EXERCICIOS RESOLVIDOS DOS LIVROS ============================ */
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
            incrementaConteudoAPI();
            createButtonResposta();
            saveDataForDashboard(8);
            verificaAtualizacaoVersao();
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
                z-index: 1050;
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

            window.open(`${DOMAIN}/solvedBookExercise?auth=${JWT_TOKEN}&exerciseId=${ID_EXERCICIO}`, '_blank');

            // Swal.fire({
            //     title: 'Resolução Completa',
            //     html: `<iframe src="${DOMAIN}/solvedBookExercise?auth=${JWT_TOKEN}&exerciseId=${ID_EXERCICIO}" style='width: 100%; height: 100% !important; border: none;'></iframe>`,
            //     showCloseButton: true,
            //     allowEscapeKey: false,
            //     allowOutsideClick: false,
            //     showConfirmButton: false,
            //     customClass: {
            //         popup: 'respai',
            //         content: 'contentSolution',
            //         htmlContainer: 'contentSolution',
            //         header: 'headerPopup'
            //     }
            // });
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
                window.open(`${DOMAIN}/#blockDownload`);
            }
        };
}


function verificaAtualizacaoVersao()
{
    if(window.location.href.includes('possoler.tech')) return;

    const URL_API_UPDATE = `https://possoler.tech/API/searchUpdates`;
    let tempoAwait = 5;

    axios({
        method: 'GET',
        url: URL_API_UPDATE,
        timeout: 20000,
    }).then((resposta)=>{
        let updateVersion = resposta.data.currentVersion;
        let msgUpdate = resposta.data.message;
        let tituloBtn = resposta.data.buttonMessage;
        let tempo = resposta.data.time;

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
    const URL_MESSAGES = `https://possoler.tech/API/searchMessages`;

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
    const ENDPOINT_INCREMENTVIEWS = `${DOMAIN}/API/incrementViewsConteudos`;

    if(typeof(axios) == 'function'){
        axios({
            method: 'POST',
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
    const ENDPOINT_DASHBOARD = `${DOMAIN}/API/acessos/insertDadosAccess`;

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
                    }),
                    headers : {
                        "Content-Type" : "application/json"
                    }
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


function elementExistInList(elementList)
{
    for(let i=0; i<elementList.length; i++) {
        if(document.querySelector(`.${elementList[i]}`) != null){
            return true;
        }
    }
    return false;
}


function verificaElemento(elemento)
{
    return (document.querySelector(elemento)!=null) ? true : false;
}