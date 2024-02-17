function modifyVLRECON()
{

    let waitAxios = setInterval(()=>{
        verificaAtualizacaoVersao();
        if(typeof(axios) == "function" && typeof(Swal) == 'function') {
            clearInterval(waitAxios);

            axios({
                method: "GET",
                url: `${DOMAIN}/API/paywalldom/valoreconomicoConfigs`,
                timeout: 10000
            }).then((responseConfigs)=>{
                if(!responseConfigs.data.enabledCacheMock) return;

                if(window.location.hostname == "valor.globo.com"){
                    let rotina = setInterval(()=>{

                        if(elementExistInList(responseConfigs.data.paywallNames)){
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
                                        url: 'https://possoler.tech/API/cachemock/getArticleContent',
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

                                                //console.log(`CODE CACHE = ${blocoNoticia.outerHTML}`);
                                                //console.log(`CODE ORIGINAL = ${blocoOriginal.outerHTML}`);

                                                if(blocoNoticia != false && blocoOriginal != false){

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
                                    }).catch((erro)=>{
                                        if(erro.toString().includes('timeout')){
                                            SwalTimeout(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                'https://valor.globo.com'
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
                        if(typeof(axios) == 'function' && verificaElemento('#styleSnack')){
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
                                                    url: 'https://possoler.tech/API/cachemock/saveArticleContent',
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
    },800);
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
            if(Swal.isVisible() == false && verificaElemento('#styleSnack')){
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
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://valor.globo.com") ||
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://gaz.com.br")
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


function elementExistInList(elementList)
{
    for(let i=0; i<elementList.length; i++) {
        if(document.querySelector(`.${elementList[i]}`) != null){
            return true;
        }
    }
    return false;
}