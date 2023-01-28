package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_BlocoComentarioEnum {

    TITULO_BLOCO_COMENTARIO("Comentarios");

    @Getter
    private String label;

    es_BlocoComentarioEnum(String label) {
        this.label = label;
    }
}
