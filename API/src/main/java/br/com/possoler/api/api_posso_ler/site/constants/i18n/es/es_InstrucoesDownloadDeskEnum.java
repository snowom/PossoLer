package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_InstrucoesDownloadDeskEnum {
    LABEL_1("Todavía no tengo la extensión instalada en mi computadora:"),
    LABEL_2("Instalar la extensión "),
    LABEL_3("Descargar el archivo "),
    LABEL_4("Copiar la clave de acceso proporcionada"),
    LABEL_5("Agregue el archivo <b>PossoLer.user.js</b> a Tampermonkey"),
    LABEL_6("Luego, vaya al sitio donde desea ver el contenido desbloqueado."),
    LABEL_7("Después de ingresar al sitio, la extensión mostrará una ventana emergente solicitando la <strong>clave de acceso</strong> para activar la extensión."),
    LABEL_8("Pegue la clave de acceso que copió al descargar la extensión (paso 3) en el campo solicitado y espere a que se complete la activación."),
    LABEL_9("<em>¡Listo!</em> ¡Has instalado correctamente la extensión y estás listo para comenzar a usarla!</spam>"),
    LABEL_10("<strong>Nota: </strong>Solo se le solicitará la clave de acceso la primera vez que ejecute la extensión. Si la extensión se desinstala del navegador o si borra los datos del navegador, será necesario descargar la extensión nuevamente aquí en el sitio web para que se genere una nueva clave de acceso."),
    LABEL_11("Aviso: "),
    LABEL_12("La extensión se basa en Google Chrome, por lo que <strong>debe usarse en ella</strong>. Si se usa en otro navegador, es posible que no funcione como se esperaba."),
    LABEL_13("<a class=\"small_Lead\" id=\"linkTutDesk\" href=\"\"><spam style=\"font-size: 16px\">¿Tiene dificultades con el tutorial? ¡Relájate, tenemos un video tutorial para ayudarte con eso!</spam></a>"),
    LABEL_14("Ya tengo instalada la extensión y solo necesito actualizarla:"),
    LABEL_15(" Ingrese a Tampermonkey y elimine la versión anterior de la extensión \"Posso Ler?\""),
    LABEL_16("Descargar el archivo"),
    LABEL_17("<spam class=\"small_Lead\"><strong>3)</strong> Agregue el archivo <b>PossoLer.user.js</b> a Tampermonkey y <em>voilá!</em> Logró actualizar y ¡ahora puedes disfrutar de las novedades de la nueva versión!</spam>"),
    LABEL_18("<a class=\"small_Lead\" id=\"linkTutAtt\" href=\"\"><spam style=\"font-size: 16px\">¿Tiene dificultades con el tutorial? ¡Relájate, tenemos un video tutorial para ayudarte con eso!</spam></a>");

    @Getter
    private String label;

    es_InstrucoesDownloadDeskEnum(String label) {
        this.label = label;
    }
}
