package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_CardChaveAcessoEnum {
    LABEL_1("Generate new access key"),
    LABEL_2("Generating access key..."),
    LABEL_3("Oops, we had a little problem!<br>Please try again later<br><br><b>Error code: </b>"),
    LABEL_4("Oops, we had a little problem!<br>Please try again using a faster connection.<br><br><b>Error code: </b>"),
    LABEL_5("Generate new access key"),
    LABEL_6("Lost your passkey and need a new one? "),
    LABEL_7("No problems! Here you get a new one to continue using the extension!"),
    LABEL_8("Okay, but what is the access key and what is it for?");

    @Getter
    private String label;

    en_CardChaveAcessoEnum(String label) {
        this.label = label;
    }
}
