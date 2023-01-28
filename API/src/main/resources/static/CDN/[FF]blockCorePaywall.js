let configsPOSSOLER;
let MSG_COPIA;
let MSG_HASH_INVALIDO;

/**
 * Aguarda todas as funções e variáveis necessárias estarem prontas para uso.
 * Isso evita que o código quebre e trave a execução em caso de alguma Exception
 */
let waitIsReady = setInterval(() => {
    if(
        typeof(activeExtension) == 'function' && 
        typeof(checkUserUnique) == 'function' && 
        typeof(axios) == 'function' && 
        typeof(CURRENT_VERSION) == 'string' && 
        typeof(currentURL) == 'string'
    ){
        clearInterval(waitIsReady);
        if(!currentURL.includes("possoler.tech")){
            if(
                GM_getValue("active") == null || 
                GM_getValue("active") == undefined || 
                GM_getValue("active") == false
            ){
                activeExtension();
            }else{
                main();
                checkUserUnique();
            }
        }

        if(
            GM_getValue("current_version") == null ||
            GM_getValue("current_version") == undefined
        ){
            GM_setValue("current_version", CURRENT_VERSION);
        }
        
        
        if(
            GM_getValue("current_version") != CURRENT_VERSION &&
            GM_getValue("current_version") != null && 
            GM_getValue("current_version") != undefined
        ) {
            GM_deleteValue("active");
            GM_deleteValue("sign_key");
            GM_setValue("current_version", CURRENT_VERSION);
            activeExtension();
        }
    }
}, 800);



/**
 * Setta valores pré-definidos caso o request pra API que armazena as configs dê algum erro
 */
function setDefaultMessages()
{
    MSG_HASH_INVALIDO = (configsPOSSOLER != null && configsPOSSOLER.hasOwnProperty('msgHashInvalido')) 
        ? configsPOSSOLER.msgHashInvalido
        : `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script>document.body.style.backgroundColor = "#013368";</script>
        <body style="background-color: #013368 !important;">
            <div class="container-fluid">
                <div class="row" style="margin-bottom: 50px !important;">
                    <div class="col-12 d-flex justify-content-center">
                        <img src="https://gerador.eu/wp-content/uploads/2021/04/4cbe8d_f1ed2800a49649848102c68fc5a66e53_mv2.gif">
                    </div>
                </div>
                <div class="row" style="margin-top: 50px !important;">
                    <div class="col-12">
                        <p class="display-4 text-center" style="color: #fff !important;">Ops...</p>
                        <p class="lead text-center" style="color: #fff">
                            O hash da extensão <strong>Posso Ler?</strong> é inválido! Isso significa que a extensão foi baixada a partir de sites de terceiros 
                            ou que houve um problema ao gerar o hash no momento do download do arquivo. Por favor, baixe a extensão no <a style="color: #fff !important;" href="https://possoler.tech">site oficial do projeto</a>
                        </p>
                    </div>
                </div>
            </div>
        </body>`;

    MSG_COPIA = (configsPOSSOLER != null && configsPOSSOLER.hasOwnProperty('msgCopia'))
        ? configsPOSSOLER.msgCopia
        : `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script>document.body.style.backgroundColor = "#013368";</script>
        <body style="background-color: #013368 !important;">
            <div class="container-fluid">
                <div class="row" style="margin-bottom: 50px !important;">
                    <div class="col-12 d-flex justify-content-center">
                        <img src="https://gerador.eu/wp-content/uploads/2021/04/4cbe8d_f1ed2800a49649848102c68fc5a66e53_mv2.gif">
                    </div>
                </div>
                <div class="row" style="margin-top: 50px !important;">
                    <div class="col-12">
                        <p class="display-4 text-center" style="color: #fff !important;">Ops...</p>
                        <p class="lead text-center" style="color: #fff">
                            Parece que você está usando uma versão da extensão que não foi baixada no <a style="color: #fff !important;" href="https://possoler.tech">site oficial do projeto ou que foi recompartilhada por terceiros.
                        </p>
                    </div>
                </div>
            </div>
        </body>`;
}


/**
 * Faz request para a API que armazena as configurações necessárias para montar a mensagem de erro.
 */
function getConfigs()
{
    setDefaultMessages();
}
getConfigs();


/**
 * Ativa extensao caso ela ainda não tenha sido ativada
 */
function activeExtension()
{
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
                        url: 'https://possoler.tech/API/activeUser',
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
                    GM_setValue("active", true);
                    GM_setValue("sign_key", HASH);

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


 /**
  * Verifica se a extensão é uma cópia ou não
  */
 function checkUserUnique()
 {
    if(GM_getValue("active") == true) {
        const SIGN_KEY = (GM_getValue('sign_key') != null) ? GM_getValue('sign_key') : 'xpto';
        let r = setInterval(() => {
            if(typeof(axios) == 'function') {
                clearInterval(r);

                const URL_VALIDATE_USER = 'https://possoler.tech/API/checkUser';
                axios({
                    method: 'POST',
                    url: URL_VALIDATE_USER,
                    timeout: 30000,
                    data: JSON.stringify({
                        userHash: SIGN_KEY
                    }),
                    headers: {
                        "Content-Type" : "application/json"
                    }
                }).then((resp) => {
                    console.log(resp.data);
                    if(resp.data.status == 'falha') {
                        getErrorAPI(resp.data);
                    }
                }).catch((erro) => {
                    console.log(erro);
                });
            }
        }, 800);
    }else{
        activeExtension();
    }
 }
 
 
 /**
  * Verifica qual foi o erro retornado pela API
  */
 function getErrorAPI(response)
 {
     let r = setInterval(() => {
         if(typeof(axios) == 'function'){
             clearInterval(r);
             setDefaultMessages();

            if(response.message == "hash inválido") {
                fakeExtensionMessageMontage(MSG_HASH_INVALIDO);
            }
            else if(
                response.message == "copia" ||
                response.message == "Extensão já habilitada para outro usuário"
            ) {
                fakeExtensionMessageMontage(MSG_COPIA);
            }
            else{
                console.clear();
                console.log("RESPOPNSE SIGN API - POSSO LER");
                console.log(response.data);
            }
         }
     },800);
 }
 
 
 /**
  * Monta página de erro caso seja identificado que o usuário não está usando uma versão autentica da extensão.
  * @param {*} message 
  */
function fakeExtensionMessageMontage(message)
{
    let r = setInterval(() => {
        if(typeof(axios) == 'function') {
            clearInterval(r);
 
            window.stop();
            setDefaultMessages();
            document.querySelector('html').innerHTML = message;
        }
    }, 800);
}

/**
 * Remove conteúdo da DOM caso burlem o popup de ativação
 */
function clearPageContent()
{
    document.body.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <p></p>`;
}