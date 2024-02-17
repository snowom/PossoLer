function modifyGZH()
{
    enableUrlChangeDetect();
    removeHiddenClass();

    GM_webRequest([
        {"selector":"https://www.rbsonline.com.br/cdn/scripts/paywall.min.js*","action":"cancel"},
        {"selector":"https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*","action":"cancel"},
        {"selector":"https://api.clicrbs.com.br/paywall-api/*","action":"cancel"},
        {"selector":"*://cdn.piano.io/api/tinypass.min.js", "action":"cancel"}
    ], function(info, message, details) {
        //console.log('PAYWALL BLOQUEADO');
        incrementaConteudoAPI();
        saveDataForDashboard(22);
    });

    window.addEventListener('locationchange', ()=>{
        console.log('MUDEI URL');
        verificaAtualizacaoVersao();
    });
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