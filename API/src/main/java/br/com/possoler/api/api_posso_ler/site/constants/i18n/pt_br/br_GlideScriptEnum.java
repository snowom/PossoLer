package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_GlideScriptEnum {

    LABEL_1("Instalação no desktop - User Script"),
    LABEL_2("Instalação em um dispositivo Android"),
    LABEL_3("Atualização no desktop  - User Script");

    @Getter
    private String label;

    br_GlideScriptEnum(String label) {
        this.label = label;
    }
}
