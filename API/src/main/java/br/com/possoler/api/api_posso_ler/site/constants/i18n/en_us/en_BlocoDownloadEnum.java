package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_BlocoDownloadEnum {
    LABEL_PESSOAS_ACESSO(" people already have access to free and quality content"),
    LABEL_DOWNLOAD("Download"),
    LABEL_PLATAFORMA_DOWNLOAD("Select platform"),
    LABEL_OPCOES("Options"),
    LABEL_DESKTOP_DOWNLOAD("Desktop"),
    LABEL_MOBILE_DOWNLOAD("Mobile - Android only");

    @Getter
    private String label;

    en_BlocoDownloadEnum(String label) {
        this.label = label;
    }
}
