package br.com.possoler.api.api_posso_ler.site.constants.i18n.en_us;

import lombok.Getter;

public enum en_CardChangelogEnum {
    LABEL_1("Details"),
    LABEL_2("Extension Version: "),
    LABEL_3("Publication date: "),
    LABEL_4("Installed version: "),
    LABEL_5(" - Download the latest version <a id=\"linkInstalacao\" href=\"\">HERE</a>"),
    LABEL_6("What's new in this version?"),
    LABEL_7(
    "<li class=\"lead\">System migration to Java</li>" +
        "<li class=\"lead\">Added support for Vimeo videos in Responde Aí</li>" +
        "<li class=\"lead\">10KB reduction in mobile extension size</li>"
    ),
    LABEL_8(
        "<li class=\"lead\">Extension Performance Improvements</li>" +
        "<li class=\"lead\">Fixed some bugs in previous versions</li>"
    ),
    LABEL_9("View full changelog");

    @Getter
    private String label;

    en_CardChangelogEnum(String label) {
        this.label = label;
    }
}
