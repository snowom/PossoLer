window.addEventListener('load', ()=>{
    if(localStorage.getItem('migracaoOK') != 'true') { /* CRIA CHAVE PARA ARMAZENAR CONSENTIMENTO MSG */
        localStorage.setItem('migracaoOK', 'false');
        createSwal(
            `<iframe src="/fimmigracao" style="width: 100% !important; height: 100% !important; border: none;"></iframe>`
        )
    }
})


function createSwal(msg)
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
        //if(result.isConfirmed) localStorage.setItem('migracaoOK', 'true');
    });
}