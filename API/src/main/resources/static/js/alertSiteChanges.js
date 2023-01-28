window.addEventListener('load', ()=>{
    if(localStorage.getItem('siteUpdate') != 'true') { /* CRIA CHAVE PARA ARMAZENAR CONSENTIMENTO MSG */
        localStorage.setItem('siteUpdate', "false");
        createSwal(
            'O site está de cara nova!',
            '<br>Como pode perceber, o site mudou um pouco de visual para que a sua experiência de navegação seja mais agradável, limpa e prática.<br><br>Caso esteja com problemas relacionado a erros de layout, por favor, limpe o cache do navegador, reinicie ele e tente acessar a página novamente.<br><br><div class="text-center">Obrigado por apoiar o projeto!</div>'
        );
    }
})


function createSwal(title, msg)
{
    Swal.fire({
        title: title,
        html: msg,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: true,
        confirmButtonText: 'OK',
        customClass: {
            content: 'text-left'
        }
    }).then((result)=>{
        if(result.isConfirmed) localStorage.setItem('siteUpdate', "true");
    });
}