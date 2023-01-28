package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_HeadEnum {
    LABEL_HEAD("Tired of trying to view news that is exclusive to subscribers? If yes, we have the solution to this problem! With the Posso Ler? you are able to view news and exclusive content from some websites and newspapers for free.");

    @Getter
    private String label;

    en_HeadEnum(String label) {
        this.label = label;
    }
}
