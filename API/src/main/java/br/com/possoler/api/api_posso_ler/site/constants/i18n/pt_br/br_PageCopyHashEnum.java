package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_PageCopyHashEnum {
    LABEL_1("Chave de acesso"),
    LABEL_2("Por favor, copie e guarde a chave abaixo para habilitar a extensão. Após a habilitação, você poderá descartá-la.");

    @Getter
    private String label;

    br_PageCopyHashEnum(String label) {
        this.label = label;
    }
}
