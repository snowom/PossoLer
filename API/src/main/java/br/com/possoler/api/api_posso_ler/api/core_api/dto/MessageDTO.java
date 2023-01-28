package br.com.possoler.api.api_posso_ler.api.core_api.dto;

import java.util.ArrayList;
import java.util.List;

import br.com.possoler.api.api_posso_ler.api.core_api.model.Message;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageDTO {

    private List<Message> messages;
}
