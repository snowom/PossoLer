package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_ConteudosEnum {
    LABEL_QUANTIDADE_CONTEUDOS(" exclusive contents have already been accessed freely");

    @Getter
    private String label;

    en_ConteudosEnum(String label) {
        this.label = label;
    }
}
