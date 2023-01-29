package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_PagFimMigracaoEnum {

    LABEL_1("End of system migration (Read all, please)"),
    LABEL_2("Hey guys! Everything alright with you?"),
    LABEL_3("Finally, after almost 1 month of work, the system migration was completed!"),
    LABEL_4("Now, the entire backend of the project is running on "),
    LABEL_5("Java"),
    LABEL_6(", aiming at better performance and maintainability, high cohesion and low code coupling."),
    LABEL_7("Due to this migration, the "),
    LABEL_8("previous versions of the extension will not work correctly"),
    LABEL_9("Therefore, "),
    LABEL_10("you will need to download the extension again"),
    LABEL_11(" in the most current version (2.7.6) available here on the site."),
    LABEL_12("Also, "),
    LABEL_13("it is advisable to uninstall any previous version of the extension"),
    LABEL_14(" that is installed on your device before installing the new version."),
    LABEL_15("Finally, thank you so much for your support throughout this project time!"),
    LABEL_16("Thanks and let's take advantage of the new version of the extension!");

    @Getter
    private String label;

    en_PagFimMigracaoEnum(String label) {
        this.label = label;
    }
}
