package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_HeadEnum {
    LABEL_HEAD("Cansado de tentar visualizar notícias que são exclusivas para assinantes? Se sim, temos a solução para esse problema! Com a extensão Posso Ler? você é capaz de visualizar gratuitamente notícias e conteúdos exclusivos de alguns sites e jornais");

    @Getter
    private String label;

    br_HeadEnum(String label) {
        this.label = label;
    }
}