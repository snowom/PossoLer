package br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VideoResponseDTO {
    @JsonProperty("provider")
    private String provider;
    @JsonProperty("providerId")
    private String providerId;
}
