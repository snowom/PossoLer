package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_BlocoTutorialEnum {

    TITULO_BLOCO_TUTORIAL("Tutoriales"),
    LABEL_1("Sugerencia: "),
    LABEL_2("Deslice horizontalmente el video para cambiar de tutoriales"),
    LABEL_3("Lo sentimos, pero su navegador no admite videos HTML.");

    @Getter
    private String label;

    es_BlocoTutorialEnum(String label) {
        this.label = label;
    }
}
