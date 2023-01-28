package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_FooterEnum {

    LABEL_1("Obrigado por fazer a diferença."),
    LABEL_2("O direito à informação é considerado um direito fundamental numa sociedade democrática"),
    LABEL_3("© 2021 Posso Ler?. Todos os direitos reservados. Criado e idealizado por Thomaz Ferreira"),
    LABEL_4("Made with ❤️by Thomaz Ferreira");

    @Getter
    private String label;

    br_FooterEnum(String label) {
        this.label = label;
    }
}
