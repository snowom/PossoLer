package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_BlocoTutorialEnum {

    TITULO_BLOCO_TUTORIAL("Tutoriais"),
    LABEL_1("Dica: "),
    LABEL_2("Deslize horizontalmente o video para mudar de tutorial"),
    LABEL_3("Desculpe, mas seu navegador não suporta videos em HTML.");

    @Getter
    private String label;

    br_BlocoTutorialEnum(String label) {
        this.label = label;
    }
}
