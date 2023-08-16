window.addEventListener('load', ()=>{
    if(localStorage.getItem('alertrespai') != 'true') { /* CRIA CHAVE PARA ARMAZENAR CONSENTIMENTO MSG */
        localStorage.setItem('alertrespai', 'false');
        createSwalRespai(
            `<iframe src="/messageRespai" style="width: 100% !important; height: 100% !important; border: none;"></iframe>`
        )
    }
})


function createSwalRespai(msg)
{
    Swal.fire({
        html: msg,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: true,
        confirmButtonText: 'OK',
        customClass: {
            popup: 'popupAlertFerias',
            content: 'alertFerias',
            htmlContainer: 'alertFerias',
            container: 'containerAlertFerias'
        }
    }).then((result)=>{
        if(result.isConfirmed) localStorage.setItem('alertrespai', 'true');
    });
}