let blocoIdioma = document.getElementById('blocoIdioma');
let formIdioma = document.getElementById('formIdioma');
let inputHiddenLang = document.getElementById('inputHiddenLang');
let imgFlag = document.getElementById('imgFlag');
let textIdioma = document.getElementById('textIdioma');
let cont = 1;

const languages = [
    {
        lang: 'pt-br',
        flag_32: '../img/flags/br_32.png',
        flag_28: '../img/flags/br_28.png',
        text: 'Fala Português?',
    },
    {
        lang: 'en',
        flag_32: '../img/flags/eua_32.png',
        flag_28: '../img/flags/eua_28.png',
        text: 'Speak English?',
    },
    {
        lang: 'es',
        flag_32: '../img/flags/es_32.png',
        flag_28: '../img/flags/es_28.png',
        text: '¿Hablas Español?',
    }
];


window.addEventListener('resize', ()=>{
    resizeLanguageMenu();
});

window.addEventListener('load', ()=>{
    formIdioma.style.display = 'block';
    imgFlag.setAttribute('src', (window.innerWidth<=992) ? languages[0].flag_28 : languages[0].flag_32);
    textIdioma.textContent = languages[0].text;
    inputHiddenLang.value = languages[0].lang;
    setBlocoIdioma(cont);
    resizeLanguageMenu();
});


function setBlocoIdioma(pos)
{
    setTimeout(()=>{
        inputHiddenLang.value = languages[pos].lang;
        imgFlag.setAttribute('src', (window.innerWidth<=992) ? languages[pos].flag_28 : languages[pos].flag_32);
        textIdioma.textContent = languages[pos].text;
        if(cont == languages.length-1) {
            cont = 0;
            setBlocoIdioma(cont);
        }else{
            cont++;
            setBlocoIdioma(cont);
        }
    },5000);
}


function resizeLanguageMenu()
{
    try{
        if(window.innerWidth<=992){
            textIdioma.style.display = 'none';
            blocoIdioma.style.cssText = `
                position: absolute;
                top: 0%;
                width: 60px;
                z-index: 99; /* Make sure it does not overlap */
                right: 0.1px; /* Place the button 30px from the right */
                border: none; /* Remove borders */
                border-radius: 0px 0px 5px 5px;
                outline: none; /* Remove outline */
                background-color: #192027; /* Set a background color */
                color: #fff; /* Text color */
                cursor: pointer; /* Add a mouse pointer on hover */
                padding: 15px; /* Some padding */
                font-size: 16px; /* Increase font size */
                -webkit-box-shadow: 10px 5px 5px 0 rgb(0 0 0 / 20%), 10px 5px 10px 0 rgb(0 0 0 / 10%);
                box-shadow: 10px 5px 5px 0 rgb(0 0 0 / 20%), 10px 5px 10px 0 rgb(0 0 0 / 10%);
            
                -webkit-transition: opacity 600ms, visibility 600ms;
                transition: opacity 600ms, visibility 600ms;
            `;
        }else{
            textIdioma.style.display = 'block';
            blocoIdioma.style.cssText = `
                position: fixed;
                top: 0%;
                width: 250px;
                z-index: 99; /* Make sure it does not overlap */
                right: 0.1px; /* Place the button 30px from the right */
                border: none; /* Remove borders */
                border-radius: 0px 0px 5px 5px;
                outline: none; /* Remove outline */
                background-color: #192027; /* Set a background color */
                color: #fff; /* Text color */
                cursor: pointer; /* Add a mouse pointer on hover */
                padding: 15px; /* Some padding */
                font-size: 16px; /* Increase font size */
                -webkit-box-shadow: 10px 5px 5px 0 rgb(0 0 0 / 20%), 10px 5px 10px 0 rgb(0 0 0 / 10%);
                box-shadow: 10px 5px 5px 0 rgb(0 0 0 / 20%), 10px 5px 10px 0 rgb(0 0 0 / 10%);
            
                -webkit-transition: opacity 600ms, visibility 600ms;
                transition: opacity 600ms, visibility 600ms;
            `;
        }
    }catch(erro){
        console.error("Erro ao pegar largura da tela!!!");
    }
}