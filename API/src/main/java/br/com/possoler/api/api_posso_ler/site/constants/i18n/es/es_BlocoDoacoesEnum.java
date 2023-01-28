package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_BlocoDoacoesEnum {

    TITULO_BLOCO_DOACOES("Apoyo y donaciones"),
    LABEL_1("¡Estoy inmensamente agradecido con todos ustedes que están descargando, usando, dando retroalimentación y compartiendo el proyecto! ¡Es realmente genial y gratificante ver que está ayudando a mucha gente y que está llegando a lugares que nunca imaginé que llegaría!"),
    LABEL_2("Si te he ayudado de alguna manera con el proyecto y quieres comprarme una taza de café, este es el "),
    LABEL_3("enlace para donar"),
    LABEL_4(". La donación también se puede hacer haciendo clic en el icono de la taza de café con el título "),
    LABEL_5("#¿VasAUnCafé?"),
    LABEL_6(" ubicado en el menú lateral."),
    LABEL_7("Si eres desarrollador o tienes Github, ¡las estrellas también son bienvenidas!");

    @Getter
    private String label;

    es_BlocoDoacoesEnum(String label) {
        this.label = label;
    }
}
