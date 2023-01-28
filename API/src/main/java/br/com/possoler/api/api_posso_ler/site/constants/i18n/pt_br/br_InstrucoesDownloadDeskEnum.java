package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_InstrucoesDownloadDeskEnum {
    LABEL_1("Ainda não tenho a extensão instalada no meu computador:"),
    LABEL_2(" Instale a extensão "),
    LABEL_3(" Baixe o arquivo "),
    LABEL_4("Copie a chave de acesso disponibilizada"),
    LABEL_5("Adicione o arquivo <b>PossoLer.user.js</b> ao Tampermonkey"),
    LABEL_6("Em seguida, acesse o site que queira ver o conteúdo desbloqueado."),
    LABEL_7("Após entrar no site, a extensão mostrará um pop-up solicitando a <strong>chave de acesso</strong> para ativar a extensão."),
    LABEL_8("Cole no campo solicitado a chave de acesso que você copiou ao fazer o download da extensão (passo 3) e espere a ativação ser concluída."),
    LABEL_9("<em>Voila!</em> Você conseguiu instalar a extensão e já pode começar a usá-la!</spam>"),
    LABEL_10("<strong>Observação: </strong>A chave de acesso só será solicitada na primeira vez que você executar a extensão. Caso a extensão seja desinstalada do navegador ou caso você limpe os dados do navegador, será necessário baixar a extensão novamente aqui no site para que seja gerada uma nova chave de acesso."),
    LABEL_11("Atenção: "),
    LABEL_12("A extensão foi desenvolvida com base no Google Chrome, portanto ela <strong>deve ser usada nele</strong>. Caso seja usada em outro navegador, ela pode não funcionar como o esperado."),
    LABEL_13("<a class=\"small_Lead\" id=\"linkTutDesk\" href=\"\"><spam style=\"font-size: 16px\">Teve dificuldades no passo a passo? Relaxa que temos um video tutorial para te ajudar nessa!</spam></a>"),
    LABEL_14("Já tenho a extensão instalada e só preciso atualizá-la:"),
    LABEL_15(" Entre no Tampermonkey e exclua a versão antiga da extensão \"Posso Ler?\""),
    LABEL_16(" Baixe o arquivo "),
    LABEL_17("<spam class=\"small_Lead\"><strong>3)</strong> Adicione o arquivo <b>PossoLer.user.js</b> ao Tampermonkey e <em>voila!</em> Você conseguiu atualizar e já pode aproveitar as novidades da nova versão!</spam>"),
    LABEL_18("<a class=\"small_Lead\" id=\"linkTutAtt\" href=\"\"><spam style=\"font-size: 16px\">Teve dificuldades no passo a passo? Relaxa que temos um video tutorial para te ajudar nessa!</spam></a>");

    @Getter
    private String label;

    br_InstrucoesDownloadDeskEnum(String label) {
        this.label = label;
    }
}
