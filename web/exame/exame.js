function modifyEXAME()
{
    verificaAtualizacaoVersao();

    let r = setInterval(()=>{
        if(document.querySelector(".xm-paywall") != null && typeof(__NEXT_DATA__) == "object"){
            clearInterval(r);
            try{
                let unlockedContent = "";
                (__NEXT_DATA__.props.pageProps.postOrSubcategoryProps.postData).forEach((data)=>{
                    unlockedContent += (data.hasOwnProperty("content")) ? data.content : "";
                });
                document.querySelector(".news-content-container").innerHTML = unlockedContent;
                incrementaConteudoAPI();
            }catch(erro){
                let s = setInterval(()=>{
                    if(typeof(Swal) == 'function'){
                        clearInterval(s);
                        console.log('ACHEI SWALL');

                        if(Swal.isVisible() == false){
                            sweetAlert(
                                'error',
                                'Erro',
                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                            );
                        }
                    }
                },800);
            }
        }
    },800)
}