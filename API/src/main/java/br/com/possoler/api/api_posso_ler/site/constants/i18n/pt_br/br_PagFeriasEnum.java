package br.com.possoler.api.api_posso_ler.site.constants.i18n.pt_br;

import lombok.Getter;

public enum br_PagFeriasEnum {
    LABEL_1("Aviso de Férias (Leia tudo por favor)"),
    LABEL_2("Obrigado por chegar até aqui apoiando o projeto!"),
    LABEL_3(
    "À partir de hoje, darei um tempo no projeto para descansar um pouco." +
         "Caso queira deixar um comentário ou sujestão, fique à vontade para escrever!"
    ),
    LABEL_4("Por último, mas não menos importante, não se esqueça de praticar o "),
    LABEL_5("autocuidado."),
    LABEL_6(" Tire um tempo para você e faça coisas que te deixem bem! Lembre-se de que você precisa se divertir e descansar também!"),
    LABEL_7("Boas festas à todos e até 2023!");

    @Getter
    private String label;

    br_PagFeriasEnum(String label) {
        this.label = label;
    }
}
