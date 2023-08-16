package br.com.possoler.api.api_posso_ler.api.paywallDOM.valor_economico.controller;

import br.com.possoler.api.api_posso_ler.api.paywallDOM.valor_economico.model.ValorEconomicoConfigModel;
import br.com.possoler.api.api_posso_ler.api.paywallDOM.valor_economico.service.ValorEconomicoPaywallDOMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ValorEconomicoPaywallDOMController {

    @Autowired
    ValorEconomicoPaywallDOMService valorEconomicoPaywallDOMService;

    @GetMapping("${paywalldom-api.endpoint.valorecon}")
    private ResponseEntity<ValorEconomicoConfigModel> getPaywallDOMValorEconomico() {
        ValorEconomicoConfigModel valorEconomicoConfigModel = valorEconomicoPaywallDOMService.getValorEconomicoPDConfigs();
        return ResponseEntity.ok().body(valorEconomicoConfigModel);
    }
}
