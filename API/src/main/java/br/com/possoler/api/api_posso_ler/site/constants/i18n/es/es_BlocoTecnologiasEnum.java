package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_BlocoTecnologiasEnum {

    LABEL_TECNOLOGIAS_USADAS("Tecnologías usadas"),
    LABEL_1("En caso de que tenga curiosidad acerca de cómo se hace la extensión o incluso quiera programar su propia extensión, ¡aquí están las tecnologías principales utilizadas para dar vida al proyecto!"),
    LABEL_2("Javascript"),
    LABEL_3("Utilizado en 50% del proyecto, es el principal responsable de realizar las manipulaciones necesarias en el "),
    LABEL_4("DOM"),
    LABEL_5(" para que sea posible ver el contenido bloqueado en los sitios web."),
    LABEL_6("Java"),
    LABEL_7("Usado en el otro 50% del proyecto, el "),
    LABEL_8(" se considera el corazón del proyecto, donde se utiliza para construir las "),
    LABEL_9("APIs"),
    LABEL_10(" que realizan funciones vitales de la extensión y el sitio, como contar descargas, verificar y enviar notificaciones de actualización de la extensión. Con él también se hacen las APIs que desbloquean sitios con "),
    LABEL_11("hard paywall"),
    LABEL_12(" o que necesitan solicitudes que no se pueden realizar a través del frontend, como Valor Econômico, Jornal O Popular y Responde Aí."),
    LABEL_13("Frameworks y bibliotecas"),
    LABEL_14("Spring Framework"),
    LABEL_15("Es un framework desarrollado para la plataforma Java basado en patrones de diseño de inversión de control e inyección de dependencia. ¡Se compone de varios y completos módulos capaces de dar un impulso a la aplicación Java!"),
    LABEL_16("Axios"),
    LABEL_17("Axios es un cliente HTTP basado en Promises para realizar solicitudes."),
    LABEL_18("Lombok"),
    LABEL_19("Es una biblioteca de Java enfocada en la productividad y la reducción de código boilerplate que, a través de anotaciones añadidas al código, enseña al compilador durante el proceso de compilación a crear código Java."),
    LABEL_20("Maven"),
    LABEL_21("Es una herramienta de gestión y automatización para la obtención de dependencias y compilación de proyectos Java.");

    @Getter
    private String label;

    es_BlocoTecnologiasEnum(String label) {
        this.label = label;
    }
}
