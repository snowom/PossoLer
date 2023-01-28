package br.com.possoler.api.api_posso_ler.site.constants.configs;

import lombok.Getter;

public enum ConstantsConfigs {
    LANG_EN("en"),
    LANG_ES("es"),
    LANG_BR("pt-br");

    @Getter
    private String idioma;

    ConstantsConfigs(String idioma) {
        this.idioma = idioma;
    }
}
