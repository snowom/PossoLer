package br.com.possoler.api.api_posso_ler.api.jornal_otempo_api.service;

import br.com.possoler.api.api_posso_ler.api.jornal_otempo_api.dto.OTempoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class OTempoService {

    @Autowired
    private Environment env;

    /**
     * Monta e retorna objeto do DTO
     * @author thomazf
     * @return OTempoDTO
     */
    public OTempoDTO returnDTOObject()
    {
        return OTempoDTO.builder()
                .DASHBOARD_API_URL(this.getEnvConfig("jornal-o-tempo-api.variable.dashboard-api-url"))
                .COOKIE_ALLOW_CREDIT(this.getEnvConfig("jornal-o-tempo-api.variable.cookie-allow-credit"))
                .OTEMPO_REST_SERVICE_TOKEN_ENCODED(this.getEnvConfig("jornal-o-tempo-api.variable.o-tempo-rest-service-token-encoded"))
                .build();
    }

    /**
     * Retorna o valor da configuracao
     * @author thomazf
     * @param configName
     * @return String
     */
    private String getEnvConfig(String configName)
    {
        return this.env.getProperty(configName);
    }
}
