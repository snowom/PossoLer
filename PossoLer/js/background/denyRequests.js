chrome.webRequest.onBeforeRequest.addListener(function(details){
    return {cancel: true};
   },
   {urls:[
        "https://www.rbsonline.com.br/cdn/scripts/paywall.min.js"
   ]},
   ["blocking"]);