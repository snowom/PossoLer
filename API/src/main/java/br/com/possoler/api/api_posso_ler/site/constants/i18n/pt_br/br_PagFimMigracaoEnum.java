package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_PagFimMigracaoEnum {

    LABEL_1("Fim da migração do sistema (Leia tudo por favor)"),
    LABEL_2("Falaaa galera! Tudo certo com vocês?"),
    LABEL_3("Finalmente, depois de quase 1 mês de trabalho, a migração do sistema foi concluída!"),
    LABEL_4("Agora, todo backend do projeto está rodando em "),
    LABEL_5("Java"),
    LABEL_6(", visando melhor performance e manutenibilidade, alta coesão e baixo acoplamento do código."),
    LABEL_7("Devido a essa migração, as "),
    LABEL_8("versões anteriores da extensão não funcionarão corretamente"),
    LABEL_9("Portanto, "),
    LABEL_10("será necessário fazer o download novamente da extensão"),
    LABEL_11(" na versão mais atual (2.7.6) disponível aqui no site."),
    LABEL_12("Também, "),
    LABEL_13("é aconselhável desinstalar qualquer versão anterior da extensão"),
    LABEL_14(" que esteja intalada em seu dispositivo antes de instalar a nova versão."),
    LABEL_15("Por fim, agradeço demais pelo apoio de vocês durante todo esse tempo de projeto!"),
    LABEL_16("Valeuzão e bora aproveitar a nova versão da extensão!");

    @Getter
    private String label;

    br_PagFimMigracaoEnum(String label) {
        this.label = label;
    }
}
