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
        String dashboardApiUrl = getEnvConfig("jornal-o-tempo-api.variable.dashboard-api-url");
        String cookieAllowCredit = getEnvConfig("jornal-o-tempo-api.variable.cookie-allow-credit");
        String restServiceTokenEncoded = getEnvConfig("jornal-o-tempo-api.variable.o-tempo-rest-service-token-encoded");

        return OTempoDTO.builder()
            .DASHBOARD_API_URL(dashboardApiUrl)
            .COOKIE_ALLOW_CREDIT(cookieAllowCredit)
            .OTEMPO_REST_SERVICE_TOKEN_ENCODED(restServiceTokenEncoded)
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
        return env.getProperty(configName);
    }
}
