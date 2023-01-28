package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_VersaoExtensaoScriptEnum {

    LABEL_1("Nenhuma versão do <strong>Posso Ler?</strong> foi encontrada"),
    LABEL_2("Instalação"),
    LABEL_3("Recuperar chave de acesso"),
    LABEL_4("O que há de novo?");

    @Getter
    private String label;

    br_VersaoExtensaoScriptEnum(String label) {
        this.label = label;
    }
}
