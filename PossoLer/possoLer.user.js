// ==UserScript==
// @name         Posso Ler?
// @namespace    URL
// @version      1.2.3
// @description  Tenha acesso a notícias ilimitadas e conteúdos exclusivos de forma gratuita e segura
// @author       Thomaz Ferreira
// @supportURL   https://possoler.tech/
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
// @match        *://gauchazh.clicrbs.com.br/*
// @match        *://especiais.zh.clicrbs.com.br/*
// @match        *://*.jornaldocomercio.com/*
// @match        *://*.economist.com/*
// @match        *://diariosm.com.br/*
// @match        *://*.otempo.com.br/*
// @match        *://revistaglamour.globo.com/*
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
// @require      https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js
// @require      https://possoler.tech/CDN/snackbar.js
// @grant        GM_webRequest
// @webRequest   [{"selector":"https://www.rbsonline.com.br/cdn/scripts/paywall.min.js*","action":"cancel"}, {"selector":"https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*","action":"cancel"}, {"selector":"https://api.clicrbs.com.br/paywall-api/*","action":"cancel"}, {"selector": "*://*.jornaldocomercio.com/src/inove/paywall.php", "action": "cancel"}, {"selector": "*://cdn.tinypass.com/api/tinypass.min.js*", "action": "cancel"}, {"selector": "*://super.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://quatrorodas.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://veja.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://guiadoestudante.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector":"*://blockv4.fivewall.com.br/paywall.js*","action":"cancel"}, {"selector":"*://acesso.estadao.com.br/paywall*","action":"cancel"}, {"selector":"*://paywall.folha.uol.com.br/*","action":"cancel"}, {"selector":"*://prisa-el-pais-brasil-prod.cdn.arcpublishing.com/arc/subs/p.js","action":"cancel"}, {"selector":"*://exame.com/wp-content/themes/exame-new/js/extd-acc.js*","action":"cancel"}, {"selector":"*://folhadelondrina.com.br/themes/default/js/paywall/fivewall1.26.js*","action":"cancel"}, {"selector":"*://s3.amazonaws.com/sdk-signin-wall-production/bundle.js*","action":"cancel"}, {"selector":"*://me.jsuol.com.br/*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/auth*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/includes/assets/opovomais/js/auth/auth_new_menu.min.js*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/includes/assets/opovomais/js/paywall_config.min.js*","action":"cancel"}, {"selector":"*://correio-static.cworks.cloud/fileadmin/sites/correio24horas/js/all.js*","action":"cancel"}]
// @run-at       document-start
// @noframes
// ==/UserScript==


importCDNSnackBar();


let currentURL = window.location.hostname;


