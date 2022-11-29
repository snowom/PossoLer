chrome.webRequest.onBeforeRequest.addListener(function(details){
     incrementaConteudoAPI();
     return {cancel: true};
   },
   {urls:[
        "https://www.rbsonline.com.br/cdn/scripts/paywall.min.js",
        "https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*",
        "https://api.clicrbs.com.br/paywall-api/*",
        "https://d.jornaldocomercio.com/_conteudo/_files/json/paywall.json",
        "https://cdn.tinypass.com/api/tinypass.min.js*", "https://super.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "https://quatrorodas.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "https://veja.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "https://guiadoestudante.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "https://blockv4.fivewall.com.br/paywall.js*", "https://acesso.estadao.com.br/paywall*", "https://paywall.folha.uol.com.br/*", "https://*/arc/subs/p.min.js", "https://exame.com/wp-content/themes/exame-new/js/extd-acc.js", "https://s3.amazonaws.com/sdk-signin-wall-production/bundle.js*", "https://me.jsuol.com.br/*", "https://mais.opovo.com.br/auth*", "https://mais.opovo.com.br/includes/assets/opovomais/js/auth/auth_new_menu.min.js*", "https://mais.opovo.com.br/includes/assets/opovomais/js/paywall_config.min.js*", "https://correio-static.cworks.cloud/fileadmin/sites/correio24horas/js/all.js*", "https://static.infoglobo.com.br/paywall/js/tiny.js*", "https://www.atribuna.com.br/assets/js*/materia.js", "https://assine.correio24horas.com.br/v2/amp/subscriber/auth*", "https://c2.piano.io/*", "https://paywall.correiodopovo.com.br/*", "https://www.atribuna.com.br/assets/js*/article.js", "https://static.elpais.com/dist/resources/js/*/ENP-closed-article-layer.js", "https://*.respondeai.com.br/conteudo/js/vendor.js"
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