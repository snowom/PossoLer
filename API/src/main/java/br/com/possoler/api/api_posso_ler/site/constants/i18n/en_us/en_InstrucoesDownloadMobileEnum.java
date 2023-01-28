package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_InstrucoesDownloadMobileEnum {
    LABEL_1("I still don't have the extension installed on my phone or I need to update it:"),
    LABEL_2("Did you see the step by step and find it complicated? Relax, we have a video tutorial to help you with this!"),
    LABEL_3("Download the extension on your mobile by clicking <a id=\"btnDownloadMob\" href=\"\">HERE</a>"),
    LABEL_4("Copy the access key provided"),
    LABEL_5("Install the <a href=\"https://play.google.com/store/apps/details?id=com.kiwibrowser.browser\">Kiwi Browser - Fast & Quiet</a>. (Skip step if you already have it installed)"),
    LABEL_6("When opening the browser, in the upper right corner, tap the icon represented by “three dots” on your home screen and go to “Extensions”."),
    LABEL_7("In the upper right corner of the screen, click on the flag called <strong>\"Developer Mode\"</strong> so that it stays on."),
    LABEL_8("When enabling the flag, 4 buttons will appear: <strong>\"+(from store)\"</strong>, <strong>\"+(from .zip/.crx/.user.js)\"</strong>, <strong>\"Pack extension\"</strong> and <strong>\"Refresh\"</strong>. Click on the second button: <strong>\"+(from .zip/.crx/.user.js)\"</strong>. If you are asked to choose an action, please select your <strong>file manager</strong>."),
    LABEL_9("Navigate to where the extension was downloaded (usually in the Downloads folder) and click on the <strong>PossoLer.crx</strong> file"),
    LABEL_10("Next, you can see that the extension has already been added in the browser, but it is still <strong>not enabled</strong>. To enable it, just click on the flag located at the bottom of the extension card (located to the right of the remove button) so that it stays on."),
    LABEL_11("A popup will appear stating that the extension has been disabled because it requires more permissions. Click <strong>OK</strong>"),
    LABEL_12("Next, go to the site you want to see the unlocked content."),
    LABEL_13("After entering the site, the extension will show a popup asking for the <strong>passkey</strong> to activate the extension."),
    LABEL_14("Paste the access key you copied when downloading the extension into the requested field and wait for the activation to complete."),
    LABEL_15("<em>Voila!</em> You've successfully installed the extension and are ready to start using it!"),
    LABEL_16("Observation: "),
    LABEL_17("This key will only be asked for the first time you install the extension. If the extension is uninstalled from the browser or if you clear the browser data, it will be necessary generate a new access key.");
    @Getter
    private String label;

    en_InstrucoesDownloadMobileEnum(String label) {
        this.label = label;
    }
}
