package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_BlocoTecnologiasEnum {

    LABEL_TECNOLOGIAS_USADAS("Tecnologias usadas"),
    LABEL_1("Caso tenha ficado curioso de como a extensão é feita ou até mesmo queira programar sua própria extensão, aqui estão as principais tecnologias usadas para dar vida ao projeto!"),
    LABEL_2("Javascript"),
    LABEL_3("Usado em 50% do projeto, ele é o principal responsável por fazer as manipulações necessárias na "),
    LABEL_4("DOM"),
    LABEL_5(" para que seja possível a visualização dos conteúdos bloqueados nos sites."),
    LABEL_6("Java"),
    LABEL_7("Usado nos outros 50% do projeto, o "),
    LABEL_8(" é considerado o coração do projeto, onde ele é utilizado para construir as "),
    LABEL_9("APIs "),
    LABEL_10("que realizam funções vitais da extensão e do site, como por exemplo, a contagem de downloads, verificação e envio de notificações de atualizações da extensão. Com ele também são feitas as APIs que desbloqueam sites com "),
    LABEL_11("hard paywall"),
    LABEL_12(" ou que precisam de solicitações que não podem ser feitas pelo frontend, como o Valor Econômico, Jornal O Popular, e o Responde Aí."),
    LABEL_13("Frameworks e bibliotecas"),
    LABEL_14("Spring Framework"),
    LABEL_15("É um framework desenvolvido para a plataforma Java baseado nos design patterns inversão de controle e injeção de dependência. É constituído por diversos e completos módulos capazes de dar um boost na aplicação Java!"),
    LABEL_16("Axios"),
    LABEL_17("Axios é um cliente HTTP baseado em Promises para fazer requisições."),
    LABEL_18("Lombok"),
    LABEL_19("É uma biblioteca Java focada em produtividade e redução de código boilerplate que, por meio de anotações adicionadas ao código, ensina ao compilador durante o processo de compilação a criar código Java."),
    LABEL_20("Maven"),
    LABEL_21("É uma ferramenta de gerenciamento e automação de processos de obtenção de dependências e de compilação de projetos Java.");

    @Getter
    private String label;

    br_BlocoTecnologiasEnum(String label) {
        this.label = label;
    }
}
