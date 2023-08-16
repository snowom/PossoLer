package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_PagAlertRespaiEnum {
    LABEL_1("Regreso temporal de Responde Aí"),
    LABEL_2("Recientemente fijé un comentario en el sitio que decía que "),
    LABEL_3("estaba pensando en parar"),
    LABEL_4(" con el apoyo de Responde Aí por el nuevo bloque que implementaron, y lo que me hizo pensar."),
    LABEL_5("Acepté hablar con el equipo de SEO de Responde Aí para averiguar realmente cuánto está afectando negativamente la extensión a la empresa y, en base a eso, decidir si dejaré de apoyarla o no. Sin embargo, como no tuve una respuesta de ellos, tengo la intención de continuar con el apoyo."),
    LABEL_6("Últimamente ha sido muy difícil apoyar el proyecto "),
    LABEL_7("Posso Ler?"),
    LABEL_8(", porque soy el único que lo cuida y últimamente, he estado muy ocupado con los estudios, la vida personal y pensando en nuevos proyectos que tengan más sentido para mi crecimiento profesional. ¡Pero haré todo lo posible para mantener vivo el proyecto y lo más actualizado posible!");

    @Getter
    private String label;

    es_PagAlertRespaiEnum(String label) {
        this.label = label;
    }
}