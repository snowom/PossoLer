package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_PagFeriasEnum {
    LABEL_1("Holiday Notice (Read All Please)"),
    LABEL_2("Thank you for coming this far supporting the project!"),
    LABEL_3("Starting today, I'll give the project some time to rest a little. If you want to leave a comment or suggestion, feel free to write!"),
    LABEL_4("Last but not least, don't forget to "),
    LABEL_5("practice self-care. "),
    LABEL_6("Take time for yourself and do things that make you feel good! Remember you need to have fun and rest too!"),
    LABEL_7("Happy holidays to all and until 2023!");

    @Getter
    private String label;

    en_PagFeriasEnum(String label) {
        this.label = label;
    }
}
