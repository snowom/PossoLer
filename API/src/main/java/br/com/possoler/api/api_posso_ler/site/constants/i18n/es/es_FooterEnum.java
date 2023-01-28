package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_FooterEnum {

    LABEL_1("Gracias por hacer la diferencia."),
    LABEL_2("El derecho a la información se considera un derecho fundamental en una sociedad democrática"),
    LABEL_3("© 2021 Posso Ler?. Todos los derechos reservados. Creado y diseñado por Thomaz Ferreira"),
    LABEL_4("Made with ❤️by Thomaz Ferreira");

    @Getter
    private String label;

    es_FooterEnum(String label) {
        this.label = label;
    }
}
