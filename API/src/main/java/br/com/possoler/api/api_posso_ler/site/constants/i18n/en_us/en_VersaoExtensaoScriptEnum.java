package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_VersaoExtensaoScriptEnum {

    LABEL_1("No version of <strong>Posso Ler?</strong> found"),
    LABEL_2("Installation"),
    LABEL_3("Retrieve access key"),
    LABEL_4("What's new?");

    @Getter
    private String label;

    en_VersaoExtensaoScriptEnum(String label) {
        this.label = label;
    }
}
