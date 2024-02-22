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
                            url: 'https://possoler.tech/API/jornal_otempo/getRestServiceTokenEncoded',
                            timeout: 30000
                        }).then((resp)=>{
                            const TOKEN_ENCODED = resp.data.otempo_REST_SERVICE_TOKEN_ENCODED;

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