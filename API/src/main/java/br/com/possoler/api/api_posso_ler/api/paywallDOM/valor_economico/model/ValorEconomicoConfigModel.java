package br.com.possoler.api.api_posso_ler.api.paywallDOM.valor_economico.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ValorEconomicoConfigModel {

    private Boolean enabledCacheMock;
    private List<String> paywallNames;
    private String phonePaywallName;
    private String containerContent;
    private String skeletonImage;
    private AdsModel adsModel;

}
