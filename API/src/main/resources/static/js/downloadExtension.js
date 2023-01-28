function downloadExtension(filename)
{
    const DOWNLOAD_ENDPOINT = "/API/downloadExtension?filename=";
    const PREPARE_DOWNLOAD_ENDPOINT = "/API/prepare_download";

    axios({
        method: "POST",
        url: `${PREPARE_DOWNLOAD_ENDPOINT}`,
        timeout: 30000
    }).then((resp) => {
        console.log(resp)
        if(resp.status == 201){
            window.location.href = `${DOWNLOAD_ENDPOINT}${filename}`;

            Swal.fire({
                html: `<iframe src="/copyHash?hash=${resp.data.user_hash}" style="width: 100%; height: 100% !important; border: none;"></iframe>`,
                showCloseButton: true,
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: false,
                customClass: {
                    popup: "popupAlertFerias",
                    content: "alertFerias",
                    htmlContainer: "alertFerias",
                    container: "containerAlertFerias",
                    header: "headerContainerFerias"
                }
            });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Erro",
                html: `Ops, tivemos um pequeno problema com o download!<br>Por favor, tente novamente mais tarde<br><br><b>Código do erro: </b>${resp.data.response}`,
            });
        }
    }).catch((erro) => {
        Swal.fire({
            icon: "error",
            title: "Erro",
            html: `Ops, tivemos um pequeno problema com nosso servidor!<br>Por favor, tente novamente mais tarde<br><br><b>Código do erro: </b>${erro}`,
        });
    });
}