package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_MenuLateralEnum {

    MENU_LATERAL_MENU("Menu"),
    MENU_LATERAL_INICIO("Início"),
    MENU_LATERAL_DOWNLOAD("Download"),
    MENU_LATERAL_SOBRE("Sobre"),
    MENU_LATERAL_APOIAR("Apoiar"),
    MENU_LATERAL_PERGUNTAS("Perguntas"),
    MENU_LATERAL_TECNOLOGIAS("Tecnologias"),
    MENU_LATERAL_TUTORIAIS("Tutoriais"),
    MENU_LATERAL_COMENTARIOS("Comentários"),
    MENU_LATERAL_VAIUMCAFE("#VaiUmCafe?");

    @Getter
    private String word;

    br_MenuLateralEnum(String word) {
        this.word = word;
    }
}
