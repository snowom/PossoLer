package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_BlocoComentarioEnum {

    TITULO_BLOCO_COMENTARIO("Comments");

    @Getter
    private String label;

    en_BlocoComentarioEnum(String label) {
        this.label = label;
    }
}
