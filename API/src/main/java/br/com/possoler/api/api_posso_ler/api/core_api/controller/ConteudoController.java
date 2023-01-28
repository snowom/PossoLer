package br.com.possoler.api.api_posso_ler.api.core_api.controller;

import java.util.HashMap;
import java.util.Map;

import br.com.possoler.api.api_posso_ler.api.core_api.dto.ConteudoDTO;
import br.com.possoler.api.api_posso_ler.api.core_api.model.Conteudo;
import br.com.possoler.api.api_posso_ler.api.core_api.service.ConteudoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ConteudoController {

    @Autowired
    ConteudoService conteudoService;

    /**
     * Retorna quantidade total de conteúdos desbloqueados pela extensão
     * @author thomazf
     * @return ResponseEntity
     */
    @GetMapping("${core-api.endpoint.get-conteudo}")
    private ResponseEntity<ConteudoDTO> getConteudos()
    {
        Conteudo conteudo = conteudoService.getConteudoEntity();
        return ResponseEntity.ok().body(ConteudoDTO.parseToDTO(conteudo));
    }


    /**
     * Incrementa na quantidade total de conteudos desbloqueados pela extensão
     * @author thomazf
     * @return ResponseEntity
     */
    @PostMapping("${core-api.endpoint.increment-views}")
    private ResponseEntity<Map<String, String>> incrementConteudos()
    {
        Map<String, String> response = new HashMap<>();
        Boolean status = conteudoService.incrementConteudo();
        if(status){
            response.put("status", "sucesso");
            return ResponseEntity.ok().body(response);
        }
        response.put("status", "falha");
        return ResponseEntity.internalServerError().body(response);
    }
}
