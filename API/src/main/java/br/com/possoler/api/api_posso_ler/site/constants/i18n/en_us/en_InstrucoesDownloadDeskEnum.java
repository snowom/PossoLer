package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_InstrucoesDownloadDeskEnum {
    LABEL_1("I still don't have the extension installed on my computer:"),
    LABEL_2("Install the extension "),
    LABEL_3("Download the file "),
    LABEL_4("Copy the provided access key"),
    LABEL_5("Add the file <b>PossoLer.user.js</b> to Tampermonkey"),
    LABEL_6("Next, go to the site you want to see the unlocked content."),
    LABEL_7("After entering the site, the extension will show a popup asking for the <strong>passkey</strong> to activate the extension."),
    LABEL_8("Paste the access key you copied when downloading the extension (step 3) into the requested field and wait for the activation to complete."),
    LABEL_9("<em>Voila!</em> You've successfully installed the extension and are ready to start using it!</spam>"),
    LABEL_10("<strong>Note: </strong>You will only be prompted for the passkey the first time you run the extension. If the extension is uninstalled from the browser or if you clear the browser data, it will be necessary to download the extension again here on the website so that a new access key is generated."),
    LABEL_11("Heads up: "),
    LABEL_12("The extension is built on top of Google Chrome, so it <strong>must be used on it</strong>. If used in another browser, it may not work as expected."),
    LABEL_13("<a class=\"small_Lead\" id=\"linkTutDesk\" href=\"\"><spam style=\"font-size: 16px\">Having difficulties with the walkthrough? Relax, we have a video tutorial to help you with that!</spam></a>"),
    LABEL_14("I already have the extension installed and I just need to update it:"),
    LABEL_15(" Enter Tampermonkey and delete the old version of the \"Posso Ler?\" extension"),
    LABEL_16("Download the file"),
    LABEL_17("<spam class=\"small_Lead\"><strong>3)</strong> Add the file <b>PossoLer.user.js</b> to Tampermonkey and <em>voila!</em> You managed to update and now you can enjoy the news of the new version!</spam>"),
    LABEL_18("<a class=\"small_Lead\" id=\"linkTutAtt\" href=\"\"><spam style=\"font-size: 16px\">Having difficulties with the walkthrough? Relax, we have a video tutorial to help you with that!</spam></a>");

    @Getter
    private String label;

    en_InstrucoesDownloadDeskEnum(String label) {
        this.label = label;
    }
}
