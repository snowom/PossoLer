package br.com.possoler.api.api_posso_ler.api.paywallDOM.valor_economico.service;

import br.com.possoler.api.api_posso_ler.api.paywallDOM.responde_ai.model.RespondeAiConfigModel;
import br.com.possoler.api.api_posso_ler.api.paywallDOM.valor_economico.model.ValorEconomicoConfigModel;
import br.com.possoler.api.api_posso_ler.api.utils.PathConstants;
import com.fasterxml.jackson.databind.ObjectMapper;
import exceptions.ServerErrorException;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

@Service
public class ValorEconomicoPaywallDOMService {

    private final String RESOURCES_PATH = System.getProperty("user.dir") + PathConstants.FOLDER_POSSOLER_INTEGRATOR + "/paywallDOM/configFiles/";
    private final String FILENAME = "valoreconomico.json";
    //private final String RESOURCES_PATH = System.getProperty("user.dir") + "\\src\\main\\resources\\paywallDOM\\configFiles\\";

    public ValorEconomicoConfigModel getValorEconomicoPDConfigs() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(new File(this.RESOURCES_PATH + this.FILENAME), ValorEconomicoConfigModel.class);
        } catch (IOException | RuntimeException e) {
            throw new ServerErrorException("Falha ao recuperar configurações");
        }
    }
}
