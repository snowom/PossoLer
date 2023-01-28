package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_InstrucoesDownloadMobileEnum {
    LABEL_1("Ainda não tenho a extensão instalada no meu celular ou preciso atualizá-la:"),
    LABEL_2("Viu o passo a passo e achou complicado? Relaxa que temos um video tutorial para te ajudar nessa!"),
    LABEL_3("Baixe a extensão em seu celular clicando <a id=\"btnDownloadMob\" href=\"\">AQUI</a>"),
    LABEL_4("Instale o <a href=\"https://play.google.com/store/apps/details?id=com.kiwibrowser.browser\">Kiwi Browser - Fast & Quiet</a>. (Ignorar etapa caso já tenha ele instalado)"),
    LABEL_5("Copie a chave de acesso disponibilizada"),
    LABEL_6("Ao abrir o navegador baixado, no canto superior direito, toque no ícone representado por “três pontos” em sua tela inicial e vá em “Extensões”."),
    LABEL_7("No canto superior direito da tela, clique na flag chamado <strong>\"Modo do desenvolvedor\"</strong> de forma que ela fique ligada."),
    LABEL_8("Ao habilitar a flag, aparecerão 4 botões: <strong>\"+(from store)\"</strong>, <strong>\"+(from .zip/.crx/.user.js)\"</strong>, <strong>\"Compactar extensão\"</strong> e <strong>\"Atualizar\"</strong>. Clique no segundo botão: <strong>\"+(from .zip/.crx/.user.js)\"</strong>. Caso seja perguntado para escolher uma ação, selecione seu <strong>gerenciador de arquivos</strong>."),
    LABEL_9("Navegue para onde a extensão foi baixada (geralmente na pasta Downloads) e clique no arquivo <strong>PossoLer.crx</strong>"),
    LABEL_10("Em seguida, é possível ver que a extensão já foi adicionada no navegador, mas ela ainda <strong>não foi habilitada</strong>. Para habilitá-la, basta clicar na flag localizada no canto inferior do card da extensão (localizada ao canto direito do botão remover) de forma que ela fique ligada."),
    LABEL_11("Um popup aparecerá informando que a extensão foi desativada porque requer mais permissões. Clique em <strong>OK</strong>"),
    LABEL_12("Em seguida, acesse o site que queira ver o conteúdo desbloqueado."),
    LABEL_13("Após entrar no site, a extensão mostrará um pop-up solicitando a <strong>chave de acesso</strong> para ativar a extensão."),
    LABEL_14("Cole no campo solicitado a chave de acesso que você copiou ao fazer o download da extensão e espere a ativação ser concluída."),
    LABEL_15("<em>Voila!</em> Você conseguiu instalar a extensão e já pode começar a usá-la!"),
    LABEL_16("Observação: "),
    LABEL_17("A chave de acesso só será solicitada na primeira vez que você executar a extensão. Caso a extensão seja desinstalada do navegador ou caso você limpe os dados do navegador, será necessário gerar uma nova chave de acesso.");


    @Getter
    private String label;

    br_InstrucoesDownloadMobileEnum(String label) {
        this.label = label;
    }
}
