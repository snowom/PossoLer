package br.com.possoler.api.api_posso_ler.api.paywallDOM.valor_economico.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdsModel {
    private String adsClassName;
    private String adsKeyword;
}
