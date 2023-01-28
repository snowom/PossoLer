package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_ConteudosEnum {
    LABEL_QUANTIDADE_CONTEUDOS(" conteúdos exclusivos já foram acessados livremente");

    @Getter
    private String label;

    br_ConteudosEnum(String label) {
        this.label = label;
    }
}