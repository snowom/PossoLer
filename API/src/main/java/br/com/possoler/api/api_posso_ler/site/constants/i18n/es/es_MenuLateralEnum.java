package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_MenuLateralEnum {

    MENU_LATERAL_MENU("Menú"),
    MENU_LATERAL_INICIO("Comienzo"),
    MENU_LATERAL_DOWNLOAD("Descargar"),
    MENU_LATERAL_SOBRE("Sobre"),
    MENU_LATERAL_APOIAR("Donación"),
    MENU_LATERAL_PERGUNTAS("Preguntas"),
    MENU_LATERAL_TECNOLOGIAS("Tecnologías"),
    MENU_LATERAL_TUTORIAIS("Tutoriales"),
    MENU_LATERAL_COMENTARIOS("Comentarios"),
    MENU_LATERAL_VAIUMCAFE("#¿VasAUnCafé?");

    @Getter
    private String word;

    es_MenuLateralEnum(String word) {
        this.word = word;
    }
}
