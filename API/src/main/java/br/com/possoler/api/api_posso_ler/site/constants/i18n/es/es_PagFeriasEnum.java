package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_PagFeriasEnum {
    LABEL_1("Aviso de vacaciones (Léalo todo, por favor)"),
    LABEL_2("¡Gracias por venir aquí para apoyar el proyecto!"),
    LABEL_3("¡A partir de hoy, le daré tiempo al proyecto para que descanse un poco. Si desea dejar un comentario o sugerencia, ¡no dudes en escribirnos!"),
    LABEL_4("Por último, pero no menos importante, no olvide de "),
    LABEL_5("practicar el cuidado personal. "),
    LABEL_6("¡Tómate un tiempo para ti y haz cosas que te hagan sentir bien! ¡Recuerda que también necesitas divertirte y descansar!"),
    LABEL_7("¡Felices vacaciones a todos y hasta el 2023!");

    @Getter
    private String label;

    es_PagFeriasEnum(String label) {
        this.label = label;
    }
}
