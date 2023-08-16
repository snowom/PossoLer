package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_MenuLateralEnum {

    MENU_LATERAL_MENU("Menu"),
    MENU_LATERAL_INICIO("Home"),
    MENU_LATERAL_DOWNLOAD("Download"),
    MENU_LATERAL_SOBRE("About"),
    MENU_LATERAL_APOIAR("Donate"),
    MENU_LATERAL_PERGUNTAS("Asks"),
    MENU_LATERAL_TECNOLOGIAS("Technologies"),
    MENU_LATERAL_TUTORIAIS("Tutorials"),
    MENU_LATERAL_SOBREMIM("About_Me"),
    MENU_LATERAL_COMENTARIOS("Comments"),
    MENU_LATERAL_VAIUMCAFE("#WantACoffee?");

    @Getter
    private String word;

    en_MenuLateralEnum(String word) {
        this.word = word;
    }
}
