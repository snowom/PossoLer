package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_GlideScriptEnum {

    LABEL_1("Instalación desktop - Script de usuario"),
    LABEL_2("Instalación en un dispositivo Android"),
    LABEL_3("Actualización desktop: Script de usuario");

    @Getter
    private String label;

    es_GlideScriptEnum(String label) {
        this.label = label;
    }
}
