package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_PagAlertRespaiEnum {
    LABEL_1("Temporary return of Responde Aí"),
    LABEL_2("I recently pinned a comment on the site stating that"),
    LABEL_3("i was thinking of stopping"),
    LABEL_4(" with the support of Responde There due to the new block they implemented, and what that made me think about."),
    LABEL_5("I agreed to talk with the SEO team at Responde Aí to really find out how much the extension is negatively affecting the company and, based on that, decide whether i will actually stop supporting it or not. However, since i haven't heard back from them, i intend to continue with support."),
    LABEL_6("Lately it has been very difficult to support the project"),
    LABEL_7("Posso Ler?"),
    LABEL_8(", because i'm the only one who takes care of him and i've been very busy with studies, personal life, and thinking about new projects that make more sense for my professional growth. But i'll do my best to keep the project alive and as up to date as possible!");

    @Getter
    private String label;

    en_PagAlertRespaiEnum(String label) {
        this.label = label;
    }
}
