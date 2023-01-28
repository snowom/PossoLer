package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_BlocoComentarioEnum {

    TITULO_BLOCO_COMENTARIO("Comentários");

    @Getter
    private String label;

    br_BlocoComentarioEnum(String label) {
        this.label = label;
    }
}
