package br.com.possoler.api.api_posso_ler.api.respondeai_api.dto;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.model.Variables;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ExerciseRequestPayloadDTO {

    private String operationName;
    private String query;
    public Variables variables;
}
