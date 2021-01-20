let currentURL = window.location.hostname;


if(currentURL.includes("folha.uol.com.br")){
    modifyFLSP();

}else if(currentURL.includes("estadao.com.br")){
    modifyESTADAO();

}else if(currentURL.includes("oglobo.globo.com")){
    modifyGLOBO();
}



/* ====================== O GLOBO ================================ */

function modifyGLOBO()
{
     let rotina = setInterval(()=>{
         if(verificaComponentsGLOBO()){
             clearInterval(rotina);
             
             let divNoticia = getNoticeBlock();

             let rotinaVerificaBloqueio = setInterval(()=>{

                if(verificaDivBloqueio()){
                    clearInterval(rotinaVerificaBloqueio);
                    removeBloqueioGLOBO();
                    getFatherElement().appendChild(divNoticia);
                }
             }, 800);

         }
     }, 800)
}


function verificaComponentsGLOBO()
{
    if(document.querySelector(".article__content-container")!=null){
        return true;
    }

    return false;
}


function getNoticeBlock()
{
    return document.querySelector('.article__content-container');
}


function verificaDivBloqueio()
{
    if(document.querySelector('.paywall-cpt')!=null){
        return true
    }

    return false;
}


function removeBloqueioGLOBO()
{
    document.querySelector('.paywall-cpt').remove();
    document.body.style.overflow = 'auto';
    document.body.style.position = 'unset';
}


function getFatherElement()
{
    return document.querySelector('.article');
}

/* function getNativeCode()
{
    fetch(document.location.href)
    .then(response => response.text())
    .then(pageSource => {return pageSource})
        //console.clear();
        //console.log(pageSource);
} */


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