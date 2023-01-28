package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_BlocoSobreEnum {
    LABEL_SOBRE_POSSOLER("About Posso Ler?"),
    LABEL_1("It is an "),
    LABEL_2("open source project"),
    LABEL_3(" created with the aim of democratizing access to information, because at this moment, in the midst of so many "),
    LABEL_4("fake news"),
    LABEL_5(", it is more than essential to have access to news and content from reliable sources. With the "),
    LABEL_6(" extension, you are able to bypass the paywall and view exclusive content for subscribers of the following sites:"),
    LABEL_7("Please note: "),
    LABEL_8("Remember that newspapers have to pay their employees and subscriptions are a source of income for this. When using \"Posso Ler?\" "),
    LABEL_9("DON'T USE"),
    LABEL_10(" Ad blockers, as newspapers also need a source of income to keep them running.");

    @Getter
    private String label;

    en_BlocoSobreEnum(String label) {
        this.label = label;
    }
}
