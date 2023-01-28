package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_PageCopyHashEnum {
    LABEL_1("Access key"),
    LABEL_2("Please copy and save the key below to enable the extension. After enabling, you can discard it.");

    @Getter
    private String label;

    en_PageCopyHashEnum(String label) {
        this.label = label;
    }
}
