let btnGotoTop = document.getElementById("btnGotoTop");

function gotoTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function setBtnHome()
{
    try{
        let currentWidth = window.innerWidth;
        if (currentWidth>=540){
            btnGotoTop.style.display = "none";
        }else{
            btnGotoTop.style.display = "block";
            if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
                btnGotoTop.style.visibility = "visible";
                btnGotoTop.style.opacity = '1';
              } else {
                btnGotoTop.style.visibility = "hidden";
                btnGotoTop.style.opacity = '0';
              }
        }
    }catch(erro){
        alert(erro);
    }
}


window.addEventListener("scroll", ()=>{
    setBtnHome();
});

window.addEventListener('load', ()=>{
    setBtnHome();
});

window.addEventListener('resize', ()=>{
    setBtnHome();
});

btnGotoTop.addEventListener("click", ()=>{
    gotoTop();
});