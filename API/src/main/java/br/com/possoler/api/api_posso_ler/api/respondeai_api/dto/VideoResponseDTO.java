package br.com.possoler.api.api_posso_ler.api.respondeai_api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VideoResponseDTO {
    private String provider;
    private String providerId;
    private String __typename;
}
