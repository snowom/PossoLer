package br.com.possoler.api.api_posso_ler.api.core_api.controller;

import br.com.possoler.api.api_posso_ler.api.core_api.model.SnackbarUpdate;
import br.com.possoler.api.api_posso_ler.api.core_api.service.SnackbarUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UpdateController {

    @Autowired
    private SnackbarUpdateService snackbarUpdateService;

    /**
     * Retorna dados da versão mais atual da extensão
     * @author thomazf
     * @return ResponseEntity
     */
    @GetMapping("${core-api.endpoint.search-updates}")
    private ResponseEntity<SnackbarUpdate> searchUpdates()
    {
        SnackbarUpdate snkUpdate = snackbarUpdateService.getSnackUpdateMessage();
        return ResponseEntity.ok().body(snkUpdate);
    }
}
