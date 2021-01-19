let currentURL = window.location.hostname;


if(currentURL.includes("folha.uol.com.br")){
    modifyFLSP();

}else if(currentURL.includes("estadao.com.br")){
    modifyESTADAO();
}

/* ====================== ESTADAO ================================ */

function modifyESTADAO()
{
    let rotina = setInterval(()=>{
        if(verificaComponentsEST()){
            clearInterval(rotina);
            removeBloqueioEST();
        }
    }, 800)
}


function verificaComponentsEST()
{
    if(document.getElementById('paywall-wrapper-iframe-estadao') != null){
        return true;
    }

    return false;
}


function removeBloqueioEST()
{
    document.getElementById('paywall-wrapper-iframe-estadao').remove();
    document.querySelector('html').style.overflow = 'auto';
    document.querySelector('html').style.width = 'auto';
    document.querySelector('html').style.position = 'unset';
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
    if(document.getElementById('paywall-flutuante') != null && document.getElementById('paywall-content') != null && document.getElementById('paywall-fill') != null){
        return true;
    }

    return false;
}


function removeBloqueio()
{
    document.getElementById('paywall-flutuante').remove();
    document.getElementById('paywall-fill').remove();

    document.getElementById('paywall-content').style.overflow = 'auto';
}