if(currentURL.includes("folha.uol.com.br")){
    saveDataForDashboard(1);
    blockPaywallRequest("*://paywall.folha.uol.com.br/*");
    modifyFLSP();

}else if(currentURL.includes("estadao.com.br")){
    saveDataForDashboard(2);
    blockPaywallRequest("*://acesso.estadao.com.br/paywall*");

}else if(currentURL.includes("oglobo.globo.com") && !(window.location.href.includes("/epoca"))){
    saveDataForDashboard(3);
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    modifyGLOBO();
}
else if(currentURL.includes("gazetadopovo.com.br")){
    saveDataForDashboard(4);
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    modifyGAZETA();
}
else if(currentURL.includes("super.abril.com.br")){
    saveDataForDashboard(5);
    blockPaywallRequest("*://super.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*");
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("quatrorodas.abril.com.br")){
    saveDataForDashboard(6);
    blockPaywallRequest("*://quatrorodas.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*")
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("veja.abril.com.br") || (currentURL.includes("vejasp.abril"))){
    saveDataForDashboard(7);
    blockPaywallRequest("*://veja.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*")
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("guiadoestudante.abril.com.br")){
    saveDataForDashboard(10);
    blockPaywallRequest("*://guiadoestudante.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*");
    modifySUPINTERESSANTE();
}
else if(currentURL.includes("respondeai.com.br")){
    saveDataForDashboard(8);
    modifyRESPAI();
}
else if(currentURL.includes("exame.com")){
    saveDataForDashboard(9);
    blockPaywallRequest("*://exame.com/wp-content/themes/exame-new/js/extd-acc.js*");
    modifyEXAME();
}
else if(currentURL.includes("oglobo.globo.com") && window.location.href.includes("/epoca")){
    //MIGROU PARA O DOMINIO OGLOBO.COM
    saveDataForDashboard(11);
    modifyEPOCA();
}
else if(currentURL.includes("revistagalileu.globo.com")){
    saveDataForDashboard(13);
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    modifyGALILEU();
}
else if(currentURL.includes("epocanegocios.globo.com")){
    saveDataForDashboard(12);
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    modifyGALILEU();
}
else if(currentURL.includes("revistamarieclaire.globo.com")){
    saveDataForDashboard(14);
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    modifyGALILEU();
}
else if(currentURL.includes("revistagloborural.globo.com")){
    saveDataForDashboard(15);
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    modifyGALILEU();
}
else if(currentURL.includes("revistapegn.globo.com")){
    saveDataForDashboard(26);
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
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
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    modifyNSC();
}
else if(currentURL.includes("nytimes.com")){
    saveDataForDashboard(18);
    modifyNYTIMES();
}
else if(currentURL.includes("elpais.com")){
    saveDataForDashboard(19);
    blockPaywallRequest("*://prisa-el-pais-brasil-prod.cdn.arcpublishing.com/arc/subs/p.js");
    modifyELPAIS();
}
else if(currentURL.includes("jornalvs.com.br")){
    saveDataForDashboard(20);
    blockPaywallRequest("*://blockv4.fivewall.com.br/paywall.js*");
    modifyJVS();
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
else if(currentURL.includes("revistaglamour.globo.com")){
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
    //saveDataForDashboard();
    blockPaywallRequest("*://blockv4.fivewall.com.br/paywall.js*");
}



/* ============================== JORNAL O POVO ============================== */

function modifyOPOVO()
{
    if(window.location.href == "https://mais.opovo.com.br/"){
        window.location.assign("https://mais.opovo.com.br/home");
    }
    verificaAtualizacaoVersao();
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
                                                'Ops, infelizmente não foi possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>'
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
                            'Ops, infelizmente não foi possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>',
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
                                                'Ops, infelizmente não foi possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>'
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
                            'Ops, infelizmente não foi possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>',
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
        if((verificaElemento("#ctn_closed_article") || verificaElemento(".paywallModal") || verificaElemento("#capaPaywall")) && sourceCode != null){
            if(verificaElemento(".paywallModal")) document.querySelector(".paywallModal").remove();
            if(verificaElemento("#capaPaywall")) document.querySelector("#capaPaywall").remove();

            let blocoNoticia = document.querySelector("article");
            blocoNoticia.innerHTML = (sourceCode.querySelector("article")).outerHTML;
            document.body.style.overflow = "auto";
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

                        try{
                            let contentNoticia = document.querySelector(".ContentFadeOut__Wrapper-sc-164tfq8-0");
                            contentNoticia.innerHTML = blocoNoticia.outerHTML;
                            contentNoticia.style.maxHeight = "none";
                            document.querySelector("#signwall-template").remove();

                            incrementaConteudoAPI();
                            verificaAtualizacaoVersao();
                        }catch(erro){
                            sweetAlert(
                                'error',
                                'Erro',
                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`
                            );
                        }
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
       var VERSAO_ATUAL = '123';
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
    verificaAtualizacaoVersao();

    if(new RegExp('/invest\.exame\.com/').test(window.location.href)){
        let r = setInterval(()=>{
            let paywallBlock = getDivPaywall();
            if(paywallBlock != undefined && paywallBlock != null && typeof(axios) == 'function'){
                clearInterval(r);

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

                axios({
                    method: 'GET',
                    url: document.location.href,
                    timeout: 20000
                }).then((resp)=>{
                    let codigoFonte = new DOMParser().parseFromString(resp.data, 'text/html');
                    let newsBlock = getNewsDiv(codigoFonte);

                    let u = setInterval(()=>{
                        if(newsBlock != null && newsBlock != undefined){
                            clearInterval(u);
                            if(newsBlock != ''){
                                sweetAlert(
                                    'success',
                                    'Sucesso',
                                    'Ótimo! Conteúdo desbloqueado!'
                                );
                                paywallBlock.innerHTML = newsBlock;
                                removeInvisibleDiv();
                                fixTextStyle(paywallBlock);
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
    }else{
        let interval = setInterval(()=>{
            if(verificaElemento('#adid') && verificaElemento('#paywallModal')){
                clearInterval(interval);

                fetch(document.location.href)
                .then(response => response.text())
                .then(pageSource => {

                    let codigoFonte = new DOMParser().parseFromString(pageSource, 'text/html');
                
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
                    verificaAtualizacaoVersao();
                });
            }
        },800);
    }
}


/* =============================== FUNÇÕES EXAME INVEST ===============================*/

function getDivPaywall()
{
    let h4 = document.querySelectorAll('h4');

    for(let i=0; i<h4.length; i++){
        if((h4[i].textContent).includes('Falta pouco para você liberar seu acesso')){
            return (h4[i].parentElement.parentElement.parentElement);
        }
    }
}


function getNewsDiv(code)
{
    let divs = code.querySelectorAll('div');
    let htmlCode = '';

    for(let i=0; i<divs.length; i++){
        let classes = divs[i].classList;
        for(let j=0; j<classes.length; j++){
            if(new RegExp('NewsBody\_\_NewsWrapper\-sc').test(classes[j])){
                let childrenElements = divs[i].children;
                for(let k=0; k<childrenElements.length; k++){
                    htmlCode += childrenElements[k].outerHTML;
                }
            }
        }
    }
    return htmlCode;
}


function removeInvisibleDiv()
{
    let divs = document.querySelectorAll('div');
    for(let i=0; i<divs.length; i++){
        let classes = divs[i].classList;
        for(let j=0; j<classes.length; j++){
            if(new RegExp('\_\_AbsoluteDivWrapper\-sc').test(classes[j])){
                divs[i].remove();
            }
        }
    }
}


function fixTextStyle(element)
{
    element.style.cssText = `
        box-shadow: unset !important;
        border-radius: unset; !important;
        text-align: left;
        margin: 0;
        color: rgba(0,0,0, 0.87);
        font-size: 16px;
        font-family: Barlow;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.5px;`;
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

    if(blurElements.length>0){
        for (let i=0; i<blurElements.length; i++){
            blurElements[i].classList.remove("blur");
            blurElements[i].style.filter = 'none';
        }
        incrementaConteudoAPI();
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
    try{
        expandContent();
        removeExpandButtons();
        removeShowCompleteSolutionButtons();
        removeAllBlurFilter();
        incrementaConteudoAPI();
    }catch(e){
        console.log(`ERRO DESBLOQUEIO RESP AI => ${e.toString()}`);
    }
}

function expandContent()
{
    let sections = document.querySelectorAll('section');

    for(let i=0; i<sections.length; i++){
        if(sections[i].offsetHeight == 300){
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

    for(let i=0; i<btn.length; i++){
        if((btn[i].textContent).includes('Mostrar Solução Completa')){
            btn[i].parentElement.remove();
        }
    }
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
    if(document.getElementById('btnResposta') == null || document.getElementById('btnResposta') == undefined){
        let fullURL = window.location.href;
        if(
            fullURL.includes('materias/solucionario/livro') && 
            fullURL.includes('/edicao/') && 
            new RegExp('\/exercicio\/[0-9]+').test(fullURL)
        ){
            createButtonResposta();
            saveDataForDashboard(8);
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
     }, 800);
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




/* ====================== FOLHA DE SP ============================ */

function modifyFLSP()
{
    let rotina = setInterval(() => {
        if(verificaElemento('#paywall-flutuante') && verificaElemento('#paywall-content') && verificaElemento('#paywall-fill')){
            clearInterval(rotina);
            try{
                document.getElementById('paywall-flutuante').remove();
                document.getElementById('paywall-fill').remove();
                document.getElementById('paywall-content').style.overflow = 'auto';
                verificaAtualizacaoVersao();
                incrementaConteudoAPI();
            }catch(erro){
                console.error(`ERRO AO REMOVER PAYWALL FLSP --> ${erro.toString()}`);
            }
        }
    }, 800);
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
            document.body.appendChild(sweetAlertJS);
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

            const CURRENT_VERSION = '123';
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