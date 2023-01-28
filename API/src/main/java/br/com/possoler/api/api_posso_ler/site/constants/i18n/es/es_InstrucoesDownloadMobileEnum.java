package br.com.possoler.api.api_posso_ler.site.constants.i18n.es;

import lombok.Getter;

public enum es_InstrucoesDownloadMobileEnum {
    LABEL_1("Todavía no tengo la extensión instalada en mi teléfono o necesito actualizarla:"),
    LABEL_2("¿Viste el paso a paso y te resultó complicado? ¡Relájate, tenemos un video tutorial para ayudarte con esto! "),
    LABEL_3("Descarga la extensión en tu móvil haciendo clic en <a id=\"btnDownloadMob\" href=\"\"> AQUÍ </a>"),
    LABEL_4("Copie la clave de acceso proporcionada"),
    LABEL_5("Instale el <a href=\"https://play.google.com/store/apps/details?id=com.kiwibrowser.browser\"> Navegador Kiwi - Rápido y silencioso </a>. (Omita el paso si ya lo tiene instalado)"),
    LABEL_6("Al abrir el navegador, en la esquina superior derecha, toque el icono representado por \"tres puntos\" en su pantalla de inicio y vaya a \"Extensiones\"."),
    LABEL_7("En la esquina superior derecha de la pantalla, haga clic en la bandera llamada <strong> \"Modo de desarrollador\" </strong> para que permanezca encendida."),
    LABEL_8("Al habilitar la bandera, aparecerán 4 botones: <strong>\"+(from store)\"</strong>, <strong>\"+(from .zip/.crx/.user.js)\"</strong>,  <strong> \"+(from .zip/.crx/.user.js)\" </strong> y <strong> \"Actualizar\" </strong>. Haga clic en el segundo botón: <strong> \"Cargar\" </strong>. Si se le pide que elija una acción, seleccione su <strong> administrador de archivos </strong>. "),
    LABEL_9("Navega hasta donde se descargó la extensión (normalmente en la carpeta Descargas) y haz clic en el archivo <strong> PossoLer.crx </strong>"),
    LABEL_10("Luego puede ver que la extensión ya se agregó en el navegador, pero aún está <strong> no habilitada </strong>. Para habilitarlo, simplemente haga clic en la bandera ubicada en la parte inferior de la tarjeta de extensión (ubicada a la derecha del botón Eliminar) para que permanezca encendida. "),
    LABEL_11("Aparecerá una ventana emergente que indica que la extensión se ha deshabilitado porque requiere más permisos. Haga clic en <strong>Aceptar</strong>"),
    LABEL_12("Luego, vaya al sitio donde desea ver el contenido desbloqueado."),
    LABEL_13("Después de ingresar al sitio, la extensión mostrará una ventana emergente solicitando la <strong>clave de acceso</strong> para activar la extensión."),
    LABEL_14("Pegue la clave de acceso que copió al descargar la extensión en el campo solicitado y espere a que se complete la activación."),
    LABEL_15("<em>¡Listo!</em> ¡Has instalado correctamente la extensión y estás listo para comenzar a usarla!"),
    LABEL_16("Observación: "),
    LABEL_17("Esta clave solo se le pedirá la primera vez que instale la extensión. Si la extensión se desinstala del navegador o si borra los datos del navegador, será necesario generar una nueva clave de acceso.");

    @Getter
    private String label;

    es_InstrucoesDownloadMobileEnum(String label) {
        this.label = label;
    }
}
