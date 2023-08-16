package br.com.possoler.api.api_posso_ler.api.cdn.constants;

import lombok.Getter;

public enum CDNEnum {
    BLOCK_CORE_PAYWALL("blockCorePaywall", "[FF]blockCorePaywall.js"),
    SNACKBAR_JS("snackjs", "snackbar.js"),
    SNACKBAR_CSS("snackcss", "snackbar.css"),
    AXIOS_LOGO("axioslogo", "img/axiosJS.png"),
    MAVEN_LOGO("mavenlogo", "img/maven.png"),
    LOMBOK_LOGO("lomboklogo", "img/lombok.png"),
    SPRING_LOGO("springlogo", "img/spring.png"),
    POSSOLER_LOGO("possolerlogo", "img/128.png"),
    RESPONDE_AI_LOGO("respondeailogo", "img/respai.png");

    @Getter
    private final String fileParamName;
    @Getter
    private final String filename;

    CDNEnum(String fileParamName, String filename) {
        this.fileParamName = fileParamName;
        this.filename = filename;
    }
}
