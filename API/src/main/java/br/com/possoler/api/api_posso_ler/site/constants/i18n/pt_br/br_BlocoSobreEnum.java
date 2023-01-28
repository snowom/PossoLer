package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_BlocoSobreEnum {
    LABEL_SOBRE_POSSOLER("Sobre o Posso Ler?"),
    LABEL_1("É um projeto "),
    LABEL_2("open source"),
    LABEL_3(" criado com o intuito de democratizar o acesso à informação, pois nesse momento, em meio a tantas "),
    LABEL_4("fake news"),
    LABEL_5(", é mais que fundamental ter acesso a notícias e conteúdos de fontes confiáveis. Com a extensão "),
    LABEL_6(", você é capaz de burlar o paywall e visualizar conteúdos exclusivos para assinantes dos seguintes sites:"),
    LABEL_7("Atenção: "),
    LABEL_8("Lembre-se de que os jornais precisam pagar seus funcionários e que as assinaturas são uma fonte de renda para isso. Ao usar o \"Posso Ler?\" "),
    LABEL_9("NÃO USE"),
    LABEL_10(" Ad blockers, pois os jornais também necessitam de uma fonte de renda para manter seu funcionamento.");

    @Getter
    private String label;

    br_BlocoSobreEnum(String label) {
        this.label = label;
    }
}
