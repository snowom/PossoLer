package br.com.possoler.api.api_posso_ler.api.jornal_otempo_api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OTempoDTO {

    private String DASHBOARD_API_URL;
    private String COOKIE_ALLOW_CREDIT;
    private String OTEMPO_REST_SERVICE_TOKEN_ENCODED;
}
