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

            const URL_API_UPDATE = 'https://possoler.tech/API/searchUpdates';
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
    }, 800);
}