package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_HeadEnum {
    LABEL_HEAD("¿Estás cansado de intentar ver noticias exclusivas para suscriptores? Si es así, ¡tenemos la solución a este problema! Con Posso Ler? puede ver noticias y contenido exclusivo de algunos sitios web y periódicos de forma gratuita.");

    @Getter
    private String label;

    es_HeadEnum(String label) {
        this.label = label;
    }
}
