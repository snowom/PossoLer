package br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TheoryResponseDTO {
    private String lightBody;
    private List<VideoResponseDTO> videos;
}
