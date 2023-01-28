package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_FooterEnum {

    LABEL_1("Thanks for making a difference."),
    LABEL_2("The right to information is considered a fundamental right in a democratic society"),
    LABEL_3("© 2021 Posso Ler?. All rights reserved. Created and designed by Thomaz Ferreira"),
    LABEL_4("Made with ❤️by Thomaz Ferreira");

    @Getter
    private String label;

    en_FooterEnum(String label) {
        this.label = label;
    }
}
