package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_PageCopyHashEnum {
    LABEL_1("Clave de acceso"),
    LABEL_2("Copie y guarde la clave a continuación para habilitar la extensión. Después de habilitarlo, puede descartarlo.");

    @Getter
    private String label;

    es_PageCopyHashEnum(String label) {
        this.label = label;
    }
}
