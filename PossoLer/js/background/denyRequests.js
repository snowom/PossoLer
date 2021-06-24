chrome.webRequest.onBeforeRequest.addListener(function(details){
     incrementaConteudoAPI();
     return {cancel: true};
   },
   {urls:[
        "https://www.rbsonline.com.br/cdn/scripts/paywall.min.js",
        "https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*",
        "https://api.clicrbs.com.br/paywall-api/*",
        "https://www.jornaldocomercio.com/src/inove/paywall.php",
        "*://cdn.tinypass.com/api/tinypass.min.js*"
   ]},
   ["blocking"]);


/* ========================== API INCREMENTO DE NOTICIAS E CONTEUDOS LIBERADOS ====================== */

function incrementaConteudoAPI()
{
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