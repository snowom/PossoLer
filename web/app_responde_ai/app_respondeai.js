function modifyAPPRESPAI()
{
    enableUrlChangeDetect();

    blockBlock();
    importRequiredCDN();
    verificaAtualizacaoVersao();
    main(window.location.href);

    window.addEventListener('locationchange',(event)=>{
        let respAiCurrentUrl = event.target.navigation.currentEntry.url;
        main(respAiCurrentUrl);
    });

    /**
     * Função aninhada para aguardar carregamento de recursos
     */
    function main(respAiCurrentUrl) {

        if(typeof(axios) != "function" || typeof(Swal) != 'function') {
            setTimeout(() => {
                main(respAiCurrentUrl);
            }, 1000);
            return;
        }

        axios({
            method: "GET",
            url: `${DOMAIN}/API/paywalldom/respondeaiConfigs`,
            timeout: 10000
        }).then((resp)=>{

            mainUnlockFunction();
            checkButtonCreation();
            changeLockedIcons(resp.data);
            removeReactModalOverlay(resp.data);
            enableBodyOverflow(resp.data);


            /**
             * Nested function (funcao aninhada)
             * Funcao principal de desbloqueio de conteudo
             */
            function mainUnlockFunction(){
                setTheoryLinksAction(resp.data);
                enableBodyOverflow(resp.data);
                removeReactModalOverlay(resp.data);
                removeDexterBlock(resp.data);
                removeBlurPage(resp.data);

                if(respAiCurrentUrl.includes('app.respondeai.com.br/aprender') && respAiCurrentUrl.includes('/teoria/')){
                    unlockTeoria(resp.data);
                    incrementaConteudoAPI();
                }
                else if(respAiCurrentUrl.includes('app.respondeai.com.br/aprender') && respAiCurrentUrl.includes('/exercicio/')){
                    unlockFixationExercise(resp.data);
                    incrementaConteudoAPI();
                }
                else if((respAiCurrentUrl.includes('app.respondeai.com.br/aprender') || respAiCurrentUrl.includes('app.respondeai.com.br/praticar')) && respAiCurrentUrl.includes('/exercicio-lista/')){
                    unlockListExercise(resp.data);
                    incrementaConteudoAPI();
                }
                else if(respAiCurrentUrl.includes("/lecture/aulao/")) {
                    unlockVideoLesson(resp.data);
                    incrementaConteudoAPI();
                }
            }

        }).catch((erro) => {
            if(erro.toString().includes('timeout')){
                sweetAlert(
                    'error',
                    'Erro',
                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`,
                );
            }else{
                sweetAlert(
                    'error',
                    'Erro',
                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                );
            }
        });
    }
}


function blockBlock() {
    let id = window.setInterval(function() {}, 0);
    while (id--) {
        window.clearInterval(id);
    }
    setTimeout(()=>{
        blockBlock();
    },100);
}


function chooseUnlockEndpoint(conteudoDesbloqueio) {
    switch(conteudoDesbloqueio) {
        case "theory": return "/API/respondeai/getTheory";
        case "exercise": return "/API/respondeai/getExercise";
        case "list-exercise": return "/API/respondeai/getListExercise";
        case "video-lesson": return "/API/respondeai/getVideoLesson";
    }
}


function changeLockedIcons(configs)
{
    let svgIcons = document.querySelectorAll(`.${configs.logged_locked_icons}`);
    svgIcons.forEach(icon => {
        icon.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square sc-lgsYow gFYkCv  logged" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path></svg>`
    });

    setTimeout(()=>{
        changeLockedIcons(configs);
    }, 800);
}


function unlockVideoLesson(configs) {
    sweetAlert(
        'info',
        'Aguarde um momento...',
        'Estamos removendo os bloqueios para você...<br><br>'
    );

    let flag = false;

    importGlideDependencies();
    importVideoTipsLabelCssRules();
    main(configs);

    function main(configs) {
        try{
            (configs.data_cy.video_lesson_div_content).forEach((video_lesson_class) => {
                if(verificaElemento(`.${video_lesson_class}`)) {
                    flag = true;
                    findCurrentVideoDiv(video_lesson_class, configs);
                    return;
                }
            });

            if(!flag) {
                setTimeout(() => {
                    main(configs);
                },800);
            }
        }catch(erro) {
            sweetAlert(
                'error',
                'Erro',
                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
            );
        }
    }
}


function findCurrentVideoDiv(video_lesson_class, configs) {
    try{
        if(verificaElemento(`.${video_lesson_class}`)) {
            let video_lesson_div = document.querySelector(`.${video_lesson_class}`);
            getVideoLesson(configs, video_lesson_div);
            return;
        }

        setTimeout(() => {
            findCurrentVideoDiv(video_lesson_class, configs);
        },800);
    }catch(erro){
        sweetAlert(
            'error',
            'Erro',
            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
        );
    }
}


function getVideoLesson(configs, video_lesson_div) {

    let token = getCookie('user_jwt');
    let lessonId = getTopicId();

    if(typeof(axios) == 'undefined' || token == null || lessonId == null) {
        setTimeout(() => {
            getVideoLesson(configs, video_lesson_div);
            return;
        }, 800);
    }

    const ENDPOINT = chooseUnlockEndpoint("video-lesson");

    axios({
        method: "POST",
        url: `${DOMAIN}${ENDPOINT}`,
        timeout: 30000,
        data: JSON.stringify({
            lesson_id: lessonId
        }),
        headers: {
            "Content-Type" : "application/json",
            "authorization": token
        }
    }).then((resp) => {
        if(resp.data.status == 'failed') throw new Error(resp.data.message);
        mountNewVideoLessonContainer(resp.data, video_lesson_div);

    }).catch((erro) => {
        sweetAlert(
            'error',
            'Erro',
            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
        );
    });
}


function mountNewVideoLessonContainer(configs, video_lesson_div) {
    try{
        let htmlText = "";

        configs.forEach((object, index) => {
            let video = object.video;

            if(index == 0) {
                htmlText = `
                    <div class="glide videoLessons">
                        <div class="sc-jstVdI hqFXFv glide__track" data-glide-el="track">
                            <ul class="glide__slides">
                        `;
            }

            htmlText += (video.provider.includes("youtube"))

                ? `
                <li class="glide__slide">
                    <div class="fullscreen">
                        <div class="sc-iLWYPX" style="aspect-ratio: 16/9 !important; z-index: 1 !important; position: relative !important;">
                            <div class="sc-kKBQAD" style="display: block !important; height: 100% !important;">
                                <div id="playerId_${index}" style="width: 100%; height: 100%;">
                                    <div style="width: 100%; height: 100%;">
                                        <iframe frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="${video.name}" width="100%" height="100%" src="https://www.youtube.com/embed/${video.providerId}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-8="true" data-gtm-yt-inspected-35634434_241="true">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                            ${mountVideoDescriptionData(video, object.coveredTopics, index+1)}
                        </div>
                    </div>
                </li>`

                : `
                <li class="glide__slide">
                    <div class="fullscreen">
                        <div class="sc-iLWYPX" style="aspect-ratio: 16/9 !important; z-index: 1 !important; position: relative !important;">
                            <div style="padding:56.25% 0 0 0;position:relative;">
                                <iframe src="https://player.vimeo.com/video/${video.providerId}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            ${mountVideoDescriptionData(video, object.coveredTopics, index+1)}
                        </div>
                    </div>
                </li>`;

            if(index == (configs.length - 1)) {
                htmlText += `</ul></div>${mountVideoControls()}</div>`;
            }
        });

        video_lesson_div.innerHTML = htmlText;
        initGlideLibrary();
        Swal.close();
    }catch(erro){
        sweetAlert(
            'error',
            'Erro',
            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
        );
    }
}


function mountVideoControls() {
    return `
        <div class="glide__arrows" data-glide-el="controls">
            <button id="btnGlidePrev" class="glide__arrow glide__arrow--left" data-glide-dir="<" style="background-color:rgb(0 0 0 / 50%) !important; border: 3px solid rgb(162 255 0 / 91%) !important;">
                <span class="fas fa-arrow-left">&#10094;</span>
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">" style="background-color:rgb(0 0 0 / 50%) !important; border: 3px solid rgb(162 255 0 / 91%) !important;">
                <span class="fas fa-arrow-right">&#10095;</span>
            </button>
        </div>`
}


function mountVideoDescriptionData(videoConfig, coveredTopics, indexConfig) {
    try{
        let topicsBlock = "";

        coveredTopics.forEach((topic)=> {
            topicsBlock += `<li class="sc-eQubti hpGpQ">
                <span class="sc-iTLKXn guGmfJ">
                    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="sc-lmgjyN iRXdY" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path>
                        <path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path>
                        <path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"></path>
                        <path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"></path>
                    </svg>
                    <span>${topic.name}</span>
                </span>
                <div class="sc-fXUGxx hNOlID">
                    <a class="sc-iTlrqL hoTtMg" href="/aprender/topico/${topic.subjectId}/${topic.id}/teoria/${topic.theoryId}">Aprender +</a>
                    <a class="sc-iTlrqL kSVlCQ" href="/aprender/topico/${topic.subjectId}/${topic.id}/exercicio/${topic.firstExerciseId}">Praticar +</a>
                </div>
            </li>`
        });

        return `<div class="sc-lmwPYW ctgldi">
            ${mountVideoTipsLabel()}
            <div class="sc-htnqrb bgWLgJ">
                <div class="sc-bRyDhe iBIOYD">
                    <div class="sc-hQrNYi fikJbk">${indexConfig}</div>
                    <div class="sc-hHRaiR ihPhZF">${videoConfig.name}</div>
                </div>
            </div>
            <div class="sc-muxYx hbjZIk">
                <div class="sc-fWMzbn eIkLbq">Tópicos abordados no módulo ${indexConfig}</div>
                <ul class="sc-isojaI etwdzZ">
                    ${topicsBlock}
                </ul>
            </div>
        </div>`;
    }catch(erro){
        sweetAlert(
            'error',
            'Erro',
            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
        );
    }
}


function mountVideoTipsLabel() {
    return `
    <p id="dicaTutorial" style="text-align: center !important; margin: 25px 0px !important;">
        <em style="color: #000 !important">
            <strong>Dica: </strong>
            <span>Clique e arraste horizontalmente para mudar de video aula</span>
        </em>
    </p>`;
}


function importVideoTipsLabelCssRules() {
    setTimeout(() => {
        if(!verificaElemento('head')){
            importGlideDependencies();
            return;
        }
    }, 800);

    var videoTipsLabelRules = document.createElement('style');
    videoTipsLabelRules.setAttribute('id', 'videoTipsLabelRules');
    document.head.appendChild(videoTipsLabelRules);
    videoTipsLabelRules.innerText = '#dicaTutorial{display: block;} @media screen and (max-width: 759px) {.glide__arrows{display: none;}#dicaTutorial{display: block;}}';
}


function initGlideLibrary() {
    try{
        let configs = {
            type: "carousel",
            perView: 1,
            focusAt: "center"
        };

        var glide = new Glide(".videoLessons", configs);
        glide.on(["mount.after", "run"], () => {});
        glide.mount();
    }catch(erro){
        sweetAlert(
            'error',
            'Erro',
            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
        );
    }
}


function importGlideDependencies() {
    setTimeout(() => {
        if(!verificaElemento('head')){
            importGlideDependencies();
            return;
        }
    }, 800);

    var GlideCoreCss = document.createElement('link');
    GlideCoreCss.setAttribute('id','GlideCoreCss');
    GlideCoreCss.setAttribute('rel','stylesheet');
    GlideCoreCss.setAttribute('type','text/css');
    GlideCoreCss.setAttribute('href',`${DOMAIN}/API/getCDN?file=glidecorecss`);
    document.head.appendChild(GlideCoreCss);

    var GlideThemeCss = document.createElement('link');
    GlideThemeCss.setAttribute('id','GlideThemeCss');
    GlideThemeCss.setAttribute('rel','stylesheet');
    GlideThemeCss.setAttribute('type','text/css');
    GlideThemeCss.setAttribute('href',`${DOMAIN}/API/getCDN?file=glidethemecss`);
    document.head.appendChild(GlideThemeCss);
}


function unlockListExercise(configs)
{
    removeFormatToogle(configs);
    main(configs);

    function main(configs) {
        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            for(let iConfig=0; iConfig<configs.data_cy.exercise_answer_button.length; iConfig++) {
                if(divs[i].classList.contains(`${configs.data_cy.exercise_answer_button[iConfig]}`) && !verificaElemento("#tituloResposta")) {

                    let answerDiv = divs[i];
                    let token = getCookie('user_jwt');
                    let listExerciseId = getTopicId();
                    answerDiv.innerHTML = setLoadingPageAnimation();
                    getListExercise(token, listExerciseId, answerDiv);
                    return;
                }
            }
        }
        setTimeout(() => {
            main(configs);
        }, 800);
    }


    function getListExercise(token, listExerciseId, answerDiv) {
        if(typeof(axios) == 'undefined' || token == null || listExerciseId == null) {
            setTimeout(() => {
                getListExercise(token, listExerciseId, answerDiv);
                return;
            }, 800);
        }

        const ENDPOINT = chooseUnlockEndpoint("list-exercise");

        axios({
            method: "POST",
            url: `${DOMAIN}${ENDPOINT}`,
            timeout: 30000,
            data: JSON.stringify({
                itemId: listExerciseId
            }),
            headers: {
                "Content-Type" : "application/json",
                "authorization": token
            }
        }).then((resp) => {
            if(resp.data.status == 'failed') throw new Error(resp.data.message);

            //Set div style
            answerDiv.style.cssText = `
                width: 100% !important;
                padding: 0px 30px !important;
                font-family: "Droid Serif", serif !important;
                font-size: 1.25em !important;
                line-height: 26px !important;
                color: rgb(68, 68, 68) !important;
                padding-bottom: 15px !important`


            //Renderiza solução na tela - Teoria
            for(let i=0; i<resp.data.lightSolution.length; i++){
                if(i==0){
                    answerDiv.innerHTML = `<h1 id="tituloResposta" style="color: rgb(54, 170, 173); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Resposta</h1>`;
                }
                answerDiv.innerHTML += resp.data.lightSolution[i];
                MathJax.typeset();
            }


            //Renderiza solução na tela - Videos
            if(resp.data.hasOwnProperty('videos')){
                const SINGLE_VIDEO_SIZE = 450;
                const SPACE_BETWEEN_VIDEOS = 50;

                importVimeoPlayerJS();

                for(let j=0; j<resp.data.videos.length; j++){

                    if(j==0){
                        answerDiv.innerHTML += `<h1 style="color: rgb(54, 170, 173); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Vídeo Tutorial</h1>`;
                    }

                    answerDiv.innerHTML += (resp.data.videos[j].provider.includes("youtube"))

                        ? `<div data-cy="video-iframe" allowfullscreen="" frameborder="0" style="width: 100%; height: ${100/resp.data.videos.length}%;">
                            <div style="width: 100%; height: ${SINGLE_VIDEO_SIZE}px;">
                                <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/${resp.data.videos[j].providerId}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"></iframe>
                            </div>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`

                        :`<div style="padding:56.25% 0 0 0;position:relative;">
                            <iframe src="https://player.vimeo.com/video/${resp.data.videos[j].providerId}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`;
                }
            }
        }).catch((erro)=>{
            sweetAlert(
                'error',
                'Erro',
                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
            );
        });
    }
}


function unlockFixationExercise(configs)
{
    main(configs);
    removeFormatFromToogle(configs);


    function main(configs) {

        let divs = document.querySelectorAll('div');
        let flag = false;

        //remove answer button if exists
        divs.forEach((div) => {
            (configs.data_cy.exercise_answer_button).forEach((answer_button_class) => {
                if(div.classList.contains(`${answer_button_class}`)){
                    div.remove();
                    return;
                }
            });
        });

        divs.forEach((div) => {
            (configs.data_cy.exercise_div_content).forEach((exercise_div_content_class) => {
                if(
                    (div.classList.contains(`${exercise_div_content_class}`)) &&
                    (!verificaElemento("#tituloResposta"))
                ){
                    flag = true;
                    div.innerHTML += `<div id="answerDiv"></div>`;
                    let answerDiv = document.getElementById("answerDiv");

                    let token = getCookie('user_jwt');
                    let exerciseId = getTopicId();

                    answerDiv.innerHTML += setLoadingPageAnimation();
                    getFixationExercise(configs, token, exerciseId, answerDiv);
                    return;
                }
            });
        });

        if(!flag) {
            setTimeout(() => {
                main(configs);
            },800);
        }
    }


    //Remove format toogle
    function removeFormatFromToogle(configs) {
        let flag = false;

        let divs = document.querySelectorAll('div');
        for(let i=0; i<divs.length; i++){
            for(let iConfig=0; iConfig<configs.data_cy.format_toggle.length; iConfig++){
                if(divs[i].classList.contains(`${configs.data_cy.format_toggle[iConfig]}`)){
                    flag = true;
                    divs[i].style.display = "none";
                    break;
                }
            }
        }
        if(!flag) {
            setTimeout(() => {
                removeFormatFromToogle(configs);
            },800);
        }
    }


    function getFixationExercise(configs, token, exerciseId, answerDiv) {

        if(typeof(axios) != 'function' || token == null || exerciseId == null){
            setTimeout(() => {
                getFixationExercise(configs, token, exerciseId, answerDiv);
                return;
            },800);
        }

        const ENDPOINT = chooseUnlockEndpoint("exercise");

        axios({
            method: "POST",
            url: `${DOMAIN}${ENDPOINT}`,
            timeout: 30000,
            data: JSON.stringify({
                itemId: exerciseId
            }),
            headers: {
                "Content-Type" : "application/json",
                "authorization": token
            }
        }).then((resp)=>{
            if(resp.data.status == 'failed') throw new Error(resp.data.message);

            //Set div style
            answerDiv.style.cssText = `
                width: 100% !important;
                padding: 0px 30px !important;
                font-family: "Droid Serif", serif !important;
                font-size: 1.25em !important;
                line-height: 26px !important;
                color: rgb(68, 68, 68) !important;
                padding-bottom: 15px !important`


            //Renderiza solução na tela - Teoria
            for(let i=0; i<resp.data.lightSolution.length; i++){
                if(i==0){
                    answerDiv.innerHTML = `<h1 id="tituloResposta" style="color: rgb(247, 172, 60); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Resposta</h1>`;
                }
                answerDiv.innerHTML += resp.data.lightSolution[i];
                MathJax.typeset();
            }

            //Remove barra de tipo de conteudo
            removeFormatToogle(configs);


            //Renderiza solução na tela - Videos
            if(resp.data.hasOwnProperty('videos')){
                const SINGLE_VIDEO_SIZE = 450;
                const SPACE_BETWEEN_VIDEOS = 50;

                importVimeoPlayerJS();

                for(let j=0; j<resp.data.videos.length; j++){

                    if(j==0){
                        answerDiv.innerHTML += `<h1 style="color: rgb(247, 172, 60); font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Vídeo Tutorial</h1>`;
                    }

                    answerDiv.innerHTML += (resp.data.videos[j].provider.includes("youtube"))

                        ? `<div data-cy="video-iframe" allowfullscreen="" frameborder="0" style="width: 100%; height: ${100/resp.data.videos.length}%;">
                            <div style="width: 100%; height: ${SINGLE_VIDEO_SIZE}px;">
                                <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/${resp.data.videos[j].providerId}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"></iframe>
                            </div>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`

                        :`<div style="padding:56.25% 0 0 0;position:relative;">
                            <iframe src="https://player.vimeo.com/video/${resp.data.videos[j].providerId}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`;
                }
            }
        }).catch((erro)=>{
            sweetAlert(
                'error',
                'Erro',
                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
            );
            return;
        });
    }
}


function unlockTeoria(configs)
{
    main(configs);


    function main(configs) {
        let flag = false;
        let divsSteps = document.querySelectorAll('div');
        for(let j=0; j<divsSteps.length; j++){
            for(let iConfig2=0; iConfig2<configs.data_cy.theory_text_content.length; iConfig2++){
                if(divsSteps[j].classList.contains(`${configs.data_cy.theory_text_content[iConfig2]}`)){

                    let randomId = Math.round(Math.random()*100000000);
                    let divStepsContainer = divsSteps[j].children[0];
                    divStepsContainer.setAttribute("id", randomId);
                    flag = true;

                    try{
                        if(
                            divStepsContainer.children[0].isEqualNode(divStepsContainer.children[1]) &&
                            divStepsContainer.children[1].isEqualNode(divStepsContainer.children[2]) &&
                            divStepsContainer.children[2].isEqualNode(divStepsContainer.children[3]) &&
                            divStepsContainer.children[3].isEqualNode(divStepsContainer.children[4]) &&
                            divStepsContainer.children[4].isEqualNode(divStepsContainer.children[5])
                        ){
                            // REMOVE FORMAT TOOGLE CASO BLOQUEADO
                            removeFormatToogle(configs);

                            //SETTA MSG DE LOADING
                            divStepsContainer.innerHTML = setLoadingPageAnimation();

                            //CHAMA API PARA DESBLOQUEAR CONTEUDO
                            callAPITheoryUnlocked(configs, randomId);
                            callAPITheoryUnlocked(configs, randomId);
                            break;
                        }
                    }catch(erro){

                    }
                    break;
                }
            }
        }
        if(!flag) {
            setTimeout(() => {
                main(configs);
            },800);
        }
    }
}


//Remove format toogle
function removeFormatToogle(configs) {
    let divs = document.querySelectorAll('div');
    for(let i=0; i<divs.length; i++){
        for(let iConfig=0; iConfig<configs.data_cy.format_toggle.length; iConfig++) {
            if(divs[i].classList.contains(configs.data_cy.format_toggle[iConfig])) {
                divs[i].style.display = "none";
                return;
            }
        }
    }
    setTimeout(() => {
        removeFormatToogle(configs);
    }, 800);
}


function setLoadingPageAnimation()
{
    return `
        <div id="containerLootieLoading" class="container text-center">
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_4bzh2jhs.json"  background="transparent"  speed="1"  style="height: 300px;"  loop  autoplay></lottie-player>
            <center id="msgLottieDesbloqueio">
                <p class="lead">Aguarde um momento...<br>Estamos removendo os bloqueios para você...</p>
            </center>
        </div>`
}


function importRequiredCDN()
{
    setTimeout(() => {
        if(!verificaElemento('head')){
            importRequiredCDN();
            return;
        }
    }, 800);

    if(!customElements.get("lottie-player")){
        let lottieJS = document.createElement('script');
        lottieJS.setAttribute('src','https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js');
        document.querySelector('head').appendChild(lottieJS);
    }
}


/**
 * Faz chamada para API e popula página de acordo com o parametro typeContent
 * @param {*} typeContent
 */
function callAPITheoryUnlocked(configs, randomId)
{
    main(configs, randomId);


    function main(configs, randomId) {
        let token = getCookie('user_jwt');
        let topicId = getTopicId();

        if(typeof(axios) != 'function' || token == null || topicId == null){
            setTimeout(() => {
                main(configs, randomId);
                return;
            },800);
        }

        const ENDPOINT = chooseUnlockEndpoint("theory");

        axios({
            method: "POST",
            url: `${DOMAIN}${ENDPOINT}`,
            timeout: 30000,
            data: JSON.stringify({
                itemId: topicId
            }),
            headers: {
                "Content-Type" : "application/json",
                "authorization": token
            }
        }).then((resp)=>{

            if(resp.data.status == 'failed')
                throw new Error(resp.data.message);

            setTheoryUnlocked(resp, randomId);


        }).catch((erro)=>{
            sweetAlert(
                'error',
                'Erro',
                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
            );
            if(verificaElemento("#msgLottieDesbloqueio")){
                document.getElementById("msgLottieDesbloqueio").innerHTML = `
                    <p>Ops, tivemos um pequeno problema!<br>Por favor, recarregue a página ou tente novamente mais tarde.</p>
                    <p><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}</p>`
            }
        })
    }


    function setTheoryUnlocked(resp, randomId) {
        console.log("setTextTheory", randomId);
        let div = document.getElementById(`${randomId}`);
        if(div) {
            div.innerHTML = `
                <div class="sc-jTzLTM fFEUnb rendered">
                    <div>${resp.data.lightBody}</div>
                </div>${setVideoTheoryUnlocked(resp)}`;

            MathJax.typeset();
            return;
        }
    }


    function setVideoTheoryUnlocked(resp) {
        const SINGLE_VIDEO_SIZE = 450;
        const SPACE_BETWEEN_VIDEOS = 50;
        let htmlText = ``;

        if(resp.data.hasOwnProperty('videos')) {
            importVimeoPlayerJS();


            //SETA TAMANHO DA PAGINA
            let height = (SINGLE_VIDEO_SIZE*resp.data.videos.length) + (SPACE_BETWEEN_VIDEOS*resp.data.videos.length);
            htmlText += `<div style="height: ${height}px !important;">`

            //SETA LABEL TITULO VIDEO AULA
            htmlText += `<h1 style="color: #00b8d6; font-size: 1.7em; font-family:Droid Serif, serif; font-weight: inherit; margin: 50px 0px 30px 0px">Vídeo Aula</h1>`;

            //ITERA SOBRE OBJETO DE RESPOSTA PARA MONTAR PAGINA
            (resp.data.videos).forEach((video) => {

                htmlText += (video.provider.includes("youtube"))

                    ?  `<div data-cy="video-iframe" allowfullscreen="" frameborder="0" style="width: 100%; height: ${100/resp.data.videos.length}%;">
                            <div style="width: 100%; height: 100%;">
                                <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/${video.providerId}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fapp.respondeai.com.br&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"></iframe>
                            </div>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`

                    :  `<div style="padding:56.25% 0 0 0;position:relative;">
                          <iframe src="https://player.vimeo.com/video/${video.providerId}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div style="height: ${SPACE_BETWEEN_VIDEOS}px !important"></div>`;
            });
            htmlText += `</div>`
        }else{
            throw new Error("Falha ao obter objeto \"videos\"");
        }

        return htmlText;
    }
}

/**
 * Pega e retorna topicId da URL
 * @returns String
 */
function getTopicId()
{
    let url = window.location.href;
    let params = url.split("/");
    return params[params.length-1];
}


/**
 * Sobrescreve acao padrao dos botoes
 */
function setTheoryLinksAction(configs)
{
    let flag = false;

    let divs = document.querySelectorAll('div');
    for(let i=0; i<divs.length; i++) {
        for(let iConfig=0; iConfig<configs.data_cy.side_menu.length; iConfig++) {
            if(
                (divs[i].hasAttribute('data-cy') && divs[i].getAttribute('data-cy') == configs.data_cy.side_menu[iConfig]) ||
                divs[i].classList.contains(`${configs.data_cy.side_menu[iConfig]}`)
            ){
                setTimeout(() => {
                    let links = document.querySelectorAll("a");
                    for(let i=0; i<links.length; i++){
                        if(
                            links[i].getAttribute("href").includes("/aprender") &&
                            links[i].getAttribute("href").includes("/topico") &&
                            links[i].getAttribute("href").includes("/teoria") &&
                            links[i].getAttribute("href").includes("/exercicio/")
                        ){
                            flag = true;
                            links[i].addEventListener("click", (event)=>{
                                event.preventDefault();
                                window.location.assign(`https://${window.location.hostname}${links[i].getAttribute("href")}`);
                            });
                        }
                    }
                },2000);
                break;
            }
        }
    }

    if(!flag) {
        setTimeout(() => {
            setTheoryLinksAction(configs);
        }, 800);
    }
}

/**
 * Remove blur da pagina
 */
function removeBlurPage(configs)
{
    configs.blur_class.forEach((current_class) => {
        let blurElements = document.querySelectorAll(`.${current_class}`);
        blurElements.forEach((blurElement) => {
            blurElement.classList.remove(current_class);
            blurElement.style.filter = "none";
        })
    });

    setTimeout(() => {
        removeBlurPage(configs);
    }, 800);
}


/**
 * Habilita scroll da pagina
 */
function enableBodyOverflow(configs)
{
    for(let i=0; i<configs.logged_enable_scroll_page.length; i++){
        if(verificaElemento(`.${configs.logged_enable_scroll_page[i]}`)){
            document.body.style.overflow = "auto"
            return;
        }
    }

    setTimeout(() => {
        enableBodyOverflow(configs);
    }, 800);
}


function removeReactModalOverlay(configs)
{
    (configs.logged_react_modal).forEach((className) => {
        let reactModalOverlay = document.querySelectorAll(`.${className}`);
        if(reactModalOverlay.length > 0){
            reactModalOverlay.forEach((element) => {
                element.remove();
            });
            return;
        }
    });

    setTimeout(() => {
        removeReactModalOverlay(configs);
    },800);
}

/**
 * Remove bloqueio do dexter
 */
function removeDexterBlock(configs)
{
    for(let iConfig=0; iConfig<configs.logged_dexter_block.length; iConfig++){
        if(verificaElemento(`.${configs.logged_dexter_block[iConfig]}`)){
            document.querySelector(`.${configs.logged_dexter_block[iConfig]}`).remove();
            return;
        }
    }

    setTimeout(() => {
        removeDexterBlock(configs);
    }, 800);
}


/**
 * IMPORT VIMEO PLAYER JS
 */
function importVimeoPlayerJS() {
    let vimeoJS = document.createElement("script");
    vimeoJS.type = "text/javascript";
    vimeoJS.setAttribute('id', 'vimeoJS');
    vimeoJS.setAttribute('src', 'https://player.vimeo.com/api/player.js');
    document.head.appendChild(vimeoJS);
}


function checkButtonCreation()
{
    let fullURL = window.location.href;
    if(document.getElementById('btnResposta') == null || document.getElementById('btnResposta') == undefined){
        if(
            (fullURL.includes('materias/solucionario/livro') &&
            fullURL.includes('/edicao/') &&
            new RegExp('\/exercicio\/[0-9]+').test(fullURL))
            || (fullURL.includes("/conteudo/") && fullURL.includes("/livro/"))
        ){
            //RESPOSTA LIVRO USUARIO LOGADO
            incrementaConteudoAPI();
            createButtonResposta();
            saveDataForDashboard(8);
            verificaAtualizacaoVersao();
        }
    }else{
        //REMOVE BOTÃO DE RESOLUÇÃO
        if(
            (!fullURL.includes('materias/solucionario/livro') ||
            !fullURL.includes('/edicao/') ||
            !new RegExp('\/exercicio\/[0-9]+').test(fullURL))
            && !(fullURL.includes("/conteudo/") && fullURL.includes("/livro/"))  && verificaElemento("#btnResposta")
        ){
            document.getElementById('btnResposta').remove();
        }
    }
}


function createButtonResposta()
{

    if(document.body == null || document.body == undefined || typeof(Swal) != 'function'){
        setTimeout(() => {
            createButtonResposta();
            return;
        },800);
    }

    let btnResposta = document.createElement('button');
    btnResposta.setAttribute('id','btnResposta');
    btnResposta.setAttribute('title','Ver Resolução');
    btnResposta.innerText = 'Ver resolução do exercício';
    document.body.appendChild(btnResposta);

    //SET ESTILO BOTAO
    btnResposta.style.cssText = `position: fixed;
    bottom: 20px;
    left: 30px;
    z-index: 1050;
    border: none;
    outline: none;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 5px;
    font-size: 18px;
    -webkit-box-shadow: 10px 5px 5px 0 rgb(0 0 0 / 20%), 10px 5px 10px 0 rgb(0 0 0 / 10%);
    box-shadow: 10px 5px 5px 0 rgb(0 0 0 / 20%), 10px 5px 10px 0 rgb(0 0 0 / 10%);

    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 600ms, visibility 600ms;
    opacity: 1;`;

    //ADD EVENTO NO BOTAO
    document.getElementById('btnResposta').addEventListener('click', ()=>{
        showSolution();
    });
}


function showSolution()
{
    let JWT_TOKEN = getCookie('user_jwt');
    let ID_EXERCICIO = getExerciseId();

    if(JWT_TOKEN == null || ID_EXERCICIO == null){
        setTimeout(() => {
            showSolution();
            return;
        },800);
    }

    Swal.fire({
        title: 'Resolução Completa',
        html: `<iframe src="${DOMAIN}/solvedBookExercise?auth=${JWT_TOKEN}&exerciseId=${ID_EXERCICIO}" style='width: 100%; height: 100% !important; border: none;'></iframe>`,
        showCloseButton: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        customClass: {
            popup: 'respai',
            content: 'contentSolution',
            htmlContainer: 'contentSolution',
            header: 'headerPopup'
        }
    });
}


function getCookie(cname)
{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return null;
}


function getExerciseId()
{
    let fullURL = document.location.href;
    let urlParts = fullURL.split("/");
    return urlParts[urlParts.length-1];
}


function verificaElemento(elemento)
{
    return document.querySelector(elemento) != null;
}