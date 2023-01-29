package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_PagFimMigracaoEnum {

    LABEL_1("Fin de la migración del sistema (Léalo todo, por favor)"),
    LABEL_2("¡Hola, chicos! ¿Todo bien contigo?"),
    LABEL_3("Finalmente, después de casi 1 mes de trabajo, ¡se completó la migración del sistema!"),
    LABEL_4("Ahora, todo el backend del proyecto se está ejecutando en "),
    LABEL_5("Java"),
    LABEL_6(", con el objetivo de un mejor rendimiento y mantenibilidad, alta cohesión y bajo acoplamiento de código."),
    LABEL_7("Debido a esta migración, la "),
    LABEL_8("las versiones anteriores de la extensión no funcionarán correctamente"),
    LABEL_9("Por lo tanto, "),
    LABEL_10("tendrás que descargar la extensión de nuevo"),
    LABEL_11(" en la versión más actual (2.7.6) disponible aquí en el sitio."),
    LABEL_12("También, "),
    LABEL_13("es recomendable desinstalar cualquier versión anterior de la extensión"),
    LABEL_14(" que está instalado en su dispositivo antes de instalar la nueva versión."),
    LABEL_15("Finalmente, ¡muchas gracias por su apoyo a lo largo de este tiempo de proyecto!");

    @Getter
    private String label;

    es_PagFimMigracaoEnum(String label) {
        this.label = label;
    }
}
