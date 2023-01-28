package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_GlideScriptEnum {

    LABEL_1("Desktop Installation - User Script"),
    LABEL_2("Installation on an Android device"),
    LABEL_3("Desktop Update - User Script");

    @Getter
    private String label;

    en_GlideScriptEnum(String label) {
        this.label = label;
    }
}
