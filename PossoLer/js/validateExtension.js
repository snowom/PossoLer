//chrome.storage.local.set({'active': false});
//chrome.storage.local.remove(["sign_key"], ()=>{});


/**
 * Verifica se o usuário trocou de versão de extensão.
 * Se sim, reseta as chaves de habilitação e hash
 * Se não, verifica se a chave que armazena a versão existe, e se não existir, ele cria
 */
chrome.storage.local.get('current_version', (resp) => {
    if(!resp.hasOwnProperty('current_version')){
        chrome.storage.local.set({"current_version": CURRENT_VERSION});
    }else{
        let previusVersion = resp.current_version;
        if(previusVersion != CURRENT_VERSION)
            chrome.storage.local.remove(["active", "sign_key"], ()=>{});
    }
});


/**
 * Verifica se a extensão está habilitada para o usuário.
 * Se sim, o código vai verificar se há algum problema de integridade no banco (repetição de hash)
 * Se não, o código vai habilitar a extensão no DB e criar as chaves necessárias localmente
 */
chrome.storage.local.get(['active'], (resp) => {
    if(!resp.hasOwnProperty('active') || resp.active == false){
        activeExtension();
    }else{
        main();
    }
});


/**
 * Ativa extensão e vincula ela ao usuário
 */
function activeExtension()
{
    if((window.location.hostname).includes("possoler.tech")){
        modifyPossoLer();
        return;
    }

    clearPageContent();
    let r = setInterval(()=>{
        if(typeof(Swal) == 'function'){
            clearInterval(r);
            window.stop();

            let HASH;
            Swal.fire({
                title: 'Bem-vindo ao Posso Ler?',
                html: 'Por favor, insira abaixo sua chave de acesso que você copiou ao fazer o download da extensão',
                input: 'text',
                inputAttributes: {
                  autocapitalize: 'off'
                },
                showCancelButton: false,
                confirmButtonText: 'Ativar extensão',
                allowEscapeKey: false,
                allowOutsideClick: false,
                backdrop: 'rgba(8, 8, 8, 0.92)',
                customClass: {
                    popup: 'snackZ-index',
                    container: 'snackZ-index'
                },
                showLoaderOnConfirm: true,
                preConfirm: (signKey) => {
                    
                    if(signKey.length == 0){
                        Swal.showValidationMessage('O campo não pode ser vazio');
                        return;
                    }

                    if(!new RegExp('^[a-zA-Z0-9]*$').test(signKey)){
                        Swal.showValidationMessage('O campo só aceita números e letras');
                        return;
                    }

                    return axios({
                        method: 'PUT',
                        url: 'http://localhost:8080/API/activeUser',
                        timeout: 30000,
                        data: JSON.stringify({
                            userHash: signKey
                        }),
                        headers: {
                            "Content-Type" : "application/json"
                        }
                    }).then((resp) => {
                        console.log(resp);

                        if(resp.data.status == 'sucesso'){
                            HASH = signKey;
                            return resp;
                        }
                        throw new Error('Ops, tivemos um pequeno problema ao habilitar a extensão! Por favor, tente novamente mais tarde.');
                    }).catch((erro) => {
                        if(erro.hasOwnProperty("response")) {
                            if(erro.response.status == 404) {
                                Swal.showValidationMessage('A chave informada é inválida.');
                                return;
                            }
                            if(erro.response.status == 500) {
                                Swal.showValidationMessage('A chave inserida já foi usada por outro usuário. Por favor, acesse o site oficial do projeto e gere uma nova chave de acesso.');
                                return;
                            }
                            Swal.showValidationMessage(erro.toString());
                        }
                        if(erro.toString().includes('timeout'))
                            Swal.showValidationMessage('Tempo de resposta excedido. Por favor, tente novamente utilizando uma conexão mais rápida ou mais estável.');
                        else if(erro.toString() == 'Network Error')
                            Swal.showValidationMessage('Ops, parece que você está sem internet. Por favor, verifique sua conexão e tente novamente.');
                        else
                            Swal.showValidationMessage(erro);
                    });
                },
            }).then((result) => {
                if(result.isConfirmed && result.value.data.status == 'sucesso'){
                    console.log(HASH);
                    chrome.storage.local.set({'active': true});
                    chrome.storage.local.set({"sign_key": HASH});

                    Swal.fire({
                        title: 'Sucesso!',
                        html: 'Extensão habilitada com sucesso!',
                        icon: 'success'
                    }).then((result)=>{
                        if(result.isConfirmed) document.location.reload(true);
                    });
                }
            });
        }
    },800);
}


function clearPageContent()
{
    document.body.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <p></p>`;
}