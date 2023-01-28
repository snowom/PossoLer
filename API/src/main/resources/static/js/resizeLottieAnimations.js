function resizeLotties()
{
    try{
        if(document.getElementById("lottie_new_access_key") != null){
            let lottieNewAccessKey = document.getElementById("lottie_new_access_key");
            let currentWidth = window.innerWidth;
            lottieNewAccessKey.style.display = (currentWidth>=390) ? "block" : "none"
        }
    }catch(erro){
        console.error(erro.toString());
    }
}

window.addEventListener('resize', ()=>{
    resizeLotties();
});