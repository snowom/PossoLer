let findAds = false;

let intervalAds = setInterval(() => {
    let iframes = document.querySelectorAll('iframe');
    for(let i=0; i<iframes.length; i++){
        let scriptsInIframe = iframes[i].contentWindow.document.querySelectorAll('script');
        for(let j=0; j<scriptsInIframe.length; j++){
            if(scriptsInIframe[j].getAttribute('src').includes('cdn.taboola')){
                iframes[i].remove();
                clearInterval(intervalAds);
                findAds = true;
                break;
            }
        }
        if(findAds) break;
    }
},800);