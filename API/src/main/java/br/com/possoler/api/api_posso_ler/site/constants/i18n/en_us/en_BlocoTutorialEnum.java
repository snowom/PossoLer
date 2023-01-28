package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_BlocoTutorialEnum {

    TITULO_BLOCO_TUTORIAL("Tutorials"),
    LABEL_1("Tip: "),
    LABEL_2("Horizontally swipe the video to switch tutorials"),
    LABEL_3("Sorry, but your browser does not support HTML videos.");

    @Getter
    private String label;

    en_BlocoTutorialEnum(String label) {
        this.label = label;
    }
}
