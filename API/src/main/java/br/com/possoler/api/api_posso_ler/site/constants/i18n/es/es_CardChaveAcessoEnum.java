package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_CardChaveAcessoEnum {
    LABEL_1("Generar nueva clave de acceso"),
    LABEL_2("Generando clave de acceso..."),
    LABEL_3("¡Vaya, tuvimos un pequeño problema!<br>Inténtalo de nuevo más tarde<br><br><b>Código de error: </b>"),
    LABEL_4("¡Vaya, tuvimos un pequeño problema!<br>Vuelva a intentarlo con una conexión más rápida.<br><br><b>Código de error: </b>"),
    LABEL_5("Generar nueva clave de acceso"),
    LABEL_6("¿Perdió su clave de acceso y necesita una nueva? "),
    LABEL_7("¡Sin problemas! ¡Aquí tienes uno nuevo para seguir usando la extensión!"),
    LABEL_8("Bien, pero ¿qué es la clave de acceso y para qué sirve?");

    @Getter
    private String label;

    es_CardChaveAcessoEnum(String label) {
        this.label = label;
    }
}
