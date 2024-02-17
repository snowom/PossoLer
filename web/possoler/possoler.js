function modifyPossoLer()
{
    const codigo =
    `if(typeof(VERSAO_ATUAL) == 'undefined'){var VERSAO_ATUAL = '${CURRENT_VERSION}';}`;

    var currentVersionJS = document.createElement('script');
    currentVersionJS.setAttribute('type', 'text/javascript');
    currentVersionJS.setAttribute('id', 'versaoatual');
    document.head.appendChild(currentVersionJS);
    currentVersionJS.innerText = codigo;
}