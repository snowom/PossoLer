package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_CardChaveAcessoEnum {
    LABEL_1("Gerar nova chave de acesso"),
    LABEL_2("Gerando chave de acesso..."),
    LABEL_3("Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde<br><br><b>Código do erro: </b>"),
    LABEL_4("Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><b>Código do erro: </b>"),
    LABEL_5("Gerar nova chave de acesso"),
    LABEL_6("Perdeu sua chave de acesso e precisa de uma nova? "),
    LABEL_7("Sem problemas! Aqui você consegue uma nova para continuar a usar a extensão!"),
    LABEL_8("Tá, mas o que é e para que serve a chave de acesso?");

    @Getter
    private String label;

    br_CardChaveAcessoEnum(String label) {
        this.label = label;
    }
}
