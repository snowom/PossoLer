package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_BlocoDoacoesEnum {

    TITULO_BLOCO_DOACOES("Apoio e doações"),
    LABEL_1("Agradeço imensamente a todos vocês que estão baixando, usando, dando feedbacks e compartilhando o projeto! É muito legal e gratificante ver que ele está ajudando diversas pessoas e que está alcançando lugares onde jamais imaginei que chegaria!"),
    LABEL_2("Caso eu tenha ajudado você de alguma forma com o projeto e você queira me pagar um café, este é o "),
    LABEL_3("link para doação"),
    LABEL_4(". A doação pode ser feita também clicando no ícone da caneca de café com o título "),
    LABEL_5("#VaiUmCafe?"),
    LABEL_6(" localizado no menu lateral."),
    LABEL_7("Caso seja dev ou tenha Github, estrelas são muito bem vindas também!");

    @Getter
    private String label;

    br_BlocoDoacoesEnum(String label) {
        this.label = label;
    }
}
