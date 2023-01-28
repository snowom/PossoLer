package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_BlocoDoacoesEnum {

    TITULO_BLOCO_DOACOES("Support and donations"),
    LABEL_1("I am immensely grateful to all of you who are downloading, using, giving feedback and sharing the project! It's really cool and gratifying to see that he's helping so many people and that he's reaching places I never thought I would!"),
    LABEL_2("If I have helped you in any way with the project and you want to buy me a cup of coffee, this is the "),
    LABEL_3("link to donate"),
    LABEL_4(". The donation can also be made by clicking on the coffee mug icon with the title "),
    LABEL_5("#WantACoffee?"),
    LABEL_6(" located in the side menu."),
    LABEL_7("If you are dev or have Github, stars are very welcome too!");

    @Getter
    private String label;

    en_BlocoDoacoesEnum(String label) {
        this.label = label;
    }
}
