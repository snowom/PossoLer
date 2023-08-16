package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_PagAlertRespaiEnum {
    LABEL_1("Volta provisória do Responde Aí - \"Oi sumido, rs\""),
    LABEL_2("Recentemente, fixei um comentário no site informando que "),
    LABEL_3("estava pensando em parar"),
    LABEL_4(" com o suporte ao Responde Aí devido ao novo bloqueio que eles implementaram, e o que isso me levou a refletir."),
    LABEL_5("Combinei de conversar com a equipe de SEO do Responde Aí para saber realmente o quanto a extensão está afetando de forma negativa a empresa e, a partir disso, decidir se de fato pararei com o suporte ou não. Contudo, como não tive uma resposta por parte deles, pretendo continuar com o suporte."),
    LABEL_6("Ultimamente, vem sendo muito difícil dar suporte ao projeto "),
    LABEL_7("Posso Ler?"),
    LABEL_8(", pois sou apenas eu que cuido dele e ando bem ocupado com estudos, vida pessoal, e pensando em novos projetos que fazem mais sentido para meu crescimento profissional. Mas darei o máximo para manter o projeto vivo e o mais atualizado possível!");

    @Getter
    private String label;

    br_PagAlertRespaiEnum(String label) {
        this.label = label;
    }
}
