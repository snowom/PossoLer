package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_CardChangelogEnum {
    LABEL_1("Detalles"),
    LABEL_2("Versión de extensión: "),
    LABEL_3("Fecha de publicación: "),
    LABEL_4("Versión instalada: "),
    LABEL_5("- Descargue la última versión <a id=\"linkInstalacao\" href=\"\"> AQUÍ </a>"),
    LABEL_6("¿Que hay de nuevo en esta versión?"),
    LABEL_7(
    "<li class=\"lead\">Migración del sistema a Java</li>" +
        "<li class=\"lead\">Se agregó soporte para videos de Vimeo en Responde Aí</li>" +
        "<li class=\"lead\">Reducción de 10 KB en el tamaño de la extensión móvil</li>"
    ),
    LABEL_8(
        "<li class=\"lead\">Mejoras en el rendimiento de la extensión</li>" +
        "<li class=\"lead\">Se corrigieron algunos errores en versiones anteriores</li>"
    ),
    LABEL_9("Ver registro de cambios completo");

    @Getter
    private String label;

    es_CardChangelogEnum(String label) {
        this.label = label;
    }
}
