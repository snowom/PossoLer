package br.com.possoler.api.api_posso_ler.api.jornal_otempo_api.controller;

import br.com.possoler.api.api_posso_ler.api.jornal_otempo_api.dto.OTempoDTO;
import br.com.possoler.api.api_posso_ler.api.jornal_otempo_api.service.OTempoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class otempoController {

    @Autowired
    private OTempoService oTempoService;

    @GetMapping("${jornal-o-tempo-api.endpoint.get-configs}")
    private ResponseEntity<OTempoDTO> getRestServiceTokenEncoded()
    {
        return ResponseEntity.ok().body(oTempoService.returnDTOObject());
    }
}
