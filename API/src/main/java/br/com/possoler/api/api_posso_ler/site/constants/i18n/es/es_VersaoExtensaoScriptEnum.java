package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_VersaoExtensaoScriptEnum {

    LABEL_1("No se encontró ninguna versión de <strong>Posso Ler?</strong>"),
    LABEL_2("Instalación"),
    LABEL_3("Recuperar clave de acceso"),
    LABEL_4("¿Que hay de nuevo?");

    @Getter
    private String label;

    es_VersaoExtensaoScriptEnum(String label) {
        this.label = label;
    }
}
