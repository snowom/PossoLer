package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_BlocoDownloadEnum {
    LABEL_PESSOAS_ACESSO(" personas ya tienen acceso a contenido gratuito y de calidad"),
    LABEL_DOWNLOAD("Descargar"),
    LABEL_PLATAFORMA_DOWNLOAD("Seleccionar plataforma"),
    LABEL_OPCOES("Opciones"),
    LABEL_DESKTOP_DOWNLOAD("Desktop"),
    LABEL_MOBILE_DOWNLOAD("Mobile - Solo Android");

    @Getter
    private String label;

    es_BlocoDownloadEnum(String label) {
        this.label = label;
    }
}
