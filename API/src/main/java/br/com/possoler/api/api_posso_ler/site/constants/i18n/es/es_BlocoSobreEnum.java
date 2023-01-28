package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_BlocoSobreEnum {
    LABEL_SOBRE_POSSOLER("Acerca de Posso Ler?"),
    LABEL_1("Es un proyecto de "),
    LABEL_2("código abierto"),
    LABEL_3(" creado con el objetivo de democratizar el acceso a la información, porque en este momento, en medio de tantas "),
    LABEL_4("fake news"),
    LABEL_5(", y es más que imprescindible tener acceso a noticias y contenidos de fuentes fiables. Con la extensión "),
    LABEL_6(", puede omitir el paywall y ver contenido exclusivo para los suscriptores de los siguientes sitios:"),
    LABEL_7("Tenga en cuenta: "),
    LABEL_8("Recuerde que los periódicos tienen que pagar a sus empleados y las suscripciones son una fuente de ingresos para ello. Al usar \"Posso Ler?\" "),
    LABEL_9("NO USE"),
    LABEL_10(" bloqueadores de anuncios, ya que los periódicos también necesitan una fuente de ingresos para seguir funcionando.");

    @Getter
    private String label;

    es_BlocoSobreEnum(String label) {
        this.label = label;
    }
}
