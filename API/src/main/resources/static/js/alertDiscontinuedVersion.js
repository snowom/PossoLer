window.addEventListener('load', ()=>{
    if(localStorage.getItem('agreeMessage') != 'true') { /* CRIA CHAVE PARA ARMAZENAR CONSENTIMENTO MSG */
        localStorage.setItem('agreeMessage', "false");
        createSwal(
            'Descontinuação UserScript',
            '<br>À partir da versão 1.0.9, o userscript (versão utilizada no desktop) não será mais atualizado.<br><br> Como o userscript é um <strong><em>script genérico</em></strong> (um script que serve para mais de um navegador), ele acaba tendo uma performance e recursos limitados em relação a um script feito para um navegador específico. Esses fatores dificultam demais o meu trabalho para poder trazer a vocês suporte a novos sites com um código qualidade, estável e com poucos bugs. Por esses motivos, o userscript não será mais atualizado. <br><br>Agradeço a compreensão de todos!<br><br>',
            'Não mostrar mais essa mensagem'
        );
    }
})


function createSwal(title, msg, placeHolderText)
{
    Swal.fire({
        title: title,
        html: msg,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: true,
        input: 'checkbox',
        inputValue: 0,
        inputPlaceholder: placeHolderText,
        inputValidator: (result) => {
            let response = (result) ? "true" : "false";
            localStorage.setItem('agreeMessage', response);
        },
        customClass: {
            content: 'text-left'
        }
    });
}