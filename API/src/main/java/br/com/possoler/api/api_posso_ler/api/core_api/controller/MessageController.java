package br.com.possoler.api.api_posso_ler.api.core_api.controller;

import br.com.possoler.api.api_posso_ler.api.core_api.dto.MessageDTO;
import br.com.possoler.api.api_posso_ler.api.core_api.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class MessageController {

    @Autowired
    MessageService messageService;

    /**
     * Retorna mensagens do ADMIN para os usuários
     * @author thomazf
     * @return ResponseEntity
     */
    @GetMapping("${core-api.endpoint.search-messages}")
    private ResponseEntity<MessageDTO> getMessages()
    {
        MessageDTO dto = messageService.getMessages();
        return ResponseEntity.ok().body(dto);
    }
}
