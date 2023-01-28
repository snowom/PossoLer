package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_BlocoDownloadEnum {
    LABEL_PESSOAS_ACESSO(" pessoas já tem acesso a conteúdo livre e de qualidade"),
    LABEL_DOWNLOAD("Download"),
    LABEL_PLATAFORMA_DOWNLOAD("Selecione a plataforma"),
    LABEL_OPCOES("Opções"),
    LABEL_DESKTOP_DOWNLOAD("Desktop"),
    LABEL_MOBILE_DOWNLOAD("Mobile - Apenas Android");

    @Getter
    private String label;

    br_BlocoDownloadEnum(String label) {
        this.label = label;
    }
}
