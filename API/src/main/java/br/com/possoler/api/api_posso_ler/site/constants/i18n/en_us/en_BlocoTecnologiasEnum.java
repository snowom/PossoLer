package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_BlocoTecnologiasEnum {

    LABEL_TECNOLOGIAS_USADAS("Used technologies"),
    LABEL_1("In case you were curious about how the extension is made or even want to program your own extension, here are the principal technologies used to bring the project to life!"),
    LABEL_2("Javascript"),
    LABEL_3("Used in 50% of the project, it is primarily responsible for making the necessary manipulations on the "),
    LABEL_4("DOM"),
    LABEL_5(" so that it is possible to view blocked content on websites."),
    LABEL_6("Java"),
    LABEL_7("Used in the other 50% of the project, the "),
    LABEL_8(" is considered the heart of the project, where it is used to build the "),
    LABEL_9("APIs"),
    LABEL_10(" that perform vital functions of the extension and the site, such as counting downloads, checking and sending update notifications of the extension. With it are also made the APIs that unblock sites with "),
    LABEL_11("hard paywall"),
    LABEL_12(" or who need requests that cannot be made through the frontend, such as Valor Econômico, Jornal O Popular, and Responde Aí."),
    LABEL_13("Frameworks and Libraries"),
    LABEL_14("Spring Framework"),
    LABEL_15("It is a framework developed for the Java platform based on inversion of control and dependency injection design patterns. It consists of several and complete modules capable of giving a boost to the Java application!"),
    LABEL_16("Axios"),
    LABEL_17("Axios is a Promise based HTTP client for making requests."),
    LABEL_18("Lombok"),
    LABEL_19("It is a Java library focused on productivity and boilerplate code reduction that, through annotations added to the code, teaches the compiler during the compilation process to create Java code."),
    LABEL_20("Maven"),
    LABEL_21("It is a management and automation tool for obtaining dependencies and compiling Java projects.");

    @Getter
    private String label;

    en_BlocoTecnologiasEnum(String label) {
        this.label = label;
    }
}
